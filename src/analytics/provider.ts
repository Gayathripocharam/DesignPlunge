import type { AnalyticsEventName, AnalyticsEventPayload } from "./events";

export function trackProviderEvent<E extends AnalyticsEventName>(
  eventName: E,
  payload: AnalyticsEventPayload<E>
) {
  // In development, we log to the console.
  // In production, this will eventually forward to Plausible, GA4, PostHog, etc.
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, payload);
  }
}
