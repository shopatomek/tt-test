"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";
import DataBaseTable from "@/app/database/data-table";
import { columns } from "@/app/database/columns";
import { data } from "@/lib/data";
import { ThemeToggle } from "./themetoggle";

const SignInButton = () => {
  const { data: session } = useSession();
  console.log(session);

  useEffect(() => {
    if (session) {
      console.log(`User logged in at: ${new Date().toLocaleTimeString()}`);
    } else {
      console.log(`User logged out at: ${new Date().toLocaleTimeString()}`);
    }
  }, [session]);

  if (session && session.user) {
    return (
      <div className="container ml-auto">
        <div className="flex float-right py-5">
          <Button
            className="text-white bg-blue-600 hover:bg-blue-700"
            onClick={() => signOut()}
          >
            <FcGoogle className="mr-2 flex text-2xl" />
            Sign Out
          </Button>
        </div>
        <DataBaseTable columns={columns} data={data} />
      </div>
    );
  }
  return (
    <div className="flex flex-col items-center justify-center text-center">
      <h1 className="text-3xl font-bold mb-4">Sign in to Google</h1>
      <div className="flex items-center justify-center">
        <Button
          className="text-white bg-blue-600 hover:bg-blue-700"
          onClick={() => signIn()}
        >
          <FcGoogle className="mr-2 flex text-2xl" />
          Sign In
        </Button>
      </div>
    </div>
  );
};

export default SignInButton;
