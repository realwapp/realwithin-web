import type {
  Metadata,
} from "next";

import {
  Geist,
  Geist_Mono,
} from "next/font/google";

import {
  Suspense,
} from "react";

import WebAnalyticsTracker from "../components/WebAnalyticsTracker";

import "./globals.css";

const geistSans = Geist({
  variable:
    "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable:
    "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(
    "https://realwithin.com"
  ),

  title: "RealWithin",

  description:
    "Reflect on how you feel, notice patterns over time, and understand yourself more clearly with RealWithin.",

  applicationName:
    "RealWithin",

  icons: {
    icon: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Suspense
          fallback={null}
        >
          <WebAnalyticsTracker />
        </Suspense>

        {children}
      </body>
    </html>
  );
}