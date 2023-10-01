"use client";
import { signIn, signOut, useSession } from "next-auth/react";
import React from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { FcGoogle } from "react-icons/fc";
import Image from "next/image";

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
      <div className="flex gap-4 ml-auto">
        <p className="text-neutral-600 text-sm font-bold ">
          Welcome
          <p className="text-neutral-400">{session.user.name}</p>
        </p>
        {/* <Image
          src={session.user.image as string}
          height={1}
          width={50}
          className="rounded-full h-10 w-10  border: bg-blue-700 border-3"
          alt=""
        /> */}
        <Button
          className="text-white bg-blue-600 hover:bg-blue-700 ml-auto"
          onClick={() => signOut()}
        >
          <FcGoogle className="mr-2 size-2xl" />
          Sign Out
        </Button>
      </div>
    );
  }

  return (
    <Button
      className="text-white bg-blue-600 hover:bg-blue-700 ml-auto"
      onClick={() => signIn()}
    >
      <FcGoogle className="mr-2 size-xl" />
      Sign In
    </Button>
  );
};

export default SignInButton;
