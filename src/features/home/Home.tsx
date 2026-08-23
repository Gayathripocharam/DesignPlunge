import React from "react";
import { SEO } from "@/components/seo/SEO";
import { Hero } from "@/features/home/components/Hero";
import { organizationLD, websiteLD } from '@/seo/structuredData';

import { ServiceOverview as WhatWeBuild } from "@/components/business/ServiceOverview";
import { SelectedWork } from "@/components/business/SelectedWork/SelectedWork";
import { Outcomes } from "@/components/business/Outcomes/Outcomes";
import { HowWeWork } from "@/components/business/HowWeWork/HowWeWork";
import { WhyDesignPlunge } from "@/components/business/WhyDesignPlunge/WhyDesignPlunge";
import { WorkingTogether } from "@/components/business/WorkingTogether/WorkingTogether";
import { FAQPreview } from "@/components/business/FAQPreview/FAQPreview";
import { ContextualNav } from "@/components/business/ContextualNav/ContextualNav";
import styles from "./Home.module.css";

export const Home: React.FC = () => {
  const structuredData = [organizationLD(), websiteLD()];
  return (
    <>
      <SEO 
        title="Design Plunge — Product Strategy & Design Studio" 
        description="Design Plunge helps B2B SaaS teams, AI product teams, enterprise platforms, and growing startups turn complex product problems into clear, scalable digital experiences." 
        canonical="/" 
        structuredData={structuredData}
      />
      
      <main className={styles.homeContainer}>
        <Hero />

        <WhatWeBuild spacingTop="large" spacingBottom="none" />
        <SelectedWork spacingTop="medium" spacingBottom="none" />
        <Outcomes spacingTop="medium" spacingBottom="none" />
        <HowWeWork spacingTop="medium" spacingBottom="none" />
        <WorkingTogether />
        <WhyDesignPlunge />
        <FAQPreview />
        <ContextualNav 
          spacingTop="large"
          spacingBottom="large"
          title="Have a complex product problem?" 
          subtitle="Tell us what you're trying to solve. We'll help you understand the right approach, what it will take to build, and where to start." 
          buttonText="Talk through the problem →" 
          to="/contact" 
        />
      </main>
    </>
  );
};
