// src/layout/SectionHeader.tsx
import type React from "react";
import { Heading } from "@/components/ui/Heading";
import { typography } from "@/design/typography";
import { spacing } from "@/design/spacing";
import { colors } from "@/design/colors";

export interface SectionHeaderProps {
  /** Main title text */
  title: string;
  /** Optional subtitle or supporting copy */
  subtitle?: string;
  /** Heading level for the title – defaults to h2 */
  level?: "h1" | "h2" | "h3" | "h4";
  /** Additional className for outer wrapper */
  className?: string;
}

/**
 * Consistent section header component that uses design‑token typography and spacing.
 */
export const SectionHeader: React.FC<SectionHeaderProps> = ({
  title,
  subtitle,
  level = "h2",
  className = "",
}) => {
  return (
    <header className={className} style={{ marginBottom: spacing.lg }}>
      <Heading level={level}>
        {title}
      </Heading>
      {subtitle && (
        <p style={{ marginTop: spacing.sm, fontSize: typography.size.body, color: colors.textMuted }}>
          {subtitle}
        </p>
      )}
    </header>
  );
};
