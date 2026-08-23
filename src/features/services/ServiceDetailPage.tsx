import { useParams } from 'react-router-dom';
import { getServiceBySlug } from '@/content/services';
import { NotFoundPage } from '@/features/NotFoundPage';
import { ServiceDetail } from '@/components/business/ServiceDetail/ServiceDetail';
import { Section } from '@/components/ui/Section';
import { SEO } from '@/components/seo/SEO';
import { organizationLD, serviceLD, serviceBreadcrumbs } from '@/seo/structuredData';

export const ServiceDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const data = slug ? getServiceBySlug(slug) : undefined;

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
        <ServiceDetail data={data.detail} />
      </Section>
    </>
  );
};
