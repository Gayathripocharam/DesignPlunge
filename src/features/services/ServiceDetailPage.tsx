import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/content/services';
import { NotFoundPage } from '@/features/NotFoundPage';
import { ServiceDetail } from '@/components/business/ServiceDetail/ServiceDetail';
import { AiServiceDetail } from '@/components/business/AiServiceDetail/AiServiceDetail';
import { ContextualNav } from '@/components/business/ContextualNav/ContextualNav';
import { Section } from '@/components/ui/Section';
import { SEO } from '@/components/seo/SEO';
import { organizationLD, serviceLD, serviceBreadcrumbs } from '@/seo/structuredData';
import { track } from '@/analytics';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getServiceBySlug(slug) : undefined;

  useEffect(() => {
    if (data) {
      track('service_view', { serviceSlug: data.slug, serviceTitle: data.title });
    }
  }, [data]);

  if (!data) {
    return <NotFoundPage />;
  }

  return (
    <>
      <SEO 
        title={`${data.title} — Design Plunge`}
        description={data.detail.subtitle}
        canonical={`/services/${data.slug}`}
        structuredData={[
          organizationLD(),
          serviceLD(data),
          serviceBreadcrumbs(data.slug, data.title),
        ]}
      />
      <Section background="var(--bg)" spacingTop="large" spacingBottom="large">
        {data.slug === 'ai-systems' ? (
          <AiServiceDetail data={data.detail} />
        ) : (
          <ServiceDetail data={data.detail} />
        )}
      </Section>
      <ContextualNav
        title="Have a product problem to solve?"
        subtitle="Tell us what you're trying to build or improve. We'll review the context and come back with clear next steps."
        buttonText={data.ctaLabel}
        to="/contact"
        spacingTop="none"
        spacingBottom="large"
      />
    </>
  );
};
