// src/layout/Shell/index.tsx
import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "@/layout/Navbar/Navbar";
import { Footer } from "@/layout/Footer";
import { PageWrapper } from "../PageWrapper";
import { ScrollProgress } from "../ScrollProgress";
import { PageTransition } from "../PageTransition";
import { trackPageView } from "@/lib/analytics";

/**
 * Root layout component that provides global UI such as navigation, footer,
 * scroll progress indicator, and page transition handling.
 * Uses React Router's Outlet to render matched child routes.
 */
export const Shell: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    trackPageView(location.pathname);
  }, [location.pathname]);

  return (
    <>
      <Navbar />
      <ScrollProgress />
      <PageWrapper>
        <PageTransition>
          <Outlet />
        </PageTransition>
      </PageWrapper>
      <Footer />
    </>
  );
};

