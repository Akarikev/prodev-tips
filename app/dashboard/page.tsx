"use client";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { LoaderPinwheel, PlusCircleIcon } from "lucide-react";
import React, { useEffect, useState } from "react";
import { programmingTips } from "@/lib/data";
import { Input } from "@/components/ui/input";
import { BiLogoJavascript } from "react-icons/bi";
import { changeLanguageIcon } from "@/lib/lang-icon";
import Link from "next/link";
import { Button } from "@/components/ui/button";
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

function Dashboard() {
  const [user, setUser] = useState<User | null>(null);
  const [topTips, setTopTips] = useState<Tip[]>([]);

  useEffect(() => {
    const storedUser = localStorage.getItem("user");

    if (storedUser) {
      setUser(JSON.parse(storedUser) as User);
    }

    const topFiveTips = programmingTips.slice(0, 4); // Get the first 5 tips
    setTopTips(topFiveTips);
  }, []);

  console.log(topTips);

  return (
    <div className="flex flex-col h-screen p-6 md:p-16">
      {user ? (
        <div>
          <hr className="mb-2" />
          <h1 className="font-bold underline tracking-tighter text-muted-foreground">
            hello {user.username}!
          </h1>

          <div className="mt-4 flex justify-between items-center gap-4">
            <Input
              placeholder="search tips based on programming language or topic"
              className="max-w-screen-md "
            />

            <Button className="inline-flex gap-2 items-center">
              <PlusCircleIcon className="w-4 h-4" />
              Add Tip
            </Button>
          </div>

          <div className="mt-4">
            <h1 className="text-2xl md:text-4xl tracking-tighter font-extrabold text-muted-foreground">
              Popular
            </h1>
            <p className="text-muted-foreground text-sm">
              popular coding tips our editors curated!
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {topTips.map((tip) => {
                return (
                  <Link
                    href={`dashboard/tips/${tip.id}`}
                    key={tip.id}
                    className="mt-4 hover:scale-105 duration-50 transition-transform"
                  >
                    <Card className="mt-4  hover:shadow-lg  ">
                      <CardHeader>
                        <CardTitle>{tip.title}</CardTitle>
                        <CardDescription>{tip.tip}</CardDescription>
                      </CardHeader>

                      <CardFooter className="flex justify-between text-sm">
                        <p>
                          <LanguageIcon language={tip.language} />
                        </p>
                        <p>author: {tip.author}</p>
                        <p>{tip.date}</p>
                      </CardFooter>
                    </Card>
                  </Link>
                );
              })}
            </div>

            {/* filters  */}
            <div className="mt-5">
              <h1 className="text-2xl md:text-4xl tracking-tighter font-extrabold text-muted-foreground">
                Filters
              </h1>
              <div className="flex gap-4 items-center mt-4 mb-4 justify-center ">
                {FILTERS.map((filter, i) => {
                  return (
                    <small
                      key={i}
                      className="cursor-pointer p-1.5 px-1.5 bg-zinc-200 hover:bg-zinc-500 text-black transition-all delay-100 hover:text-white rounded-full text-xs"
                    >
                      {filter}
                    </small>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center ">
          <LoaderPinwheel className="animate-spin text-muted-foreground " />
          <p className="text-muted-foreground">Loading your info...</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;

const LanguageIcon = ({ language }: { language: string }) => {
  const icon = changeLanguageIcon(language);
  if (typeof icon === "string") {
    return <>{icon}</>;
  }
  return React.createElement(icon, { className: "text-blue-500 h-6 w-6" });
};
