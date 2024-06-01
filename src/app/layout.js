import { Inter } from "next/font/google";
import { UserProvider } from '@auth0/nextjs-auth0/client';
import "../styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "ChatGPT Clone",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>ChatGPT - Clone</title>
      </head>
      <body className={inter.className}>
        <main>
          <UserProvider>
            {children}
          </UserProvider>
        </main>
      </body>
    </html>
  );
}
