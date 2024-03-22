"use client";

import { ArrowRight } from "lucide-react";
import { useConvexAuth } from "convex/react";
import { SignInButton, SignUpButton, UserButton } from "@clerk/clerk-react";

import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import Link from "next/link";

export const Heading = () => {

  const { isAuthenticated, isLoading } = useConvexAuth();

  return ( 
    <div className="max-w-3xl space-y-4">
      <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold">
        Your Ideas, Documents, & Plans. Unified. Welcome to <span className="underline">Taking Notes</span>
      </h1>
      <h3 className="text-base sm:text-xl md:text2xl font-medium">
        Taking Notes is the connected workspace where <br />
        better, faster work happens.
      </h3>
      {isLoading && (
        <div className="w-full flex items-center justify-center">
          <Spinner size="lg" />
        </div>
      )}
      {!isLoading && !isAuthenticated && (
        <SignInButton mode="modal">
          <Button>
            Register
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Button>
        </SignInButton>
      )}
      {!isLoading && isAuthenticated && (
        <Button asChild>
          <Link href="/documents">
            Enter Taking Notes
            <ArrowRight className="h-4 w-4 ml-2"/>
          </Link>
        </Button>
      )}
    </div>
  );
}