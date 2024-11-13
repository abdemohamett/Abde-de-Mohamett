import type { Metadata } from "next";
import {Inter_Tight} from "next/font/google";
import "./globals.css";

 
const InterTight = Inter_Tight({
  weight: '400',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: "Abde Mohamett",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterTight.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
