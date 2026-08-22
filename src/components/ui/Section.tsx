// src/components/ui/Section.tsx
import React from "react";
import { Container } from "./Container";
import styles from "./Section.module.css";

export interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Optional background token (CSS color value or CSS variable) */
  background?: string;
  /** Optional additional className */
  className?: string;
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

export const Section: React.FC<SectionProps> = ({
  background = "transparent",
  className = "",
  spacingTop = "medium",
  spacingBottom = "medium",
  children,
  ...rest
}) => {
  const topClass = styles[`top-${spacingTop}`] || "";
  const bottomClass = styles[`bottom-${spacingBottom}`] || "";
  
  return (
    <section
      className={`${styles.section} ${topClass} ${bottomClass} ${className}`}
      style={{ background }}
      {...rest}
    >
      <Container>{children}</Container>
    </section>
  );
};
