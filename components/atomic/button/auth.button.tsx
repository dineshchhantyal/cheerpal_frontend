"use client";

import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
  return (
    <button
      className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
      onClick={() => signIn()}
    >
      Sign in
    </button>
  );
};

export const RegisterButton = () => {
  return (
    <Link
      href="/register"
      className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
    >
      Register
    </Link>
  );
};

export const LogoutButton = () => {
  return (
    <button
      className="text-sm font-medium hover:underline underline-offset-4 hover:text-primary transition-all ease-out dark:hover:text-primary/400"
      onClick={() => signOut()}
    >
      Sign Out
    </button>
  );
};

export const ProfileButton = () => {
  return <Link href="/profile">Profile</Link>;
};
