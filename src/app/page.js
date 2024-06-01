'use client';

import SigninSignup from "@/components/SigninSignup/SigninSignup";

export default function Home() {
  return (
    <>
      <div className="flex justify-center items-center min-h-screen w-full bg-gradient-to-r from-blue-200 to-blue-400 text-white text-center">
        <div className="m-auto">
          <SigninSignup />
        </div>
      </div>
    </>
  );
}
