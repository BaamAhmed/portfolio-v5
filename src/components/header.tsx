"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { findNode, siteTree } from "@/data/tree";
import Link from "next/link";
import { ThemeToggle } from "./theme-toggle";

export const Header = () => {
  const pathname = usePathname();

  return (
    <nav className="mb-20 relative z-20 flex">
      <div className={`flex items-center grow justify-between `}>
        <Link href={"/"} className="grow">
          <span className="opacity-30">baam@portfolio~</span>
          {pathname}
        </Link>
        <ThemeToggle />
      </div>
    </nav>
  );
};
