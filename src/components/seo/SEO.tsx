import React from "react";
import { Helmet } from "react-helmet-async";
import type { JsonLd } from '@/types/structuredData';
interface SEOProps {
  title: string;
  description: string;
  canonical?: string;
  image?: string;
  type?: "website" | "article";
  structuredData?: JsonLd | JsonLd[];
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  canonical,
  image = "https://designplunge.com/og-image.jpg",
  type = "website",
  structuredData,
}) => {
  const siteUrl = "https://designplunge.com";
  const currentUrl = canonical ? `${siteUrl}${canonical}` : siteUrl;

  return (
    <>
      <Helmet>
        {/* Standard Meta Tags */}
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="canonical" href={currentUrl} />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content={type} />
        <meta property="og:url" content={currentUrl} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:url" content={currentUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} />
      </Helmet>
      {structuredData && (
        Array.isArray(structuredData) ?
          structuredData.map((data, i) => (
            <script key={i} type="application/ld+json">
              {JSON.stringify(data)}
            </script>
          )) :
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
      )}
    </>
  );
};
