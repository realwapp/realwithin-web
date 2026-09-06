"use client";

import {
  useEffect,
} from "react";

import {
  usePathname,
  useSearchParams,
} from "next/navigation";

import {
  trackWebEvent,
} from "../lib/webAnalytics";

let lastTrackedLocation:
  | string
  | null = null;

export default function WebAnalyticsTracker() {
  const pathname =
    usePathname();

  const searchParams =
    useSearchParams();

  const search =
    searchParams.toString();

  useEffect(() => {
    const locationKey =
      search
        ? `${pathname}?${search}`
        : pathname;

    if (
      lastTrackedLocation ===
      locationKey
    ) {
      return;
    }

    lastTrackedLocation =
      locationKey;

    void trackWebEvent(
      "website_visited"
    );

   const referralCode =
  searchParams.get("ref");

const normalizedPathname =
  pathname === "/"
    ? "/"
    : pathname.replace(
        /\/+$/,
        ""
      );

if (
  normalizedPathname ===
    "/share/you" &&
  referralCode
) {
  void trackWebEvent(
    "referral_opened"
  );
}
  }, [
    pathname,
    search,
    searchParams,
  ]);

  return null;
}