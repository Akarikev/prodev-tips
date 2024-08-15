import React from "react";
import { BiLoader } from "react-icons/bi";

function Loading() {
  return (
    <div className="flex justify-center items-center flex-col">
      <h1>loading page....</h1>

      <div>
        <BiLoader className="animate-spin" />
      </div>
    </div>
  );
}

export default Loading;
