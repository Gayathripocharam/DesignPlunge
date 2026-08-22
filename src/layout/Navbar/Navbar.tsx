// src/layout/Navbar/Navbar.tsx
import type React from "react";
import { useEffect, useState } from "react";
import NavbarDesktop from "./NavbarDesktop";
import NavbarMobile from "./NavbarMobile";

/**
 * Navbar – transparent when at top, glass (frosted) on scroll.
 * Height stays constant so layout does not shift.
 */
const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 32);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const style: React.CSSProperties = {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    padding: "0 clamp(24px, 5vw, 72px)",
    height: "72px",
    backgroundColor: scrolled ? "rgba(248, 247, 243, 0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px) saturate(180%)" : "none",
    borderBottom: scrolled
      ? "1px solid rgba(229,228,231,0.8)"
      : "1px solid transparent",
    boxShadow: scrolled
      ? "0 1px 0 rgba(0,0,0,0.04), 0 4px 24px rgba(0,0,0,0.06)"
      : "none",
    transition:
      "background-color 250ms cubic-bezier(0.16,1,0.3,1), backdrop-filter 250ms cubic-bezier(0.16,1,0.3,1), border-bottom 250ms cubic-bezier(0.16,1,0.3,1), box-shadow 250ms cubic-bezier(0.16,1,0.3,1)",
  };

  return (
    <header style={style} role="banner">
      <NavbarDesktop />
      <NavbarMobile />
    </header>
  );
};

export default Navbar;
