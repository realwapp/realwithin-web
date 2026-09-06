type WebAnalyticsProperties = Record<
  string,
  string | number | boolean | null
>;

type WebEventName =
  | "website_visited"
  | "referral_opened"
  | "preview_started"
  | "preview_feeling_selected"
  | "preview_checkin_completed"
  | "preview_reflection_viewed"
  | "preview_try_another"
  | "preview_cta_clicked"
  | "store_clicked";

type Attribution = {
  source: string;
  medium: string;
  campaign: string | null;
  contentId: string | null;
  referralCode: string | null;
};

type AnalyticsState = {
  anonymousId: string;
  sessionId: string;
  firstTouch: Attribution;
};

declare global {
  interface Window {
    __realWithinAnalytics?: AnalyticsState;
  }
}

const ANALYTICS_URL =
  "https://owniuibzuflhyxvxxppr.supabase.co/functions/v1/track-web-analytics";

const UUID_PATTERN =
  /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

function cleanParam(
  value: string | null
) {
  const cleaned =
    value?.trim() || null;

  return cleaned;
}

function getFirstTouch(): Attribution {
  const params =
    new URLSearchParams(
      window.location.search
    );

  const referralCode =
    cleanParam(
      params.get("ref")
    );

  if (
    referralCode &&
    UUID_PATTERN.test(
      referralCode
    )
  ) {
    return {
      source: "you_referral",
      medium: "referral",
      campaign: null,
      contentId: null,
      referralCode,
    };
  }

  const explicitSource =
    cleanParam(
      params.get("utm_source")
    ) ||
    cleanParam(
      params.get("source")
    );

  const explicitMedium =
    cleanParam(
      params.get("utm_medium")
    ) ||
    cleanParam(
      params.get("medium")
    );

  const campaign =
    cleanParam(
      params.get("utm_campaign")
    ) ||
    cleanParam(
      params.get("campaign")
    );

  const contentId =
    cleanParam(
      params.get("utm_content")
    ) ||
    cleanParam(
      params.get("content")
    );

  if (explicitSource) {
    return {
      source:
        explicitSource.toLowerCase(),
      medium:
        explicitMedium ||
        "organic",
      campaign,
      contentId,
      referralCode: null,
    };
  }

  const referrer =
    document.referrer;

  if (referrer) {
    try {
      const host =
        new URL(referrer)
          .hostname
          .toLowerCase();

      if (
        host.includes("google.") ||
        host.includes("bing.") ||
        host.includes(
          "duckduckgo."
        ) ||
        host.includes("yahoo.")
      ) {
        return {
          source: "seo",
          medium:
            "organic_search",
          campaign: null,
          contentId: null,
          referralCode: null,
        };
      }

      if (
        host.includes("tiktok")
      ) {
        return {
          source: "tiktok",
          medium:
            "organic_social",
          campaign: null,
          contentId: null,
          referralCode: null,
        };
      }

      if (
        host.includes(
          "instagram"
        )
      ) {
        return {
          source: "instagram",
          medium:
            "organic_social",
          campaign: null,
          contentId: null,
          referralCode: null,
        };
      }

      if (
        host.includes("youtube")
      ) {
        return {
          source: "youtube",
          medium:
            "organic_social",
          campaign: null,
          contentId: null,
          referralCode: null,
        };
      }

      if (
        host.includes("reddit")
      ) {
        return {
          source: "reddit",
          medium: "community",
          campaign: null,
          contentId: null,
          referralCode: null,
        };
      }
    } catch {
      // Ignore invalid referrer.
    }
  }

  return {
    source: "direct",
    medium: "direct",
    campaign: null,
    contentId: null,
    referralCode: null,
  };
}

function getAnalyticsState() {
  if (
    window.__realWithinAnalytics
  ) {
    return window
      .__realWithinAnalytics;
  }

  const state: AnalyticsState = {
    anonymousId:
      crypto.randomUUID(),

    sessionId:
      crypto.randomUUID(),

    firstTouch:
      getFirstTouch(),
  };

  window.__realWithinAnalytics =
    state;

  return state;
}

export function getWebAnonymousId() {
  if (
    typeof window ===
    "undefined"
  ) {
    return null;
  }

  return getAnalyticsState()
    .anonymousId;
}

export function getGooglePlayDownloadUrl() {
  const baseUrl =
    "https://play.google.com/store/apps/details";

  if (
    typeof window ===
    "undefined"
  ) {
    return (
      `${baseUrl}?id=app.realwithin`
    );
  }

  const anonymousId =
    getAnalyticsState()
      .anonymousId;

  const installReferrer =
    new URLSearchParams({
      rw_aid:
        anonymousId,
    }).toString();

  const url =
    new URL(baseUrl);

  url.searchParams.set(
    "id",
    "app.realwithin"
  );

  url.searchParams.set(
    "referrer",
    installReferrer
  );

  return url.toString();
}

export async function trackWebEvent(
  eventName: WebEventName,
  properties: WebAnalyticsProperties = {}
) {
  if (
    typeof window ===
    "undefined"
  ) {
    return;
  }

  try {
    const state =
      getAnalyticsState();

    const response =
      await fetch(
        ANALYTICS_URL,
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },

          keepalive: true,

          body: JSON.stringify({
            event_name:
              eventName,

            anonymous_id:
              state.anonymousId,

            session_id:
              state.sessionId,

            source:
              state.firstTouch
                .source,

            medium:
              state.firstTouch
                .medium,

            campaign:
              state.firstTouch
                .campaign,

            content_id:
              state.firstTouch
                .contentId,

            referral_code:
              state.firstTouch
                .referralCode,

            landing_path:
              window.location
                .pathname,

            properties,
          }),
        }
      );

    if (!response.ok) {
      console.error(
        "Web analytics failed:",
        eventName,
        response.status
      );
    }
  } catch (error) {
    console.error(
      "Web analytics failed:",
      eventName,
      error
    );
  }
}