/**
 * Analytics abstraction layer.
 * Currently logs to console, but structured for easy Plausible drop-in.
 */

// Define explicit event types to avoid stringly-typed events
export type AnalyticsEvent = 
  | 'page_view'
  | 'hero_cta_click'
  | 'service_view'
  | 'case_study_view'
  | 'contact_start'
  | 'contact_step_1'
  | 'contact_step_2'
  | 'contact_step_3'
  | 'contact_step_4'
  | 'contact_step_5'
  | 'contact_submit'
  | 'booking_click';

interface EventProperties {
  [key: string]: string | number | boolean;
}

const IS_PROD = import.meta.env.PROD;

export const trackPageView = (url?: string) => {
  const pageUrl = url || window.location.pathname;
  
  if (!IS_PROD) {
    console.log(`[Analytics] Page View: ${pageUrl}`);
    return;
  }

  // TODO: Insert Plausible pageview implementation here
  // e.g. window.plausible('pageview', { u: pageUrl });
};

export const trackEvent = (eventName: AnalyticsEvent, props?: EventProperties) => {
  if (!IS_PROD) {
    console.log(`[Analytics] Event: ${eventName}`, props || '');
    return;
  }

  // TODO: Insert Plausible custom event implementation here
  // e.g. window.plausible(eventName, { props });
};
