import type { AnalyticsEventName, AnalyticsEventPayload } from "./events";
import { trackProviderEvent } from "./provider";
import { guardDuplicateEvent } from "./dupGuard";

export function track<E extends AnalyticsEventName>(
  eventName: E,
  payload: AnalyticsEventPayload<E>
) {
  // Deduplicate specific events that are prone to React re-render duplication
  if (eventName === "page_view" || eventName === "contact_page_view") {
    const p = payload as AnalyticsEventPayload<"page_view">;
    if (!guardDuplicateEvent(eventName, p.page)) {
      return;
    }
  } else if (eventName === "service_view") {
    const p = payload as AnalyticsEventPayload<"service_view">;
    if (!guardDuplicateEvent(eventName, window.location.pathname, p.serviceSlug)) {
      return;
    }
  } else if (eventName === "case_study_view") {
    const p = payload as AnalyticsEventPayload<"case_study_view">;
    if (!guardDuplicateEvent(eventName, window.location.pathname, p.caseStudySlug)) {
      return;
    }
  }
  
  // cta_click, contact_form_start, contact_form_submit, contact_form_error
  // are intentional interactions and should not be globally deduplicated by route.

  trackProviderEvent(eventName, payload);
}
