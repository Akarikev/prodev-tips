"use client";

import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderPinwheel, PlusCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { programmingTips } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { changeLanguageIcon } from "@/lib/lang-icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Footer from "@/components/footer";
import AddTip from "@/components/addtip";

type User = {
  username: string;
  userRole: string;
  userLanguage: string;
};

type Tip = {
  id: number;
  language: string;
  title: string;
  tip: string;
  author: string;
  date: string;
};

const FILTERS = ["All", "JavaScript", "Python", "Java", "C#", "Ruby"];
const TIPS_PER_PAGE = 10; // Number of tips per page

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [topTips, setTopTips] = useState<Tip[]>([]);
  const [tips, setTips] = useState<Tip[]>([]);
  const [filteredTips, setFilteredTips] = useState<Tip[]>([]);
  const [currentPage, setCurrentPage] = useState(1); // Current page for pagination
  const [selectedFilter, setSelectedFilter] = useState<string>();

  // const handleFilterChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
  //   setSelectedFilter(event.target.value);
  //   filterTipByLanguage(event.target.value);
  // };

  const [noSearchFound, setNoSearchFound] = useState(false);

  const searchTip = (event: React.ChangeEvent<HTMLInputElement>) => {
    const query = event.target.value.trim().toLowerCase();
    const filtered = tips.filter(
      (tip) =>
        tip.title.toLowerCase().includes(query) ||
        tip.language.toLowerCase().includes(query)
    );

    setFilteredTips(filtered);
    setTopTips(filtered.slice(0, 5)); // Updates the top tips based on the search results
    setCurrentPage(1); // Resets to the first page

    if (filtered.length === 0) {
      setNoSearchFound(true);
    } else {
      setNoSearchFound(false);
    }

    console.log(`Searching for: ${query}`);
  };

  const filterTipByLanguage = (language: string, page: number = 1) => {
    console.log(`Filtering by ${language} on page ${page}`);
    setCurrentPage(page); // Set the current page
    setSelectedFilter(language); // Set the selected filter

    console.log(`Selected filter: ${selectedFilter}`);

    if (language === "All") {
      const startIndex = (page - 1) * TIPS_PER_PAGE;
      const endIndex = startIndex + TIPS_PER_PAGE;
      const paginatedTips = tips.slice(startIndex, endIndex);
      setFilteredTips(paginatedTips);
    } else {
      const filtered = tips.filter((tip) => tip.language === language);
      setFilteredTips(filtered);
    }
  };

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser) as User);
    }

    const topFiveTips = programmingTips.slice(0, 5); // Get the first 5 tips
    setTopTips(topFiveTips);
    setTips(programmingTips);
  }, []);

  // Loads the first 10 tips when the component is first rendered
  useEffect(() => {
    if (tips.length > 0) {
      filterTipByLanguage("All");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tips]);

  // Calculate total pages for "All" filter
  const totalPages = Math.ceil(tips.length / TIPS_PER_PAGE);

  return (
    <div
      className="flex flex-col h-screen p-6 md:p-16"
      suppressHydrationWarning
    >
      {user ? (
        <div>
          <hr className="mb-2" />
          <div className="flex justify-between gap-4">
            <h1 className="font-bold underline tracking-tighter text-muted-foreground">
              Hello {user.username}! how&apos;s it going?
            </h1>

            <Avatar>
              <AvatarImage
                src="https://github.com/Akarikev.png"
                width={10}
                height={10}
              />
              <AvatarFallback>AK</AvatarFallback>
            </Avatar>
          </div>

          <div className="mt-4 flex justify-between items-center gap-4">
            <Input
              placeholder="Search tips based on programming language or topic"
              className="max-w-screen-md"
              onChange={searchTip}
            />

            {/* add button */}

            <AddTip />
          </div>

          <div className="mt-4">
            <h1 className="text-2xl md:text-4xl tracking-tighter font-extrabold text-muted-foreground">
              Popular 🔥
            </h1>
            <p className="text-muted-foreground text-sm mt-2">
              Popular coding tips our editors curated! based on languages!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-6">
              {topTips.map((tip) => (
                <Link
                  href={`dashboard/tips/${tip.id}`}
                  key={tip.id}
                  className="mt-4 hover:scale-x-105 duration-50 transition-transform"
                >
                  <Card className="mt-4 hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="inline-flex justify-between items-center ">
                        {tip.title}

                        <Badge
                          variant="outline"
                          className=" text-xs  rounded-full"
                        >
                          🔥
                        </Badge>
                      </CardTitle>
                      <CardDescription>{tip.tip}</CardDescription>
                    </CardHeader>

                    <CardFooter className="flex justify-between text-sm">
                      <p>
                        <LanguageIcon language={tip.language} />
                      </p>
                      <p className="text-xs font-bold text-yellow-700">
                        by {tip.author}
                      </p>
                      <p className="text-xs font-bold ">on {tip.date}</p>
                    </CardFooter>
                  </Card>
                </Link>
              ))}

              {/* No search results comp */}
              <div className="flex justify-center items-center text-center">
                {noSearchFound && (
                  <p className="text-red-500 font-bold text-3xl text-center">
                    No search results found
                  </p>
                )}
              </div>
            </div>

            {/* Filters */}
            <div className="mt-10">
              <h1 className="text-2xl md:text-4xl tracking-tighter font-extrabold text-muted-foreground">
                FOR YOU
              </h1>

              <p className="text-muted-foreground text-sm mt-2 mb-4">
                curated based on your{" "}
                <span className="italic underline text-yellow-600">info</span>
              </p>

              <p className="text-sm text-center text-muted-foreground">
                <span className="underline">click</span> to filter by{" "}
                <span className="underline text-blue-600">language</span>
              </p>
              <div className="flex gap-4 flex-wrap items-center mt-4 mb-4 justify-center">
                {FILTERS.map((filter, i) => (
                  <small
                    key={i}
                    className={buttonVariants({
                      size: "default",
                      variant:
                        selectedFilter === filter ? "default" : "outline",
                      className: cn(
                        "text-sm text-center cursor-pointer text-muted-foreground rounded-full",
                        {
                          " text-blue-600 rounded-full":
                            filter === selectedFilter,
                        }
                      ),
                    })}
                    onClick={() => filterTipByLanguage(filter)}
                  >
                    {filter}
                  </small>
                ))}
              </div>

              {/* Tips */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredTips.map((tip) => (
                  <Link
                    href={`dashboard/tips/${tip.id}`}
                    key={tip.id}
                    className="mt-4 hover:scale-105 duration-50 transition-transform"
                  >
                    <Card className="mt-4 hover:shadow-lg">
                      <CardHeader>
                        <CardTitle>{tip.title}</CardTitle>
                        <CardDescription>{tip.tip}</CardDescription>
                      </CardHeader>

                      <CardFooter className="flex justify-between text-sm">
                        <p>
                          <LanguageIcon language={tip.language} />
                        </p>
                        <p className="text-xs font-bold text-yellow-700">
                          by {tip.author}
                        </p>
                        <p className="text-xs font-bold ">on {tip.date}</p>
                      </CardFooter>
                    </Card>
                  </Link>
                ))}
              </div>

              {/* Pagination Controls */}
              {totalPages > 1 && (
                <div className="flex justify-center mt-4 mb-9">
                  {Array.from({ length: totalPages }).map((_, index) => (
                    <Button
                      key={index}
                      onClick={() => filterTipByLanguage("All", index + 1)}
                      variant={
                        currentPage === index + 1 ? "default" : "outline"
                      }
                      className="mx-1"
                    >
                      {index + 1}
                    </Button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <LoaderPinwheel className="animate-spin text-muted-foreground" />
          <p className="text-muted-foreground">Loading your dashbord info...</p>
        </div>
      )}

      <Footer />
    </div>
  );
}

export default Dashboard;

export const LanguageIcon = ({ language }: { language: string }) => {
  const icon = changeLanguageIcon(language);
  if (typeof icon === "string") {
    return <span>{icon}</span>; // Render the string icon as text
  }
  return React.createElement(icon, { className: "text-blue-500 h-6 w-6" });
};
