import React, { useEffect } from "react";
import { useLocation, useNavigationType } from "react-router-dom";

/**
 * Wraps page content to ensure scroll position resets on navigation or handles hash scrolling.
 */
export const PageWrapper: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const location = useLocation();
  const navigationType = useNavigationType();

  useEffect(() => {
    // If it's a browser back/forward action, let the browser handle scroll position
    if (navigationType === "POP") {
      return;
    }

    if (location.hash) {
      const targetId = location.hash.replace("#", "");
      // Small timeout to ensure the DOM has painted the new route before scrolling
      const timer = setTimeout(() => {
        const el = document.getElementById(targetId);
        if (el) {
          // Calculate offset accounting for sticky navbar (approx 80px)
          const y = el.getBoundingClientRect().top + window.scrollY - 80;
          window.scrollTo({ top: y, behavior: "smooth" });
        }
      }, 100);

      return () => clearTimeout(timer);
    } else {
      // Standard new route push
      window.scrollTo({ top: 0, behavior: "auto" });
    }
  }, [location.pathname, location.hash, navigationType]);

  return <>{children}</>;
};

