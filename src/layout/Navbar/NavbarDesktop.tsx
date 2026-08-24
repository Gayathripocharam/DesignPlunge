// src/layout/Navbar/NavbarDesktop.tsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { useLocation, Link } from "react-router-dom";
import { track } from "@/analytics";
import { navigation } from "@/config/navigation";
import { useTheme } from "@/hooks/useTheme";

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(true);
  useEffect(() => {
    const mq = window.matchMedia("(min-width: 768px)");
    const handler = (e: MediaQueryListEvent) => setIsDesktop(e.matches);
    setIsDesktop(mq.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);
  return isDesktop;
}

const desktopVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.04, ease: "easeOut" } },
};
const itemVariants: Variants = {
  hidden: { opacity: 0, y: -6 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const NavbarDesktop: React.FC = () => {
  useTheme();
  const isDesktop = useIsDesktop();
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState<string | null>(null);

  if (!isDesktop) return null;

  return (
    <motion.nav
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        width: "100%",
        maxWidth: "var(--max-width)",
        margin: "0 auto",
      }}
      variants={desktopVariants}
      initial="hidden"
      animate="visible"
      onMouseLeave={() => setHoveredPath(null)}
    >
      {/* Logo */}
      <motion.div variants={itemVariants}>
        <Link
          to="/"
          className="logo"
          style={{
            fontWeight: 800,
            fontSize: "1.2rem",
            textDecoration: "none",
            color: "var(--text-h)",
            letterSpacing: "-0.5px",
            outline: "none",
            fontFamily: "var(--heading)",
          }}
        >
          Design<span style={{ color: "var(--accent)" }}>Plunge</span>
        </Link>
      </motion.div>

      {/* Nav links + CTA */}
      <div style={{ display: "flex", alignItems: "center", gap: "2.5rem" }}>
        <motion.ul
          style={{
            display: "flex",
            gap: "0.25rem",
            listStyle: "none",
            margin: 0,
            padding: 0,
            position: "relative",
          }}
          variants={desktopVariants}
        >
          {navigation.map((item) => {
            const isActive =
              location.pathname === item.path ||
              (item.path !== "/" && location.pathname.startsWith(item.path));
            const isHovered = hoveredPath === item.path;
            const showUnderline = hoveredPath ? isHovered : isActive;

            const linkStyle: React.CSSProperties = {
              padding: "6px 12px",
              fontSize: "13px",
              fontFamily: "var(--mono)",
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              textDecoration: "none",
              color: isActive || isHovered ? "var(--text-h)" : "var(--text)",
              transition: "color 150ms ease",
              display: "block",
              borderRadius: "6px",
            };

            return (
              <motion.li
                key={item.id}
                variants={itemVariants}
                onMouseEnter={() => setHoveredPath(item.path)}
                style={{ position: "relative", display: "flex", alignItems: "center" }}
              >
                {item.external ? (
                  <a href={item.path} target="_blank" rel="noopener noreferrer" style={linkStyle}>
                    {item.label}
                  </a>
                ) : (
                  <Link to={item.path} style={linkStyle}>
                    {item.label}
                  </Link>
                )}
                {showUnderline && (
                  <motion.div
                    layoutId="navbar-underline"
                    transition={{ type: "spring", bounce: 0.15, duration: 0.35 }}
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 12,
                      right: 12,
                      height: 2,
                      backgroundColor: "var(--accent)",
                      borderRadius: 2,
                    }}
                  />
                )}
              </motion.li>
            );
          })}
        </motion.ul>

        {/* CTA Button */}
        <motion.div variants={itemVariants}>
          <Link
            to="/contact"
            style={{
              padding: "10px 20px",
              background: "var(--accent)",
              color: "var(--text-h)",
              borderRadius: "var(--radii-md)",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "12px",
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              fontFamily: "var(--mono)",
              transition: "background 0.2s, transform 0.15s",
              display: "inline-block",
              whiteSpace: "nowrap",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "var(--accent-dark)";
              e.currentTarget.style.transform = "translateY(-1px)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "var(--accent)";
              e.currentTarget.style.transform = "translateY(0)";
            }}
            onClick={() => track('cta_click', { ctaId: 'navbar-primary', ctaLabel: 'Talk through the problem', page: location.pathname })}
          >
            Talk through the problem →
          </Link>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default NavbarDesktop;
