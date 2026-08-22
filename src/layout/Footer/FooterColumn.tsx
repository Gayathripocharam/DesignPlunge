// src/layout/Footer/FooterColumn.tsx
import type React from "react";
import type { FooterColumnData } from "@/content/footer";
import { Link } from "react-router-dom";
import { spacing } from "@/design/spacing";
import { typography } from "@/design/typography";

/**
 * Renders a single footer column (title + list of links).
 */
export const FooterColumn: React.FC<{ column: FooterColumnData }> = ({ column }) => {
  return (
    <div className="footer-column">
      <h4 
        className="footer-title" 
        style={{ 
          marginBottom: spacing.sm,
          fontFamily: typography.heading,
          fontWeight: typography.weight.heading,
        }}
      >
        {column.title}
      </h4>
      <ul className="footer-links" style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {column.links.map((link) => (
          <li key={link.label} style={{ marginBottom: spacing.xs }}>
            {link.external ? (
              <a href={link.path} target="_blank" rel="noopener noreferrer" className="footer-link">
                {link.label}
              </a>
            ) : (
              <Link to={link.path} className="footer-link">
                {link.label}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};
