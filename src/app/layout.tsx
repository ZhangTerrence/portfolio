import type { Metadata } from "next";
import { Ubuntu } from "next/font/google";
import "./globals.css";

const font = Ubuntu({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Terrence Zhang",
  description: "",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" data-theme="dark">
      <body
        className={`${font.className} transition-colors duration-1000 ease-out`}
      >
        {children}
      </body>
    </html>
  );
}
