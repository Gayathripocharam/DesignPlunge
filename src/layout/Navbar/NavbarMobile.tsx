// src/layout/Navbar/NavbarMobile.tsx
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation } from "@/config/navigation";
import { NavigationItem } from "@/components/navigation/NavigationItem";
import { useTheme } from "@/hooks/useTheme";
import { colors } from "@/design/colors";
import { spacing } from "@/design/spacing";
import { Menu, X } from "lucide-react";
import { Link } from "react-router-dom";

// Minimal inline media query handling for mobile nav visibility
function useIsMobile() {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 767px)");
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    setIsMobile(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  
  return isMobile;
}

const NavbarMobile: React.FC = () => {
  useTheme();
  const isMobile = useIsMobile();
  const [isOpen, setIsOpen] = useState(false);
  
  const menuRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  const closeMenu = useCallback(() => {
    setIsOpen(false);
    triggerRef.current?.focus();
  }, []);

  const toggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Body scroll lock
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Desktop resize check to close menu
  useEffect(() => {
    if (!isMobile && isOpen) {
      setIsOpen(false);
    }
  }, [isMobile, isOpen]);

  // Escape key handler
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeMenu();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, closeMenu]);

  // Focus trap
  useEffect(() => {
    if (!isOpen || !menuRef.current) return;
    
    const focusableElements = menuRef.current.querySelectorAll(
      'a[href], button:not([disabled]), textarea, input, select'
    );
    const firstElement = focusableElements[0] as HTMLElement;
    const lastElement = focusableElements[focusableElements.length - 1] as HTMLElement;

    const handleTab = (e: KeyboardEvent) => {
      if (e.key !== 'Tab') return;
      
      if (e.shiftKey) {
        if (document.activeElement === firstElement) {
          lastElement.focus();
          e.preventDefault();
        }
      } else {
        if (document.activeElement === lastElement) {
          firstElement.focus();
          e.preventDefault();
        }
      }
    };

    document.addEventListener('keydown', handleTab);
    firstElement?.focus();

    return () => document.removeEventListener('keydown', handleTab);
  }, [isOpen]);

  if (!isMobile) return null;

  return (
    <>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", width: "100%" }}>
        <Link to="/" style={{ fontWeight: 700, fontSize: "1.25rem", textDecoration: "none", color: "var(--text-h)", letterSpacing: "-0.5px" }}>Design<span style={{ color: "var(--accent)" }}>Plunge</span></Link>
        <button
          ref={triggerRef}
          onClick={toggleMenu}
          aria-label={isOpen ? "Close Menu" : "Open Menu"}
          aria-expanded={isOpen}
          style={{
            background: "transparent",
            border: "none",
            cursor: "pointer",
            color: colors.textPrimary,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: spacing.sm,
            zIndex: 1001,
          }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.26 }} // 260ms
            style={{
              position: "fixed",
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              backgroundColor: colors.surface,
              zIndex: 1000,
              display: "flex",
              flexDirection: "column",
              padding: `${spacing.xxxl} ${spacing.lg} ${spacing.lg}`,
              overflowY: "auto",
            }}
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: spacing.xl }}>
              {navigation.map((item) => (
                <li key={item.id} onClick={closeMenu}>
                  <NavigationItem item={item} />
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavbarMobile;
