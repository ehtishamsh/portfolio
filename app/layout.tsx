import type { Metadata } from "next";
import { Sora } from "next/font/google";
import "./globals.css";

import Cursor from "./_components/Cursor";
import Masterlayout from "./_components/layout";

const sora = Sora({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio",
  description: "Developed by Ehtisham Shah",
  icons: {
    icon: "/icon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className="bg-black !scroll-smooth cursor-none scroll-pt-2 select-none"
    >
      <body className={sora.className}>
        <Masterlayout {...{ children }} />
        <Cursor />
      </body>
    </html>
  );
}
