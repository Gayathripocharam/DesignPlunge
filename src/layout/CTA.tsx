// src/layout/CTA.tsx
import React from "react";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design/spacing";
import { colors } from "@/design/colors";

export interface CTAProps {
  /** Primary call‑to‑action text */
  primaryLabel: string;
  /** Handler for primary button */
  onPrimaryClick: () => void;
  /** Optional secondary CTA */
  secondaryLabel?: string;
  /** Handler for secondary button */
  onSecondaryClick?: () => void;
  /** Background token for the CTA block */
  background?: keyof typeof colors;
  /** Optional additional class */
  className?: string;
}

/**
 * Reusable call‑to‑action component used across sections.
 * Layout is simple: primary button (required) + optional secondary button.
 * All styling references design tokens.
 */
export const CTA: React.FC<CTAProps> = ({
  primaryLabel,
  onPrimaryClick,
  secondaryLabel,
  onSecondaryClick,
  background = "surface",
  className = "",
}) => {
  const containerStyle: React.CSSProperties = {
    backgroundColor: colors[background],
    padding: spacing.lg,
    display: "flex",
    gap: spacing.md,
    justifyContent: "center",
    alignItems: "center",
  };

  return (
    <div style={containerStyle} className={className}>
      <Button variant="primary" onClick={onPrimaryClick}>
        {primaryLabel}
      </Button>
      {secondaryLabel && onSecondaryClick && (
        <Button variant="secondary" onClick={onSecondaryClick}>
          {secondaryLabel}
        </Button>
      )}
    </div>
  );
};
