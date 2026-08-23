// src/seo/structuredData.ts

import { SITE_URL, LOGO_URL } from '@/config/siteConfig';
import type { OrganizationLD, WebSiteLD, ServiceLD, BreadcrumbListLD, CreativeWorkLD } from '@/types/structuredData';
import type { Service } from '@/content/services';
import type { CaseStudy } from '@/types/casestudy';

/** Organization JSON‑LD */
export const organizationLD = (): OrganizationLD => ({
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': `${SITE_URL}#organization`,
  name: 'Design Plunge',
  url: SITE_URL,
  logo: LOGO_URL,
});

/** WebSite JSON‑LD (home page) */
export const websiteLD = (): WebSiteLD => ({
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': `${SITE_URL}#website`,
  url: SITE_URL,
  name: 'Design Plunge',
  description: 'Design & development studio',
  publisher: { '@id': `${SITE_URL}#organization` },
});

/** Service JSON‑LD for a service detail page */
export const serviceLD = (service: Service): ServiceLD => {
  const slug = (service as any).slug ?? '';
  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${SITE_URL}/services/${slug}#service`,
    name: (service as any).title,
    description: (service as any).description,
    provider: { '@id': `${SITE_URL}#organization` },
    url: `${SITE_URL}/services/${slug}`,
  };
};

/** Generic BreadcrumbList builder */
export const breadcrumbLD = (items: Array<{ name: string; url: string }>): BreadcrumbListLD => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((it, idx) => ({
    '@type': 'ListItem',
    position: idx + 1,
    name: it.name,
    item: it.url,
  })),
});

/** Service page breadcrumbs */
export const serviceBreadcrumbs = (slug: string, title: string): BreadcrumbListLD =>
  breadcrumbLD([
    { name: 'Home', url: SITE_URL },
    { name: 'Services', url: `${SITE_URL}/services` },
    { name: title, url: `${SITE_URL}/services/${slug}` },
  ]);

/** CreativeWork (CaseStudy) JSON‑LD – only using fields that exist */
export const creativeWorkLD = (caseStudy: CaseStudy): CreativeWorkLD => {
  const baseUrl = `${SITE_URL}/work/${caseStudy.slug}`;
  return {
    '@context': 'https://schema.org',
    '@type': 'CreativeWork',
    '@id': `${baseUrl}#creativework`,
    name: caseStudy.title,
    description: caseStudy.description,
    url: baseUrl,
    image: caseStudy.coverImage,
  };
};

/** Case‑study page breadcrumbs */
export const caseStudyBreadcrumbs = (slug: string, title: string): BreadcrumbListLD =>
  breadcrumbLD([
    { name: 'Home', url: SITE_URL },
    { name: 'Work', url: `${SITE_URL}/work` },
    { name: title, url: `${SITE_URL}/work/${slug}` },
  ]);
