export type AnalyticsEventName =
  | "page_view"
  | "service_view"
  | "case_study_view"
  | "cta_click"
  | "contact_page_view"
  | "contact_form_start"
  | "contact_form_submit"
  | "contact_form_error";

export interface AnalyticsEventPayloads {
  page_view: {
    page: string;
    referrer?: string;
  };
  service_view: {
    serviceSlug: string;
    serviceTitle: string;
  };
  case_study_view: {
    caseStudySlug: string;
    caseStudyTitle: string;
  };
  cta_click: {
    ctaId: string;
    ctaLabel: string;
    page: string;
  };
  contact_page_view: {
    page: string;
  };
  contact_form_start: {
    page: string;
    formId: string;
  };
  contact_form_submit: {
    page: string;
    formId: string;
  };
  contact_form_error: {
    page: string;
    formId: string;
    errorCode: "validation" | "network" | "provider" | "unknown";
  };
}

export type AnalyticsEventPayload<E extends AnalyticsEventName> = AnalyticsEventPayloads[E];
