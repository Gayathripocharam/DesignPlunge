import { describe, it, expect, vi, beforeEach } from "vitest";
import { track } from "./index";
import * as provider from "./provider";
import { clearDuplicateGuard } from "./dupGuard";

// Mock the window object for location
const originalLocation = window.location;
beforeEach(() => {
  clearDuplicateGuard();
  vi.clearAllMocks();
  delete (window as any).location;
  (window as any).location = { ...originalLocation, pathname: "/test-path" };
});

describe("analytics", () => {
  it("tracks page_view and deduplicates based on route", () => {
    const trackSpy = vi.spyOn(provider, "trackProviderEvent");

    // First call should succeed
    track("page_view", { page: "/test-path" });
    expect(trackSpy).toHaveBeenCalledTimes(1);
    expect(trackSpy).toHaveBeenCalledWith("page_view", { page: "/test-path" });

    // Second call on same page should be ignored
    track("page_view", { page: "/test-path" });
    expect(trackSpy).toHaveBeenCalledTimes(1);

    // Call on different page should succeed
    track("page_view", { page: "/another-path" });
    expect(trackSpy).toHaveBeenCalledTimes(2);
    expect(trackSpy).toHaveBeenCalledWith("page_view", { page: "/another-path" });
  });

  it("tracks service_view and deduplicates", () => {
    const trackSpy = vi.spyOn(provider, "trackProviderEvent");
    
    (window as any).location.pathname = "/services/ai-systems";

    track("service_view", { serviceSlug: "ai-systems", serviceTitle: "AI Systems" });
    expect(trackSpy).toHaveBeenCalledTimes(1);
    expect(trackSpy).toHaveBeenCalledWith("service_view", { serviceSlug: "ai-systems", serviceTitle: "AI Systems" });

    // Duplicate call on same page is ignored
    track("service_view", { serviceSlug: "ai-systems", serviceTitle: "AI Systems" });
    expect(trackSpy).toHaveBeenCalledTimes(1);

    // Call on different route but same slug shouldn't theoretically happen, but tests the key
    (window as any).location.pathname = "/services/other-path";
    track("service_view", { serviceSlug: "ai-systems", serviceTitle: "AI Systems" });
    expect(trackSpy).toHaveBeenCalledTimes(2);
  });

  it("allows multiple cta_clicks (no deduplication)", () => {
    const trackSpy = vi.spyOn(provider, "trackProviderEvent");

    track("cta_click", { ctaId: "services-contact", ctaLabel: "Start", page: "/test" });
    track("cta_click", { ctaId: "services-contact", ctaLabel: "Start", page: "/test" });

    expect(trackSpy).toHaveBeenCalledTimes(2);
  });

  it("does not transmit PII on contact_form_submit", () => {
    const trackSpy = vi.spyOn(provider, "trackProviderEvent");

    track("contact_form_submit", { page: "/contact", formId: "contact" });

    // We rely on TypeScript for this mostly, but assert runtime shape
    expect(trackSpy).toHaveBeenCalledWith("contact_form_submit", {
      page: "/contact",
      formId: "contact"
    });
    
    // Ensure no additional fields exist
    const payload = trackSpy.mock.calls[0][1] as any;
    expect(payload.name).toBeUndefined();
    expect(payload.email).toBeUndefined();
    expect(payload.message).toBeUndefined();
  });
});
