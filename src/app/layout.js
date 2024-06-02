'use client';

import React from "react";
import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

const RootLayout = ({ children }) => {
  return (
    <UserProvider>
      <div className={inter.className}>
        {children}
      </div>
    </UserProvider>
  );
};

export default RootLayout;
