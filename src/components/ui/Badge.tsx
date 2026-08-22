// src/components/ui/Badge.tsx
import type React from "react";
import { colors } from "@/design/colors";
import { spacing } from "@/design/spacing";
import { typography } from "@/design/typography";
import { radii } from "@/design/radii";

export type BadgeVariant = "default" | "success" | "error" | "warning";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantColors: Record<BadgeVariant, { bg: string; text: string }> = {
  default: { bg: colors.surface, text: colors.textPrimary },
  success: { bg: colors.success, text: colors.textInverse },
  error: { bg: colors.error, text: colors.textInverse },
  warning: { bg: colors.accentGold, text: colors.textPrimary },
};

export const Badge: React.FC<BadgeProps> = ({
  variant = "default",
  style: externalStyle,
  children,
  ...rest
}) => {
  const { bg, text } = variantColors[variant];
  const style: React.CSSProperties = {
    backgroundColor: bg,
    color: text,
    padding: `${spacing.xs} ${spacing.sm}`,
    borderRadius: radii.full,
    fontSize: typography.size.label,
    fontWeight: typography.weight.label,
    fontFamily: typography.mono,
    letterSpacing: typography.letterSpacing.label,
    textTransform: "uppercase" as const,
    lineHeight: 1,
    ...externalStyle,
  };

  return (
    <span style={style} {...rest}>
      {children}
    </span>
  );
};
