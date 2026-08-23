import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import { Shell } from "@/layout/Shell";
import { NotFoundPage } from "@/features/NotFoundPage";

// Lazy-loaded routes
const Home = React.lazy(() => import("@/features/home/Home").then(m => ({ default: m.Home })));
const ServicesPage = React.lazy(() => import("@/features/services/ServicesPage").then(m => ({ default: m.ServicesPage })));
const ServiceDetailPage = React.lazy(() => import("@/features/services/ServiceDetailPage").then(m => ({ default: m.ServiceDetailPage })));
const WorkPage = React.lazy(() => import("@/features/work/WorkPage").then(m => ({ default: m.WorkPage })));
const CaseStudyDetail = React.lazy(() => import("@/components/business/CaseStudyDetail/CaseStudyDetail").then(m => ({ default: m.CaseStudyDetail })));
const StudioPage = React.lazy(() => import("@/features/studio/StudioPage").then(m => ({ default: m.StudioPage })));
const ContactPage = React.lazy(() => import("@/features/contact/ContactPage").then(m => ({ default: m.ContactPage })));


const router = createBrowserRouter([
  {
    element: <Shell />, // Shell provides Navbar, Footer, etc.
    children: [
      { path: "/", element: <Suspense fallback={null}><Home /></Suspense> },
      { path: "/services", element: <Suspense fallback={null}><ServicesPage /></Suspense> },
      { path: "/services/:slug", element: <Suspense fallback={null}><ServiceDetailPage /></Suspense> },
      { path: "/work", element: <Suspense fallback={null}><WorkPage /></Suspense> },
      { path: "/work/:slug", element: <Suspense fallback={null}><CaseStudyDetail /></Suspense> },
      { path: "/studio", element: <Suspense fallback={null}><StudioPage /></Suspense> },
      { path: "/contact", element: <Suspense fallback={null}><ContactPage /></Suspense> },
      { path: "*", element: <NotFoundPage /> },
    ],
  },
]);

export default router;

