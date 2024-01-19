"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";
import React from "react";

type ProvidersProps = { children: React.ReactNode };
function Providers({ children }: ProvidersProps) {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>
    </SessionProvider>
  );
}

export default Providers;
