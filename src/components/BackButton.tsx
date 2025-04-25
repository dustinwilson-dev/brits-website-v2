import React from "react";
import Link from "next/link";

function BackButton() {
  return (
    <div className="flex justify-center">
      <Link href="/">&lt; Back</Link>
    </div>
  );
}

export default BackButton;
