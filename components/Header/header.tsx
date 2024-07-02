"use client";
import {
  LoginButton,
  RegisterButton,
} from "@/components/atomic/button/auth.button";
import { Session } from "next-auth";
import { useTheme } from "next-themes";
import React from "react";

interface HeaderProps {
  session: Session | null;
}

export const Header = ({ session }: HeaderProps) => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="container mx-auto px-4 lg:px-6 h-14 flex items-center">
      <div className="flex items-center gap-4">
        <a href="/">
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
            className="h-6 w-6 mx-auto"
            style={{ marginBottom: "-5px" }} // Add style to remove the empty space at the bottom
          >
            {/* <path d="m8 3 4 8 5-5 5 15H2L8 3z"></path> */}
            <text x="0" y="15" fill="currentColor">
              CP
            </text>
          </svg>
          <span className="sr-only">CheerPal</span>
        </a>
        <div className="flex-grow">
          <h1 className="text-base font-semibold text-gray-900 dark:text-gray-100">
            {session?.user ? `Welcome, ${session.user.name}` : "CheerPal"}
          </h1>
        </div>
      </div>
      {session ? (
        <nav className="ml-auto flex items-center gap-4 sm:gap-6 ">
          <a
            href="/"
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
          >
            Dashboard
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
            href="/profile"
          >
            Profile
          </a>

          <a
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
            href="/api/auth/signout"
          >
            Sign Out
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
      ) : (
        <nav className="ml-auto flex items-center gap-4 sm:gap-6 ">
          <a
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
            href="/"
          >
            Home
          </a>
          <a
            className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
            href="/#features"
          >
            Features
          </a>

          <LoginButton />
          <RegisterButton />

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
      )}
    </header>
  );
};
