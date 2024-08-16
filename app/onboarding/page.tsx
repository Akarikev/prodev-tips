import Footer from "@/components/footer";
import HomePage from "@/components/homepage";
import { buttonVariants } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="h-[50rem] w-full dark:bg-black bg-white  dark:bg-dot-white/[0.2] bg-dot-black/[0.2] relative flex flex-col min-h-screen items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>

      <div className="">
        <Link
          href={"/"}
          className={buttonVariants({
            variant: "link",
            className: "inline-flex gap-2 items-center dark:text-white",
          })}
        >
          <ArrowLeft />
          go back home
        </Link>
        <HomePage />
      </div>

      <Footer />
    </main>
  );
}
