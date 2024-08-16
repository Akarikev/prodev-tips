"use client";

import React, { Fragment, useEffect, useState } from "react";
import { programmingTips } from "@/lib/data";
import LanguageIcon from "@/components/language-icon";
import Link from "next/link";
import { ArrowBigLeftDash, ArrowLeftCircle } from "lucide-react";

type Tip = {
  id: number;
  language: string;
  title: string;
  tip: string;
  author: string;
  date: string;
};

function Tips({ params }: { params: { id: string } }) {
  const [tipD, setTip] = useState<Tip | null>(null);

  useEffect(() => {
    const foundTip = programmingTips.find((t) => t.id === parseInt(params.id));
    setTip(foundTip || null);
  }, [params.id]);

  if (!tipD) {
    return <p>Tip not found</p>;
  }

  return (
    <Fragment key={tipD.id}>
      <Link
        href={"/dashboard"}
        className="inline-flex gap-2 mt-2 ml-2 items-center hover:underline"
      >
        <ArrowLeftCircle />
        go back to dashboard
      </Link>
      <div className="flex flex-col min-h-screen justify-center items-center px-2 md:px-16">
        <h1 className="mt-3 text-2xl md:text-4xl font-extrabold tracking-tighter uppercase">
          Tip {params.id}
        </h1>
        <TipDetails data={tipD} />
      </div>
    </Fragment>
  );
}

export default Tips;

export const TipDetails = ({ data }: { data: Tip }) => {
  return (
    <div className="flex flex-col justify-center h-screen items-center gap-3">
      <h1 className="text-2xl md:text-3xl tracking-tighter text-center text-red-300 underline font-extrabold uppercase">
        {data.title}
      </h1>
      <p className="max-w-[900px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed text-center tracking-tight">
        {data.tip}
      </p>
      <LanguageIcon language={data.language} />
      <p className="font-bold text-sm md:text-base text-yellow-700">
        by {data.author}
      </p>
      <small>on {data.date}</small>
    </div>
  );
};
