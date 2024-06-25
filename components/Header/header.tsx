"use client";

import { useTheme } from "next-themes";
import React from "react";

export const Header = () => {
  const { theme, setTheme } = useTheme();
  return (
    <header className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
      <a className="flex items-center justify-center" href="/">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#ff460f"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-6 w-6"
        >
          {/* <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path> */}
          <text x="0" y="15" fill="currentColor">
            CP
          </text>
        </svg>
        <span className="sr-only">CheerPal</span>
      </a>
      <nav className="ml-auto flex items-center gap-4 sm:gap-6 ">
        <a
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
          href="/"
        >
          Home
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
          href="/#about"
        >
          About
        </a>
        <a
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
          href="/#features"
        >
          Features
        </a>

        <a
          className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
          href="/#contact"
        >
          Contact
        </a>

        {/* toggle dark/light mode */}
        <button
          className="text-sm font-medium hover:text-primary transition-all ease-out dark:hover:text-primary/400 bg-gray-100 dark:bg-gray-800 p-2 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700"
          onClick={() => {
            setTheme(theme === "dark" ? "light" : "dark");
          }}
        >
          💡
        </button>
      </nav>
    </header>
  );
};
