"use client";

import React, { Fragment, useEffect, useState } from "react";
import { programmingTips } from "@/lib/data";
import Link from "next/link";
import { ArrowBigLeftDash, ArrowLeftCircle } from "lucide-react";
import { TipDetails } from "@/components/tip-details";

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
    return <p className="mt-3 font-extrabold text-center underline">Tip not found</p>;
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
