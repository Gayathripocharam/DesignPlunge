// src/types/structuredData.ts

export type JsonLd =
  | OrganizationLD
  | WebSiteLD
  | ServiceLD
  | BreadcrumbListLD
  | CreativeWorkLD;

export interface OrganizationLD {
  "@context": "https://schema.org";
  "@type": "Organization";
  "@id": string; // e.g. `${SITE_URL}#organization`
  name: string;
  url: string;
  logo: string;
  sameAs?: string[];
}

export interface WebSiteLD {
  "@context": "https://schema.org";
  "@type": "WebSite";
  "@id": string; // e.g. `${SITE_URL}#website`
  url: string;
  name: string;
  description?: string;
  publisher: { "@id": string };
}

export interface ServiceLD {
  "@context": "https://schema.org";
  "@type": "Service";
  "@id": string;
  name: string;
  description: string;
  provider: { "@id": string };
  url: string;
}

export interface BreadcrumbListLD {
  "@context": "https://schema.org";
  "@type": "BreadcrumbList";
  itemListElement: Array<{
    "@type": "ListItem";
    position: number;
    name: string;
    item: string;
  }>;
}

export interface CreativeWorkLD {
  "@context": "https://schema.org";
  "@type": "CreativeWork";
  "@id": string;
  name: string;
  description: string;
  url: string;
  image?: string;
}
