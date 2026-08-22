// src/layout/Footer/FooterBottom.tsx
import type React from "react";
import { Link } from "react-router-dom";
import { colors } from "@/design/colors";
import { spacing } from "@/design/spacing";
import { typography } from "@/design/typography";

/**
 * Bottom part of the footer containing social icons and legal links.
 */
export const FooterBottom: React.FC<{
  social: { label: string; href: string; icon: string }[];
  legal: { label: string; path: string }[];
  copyright: string;
}> = ({ social, legal, copyright }) => {
  return (
    <div
      style={{
        borderTop: `1px solid ${colors.borderSubtle}`,
        marginTop: spacing.xl,
        paddingTop: spacing.md,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        fontSize: typography.size.caption,
        color: colors.textMuted,
      }}
    >
      <div style={{ display: "flex", gap: spacing.md, marginBottom: spacing.sm }}>
        {social.map((s) => (
          <a
            key={s.label}
            href={s.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={s.label}
            style={{ color: colors.textInverse, textDecoration: "none" }}
          >
            {/* Placeholder for icon – in a real project you would import the SVG */}
            {s.label}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: spacing.md, marginBottom: spacing.sm }}>
        {legal.map((l) => (
          <Link key={l.label} to={l.path} style={{ color: colors.textInverse, textDecoration: "none" }}>
            {l.label}
          </Link>
        ))}
      </div>
      <div>{copyright}</div>
    </div>
  );
};
