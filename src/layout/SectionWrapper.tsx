// src/layout/SectionWrapper.tsx
import React from "react";
import { spacing } from "@/design/spacing";
import { colors } from "@/design/colors";

export interface SectionWrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional background token name (e.g., "surface", "background") */
  background?: keyof typeof colors;
  /** Optional vertical spacing token (e.g., "xl", "2xl") */
  spacing?: keyof typeof spacing;
  className?: string;
}

/**
 * Layout helper that wraps a page section with consistent vertical spacing
 * and an optional background color sourced from the design token palette.
 */
export const SectionWrapper: React.FC<SectionWrapperProps> = ({
  background = "background",
  spacing: space = "xl",
  className = "",
  children,
  ...rest
}) => {
  const style: React.CSSProperties = {
    backgroundColor: colors[background],
    paddingTop: spacing[space],
    paddingBottom: spacing[space],
  };

  return (
    <section style={style} className={className} {...rest}>
      {children}
    </section>
  );
};
