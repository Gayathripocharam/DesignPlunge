import type { AnalyticsEventName, AnalyticsEventPayload } from "./events";
import Plausible from "plausible-tracker";

// Initialize Plausible tracker with domain from env variables.
// VITE_ prefix is required for Vite to expose env vars to client code.
const { trackEvent } = Plausible({
  domain: import.meta.env.VITE_PLAUSIBLE_DOMAIN,
  // Load the Plausible script lazily; it will be injected on first use.
  // This avoids adding a <script> tag manually.
});

export function trackProviderEvent<E extends AnalyticsEventName>(
  eventName: E,
  payload: AnalyticsEventPayload<E>
) {
  if (import.meta.env.DEV) {
    console.log(`[Analytics] ${eventName}`, payload);
  } else {
    // Forward the event to Plausible as a custom event.
    // Plausible expects a string name and an optional { props } object.
    // Our typed payloads contain only approved non-PII string fields.
    trackEvent(eventName, {
      props: payload as Record<string, string | number | boolean>,
    });
  }
}

