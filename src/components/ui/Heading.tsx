// src/components/ui/Heading.tsx
import type React from "react";
import { typography } from "@/design/typography";
import { colors } from "@/design/colors";

export type HeadingLevel = "h1" | "h2" | "h3" | "h4";

export interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  /** Heading level determines semantic element and default size */
  level?: HeadingLevel;
  /** Override rendered tag */
  as?: keyof React.JSX.IntrinsicElements;
}

const levelConfig: Record<HeadingLevel, React.CSSProperties> = {
  h1: {
    fontSize: typography.size.h1,
    fontFamily: typography.heading,
    fontWeight: typography.weight.heading,
    letterSpacing: typography.letterSpacing.heading,
    color: colors.textPrimary,
    lineHeight: 1.1,
    margin: 0,
  },
  h2: {
    fontSize: typography.size.h2,
    fontFamily: typography.heading,
    fontWeight: typography.weight.heading,
    letterSpacing: typography.letterSpacing.heading,
    color: colors.textPrimary,
    lineHeight: 1.15,
    margin: 0,
  },
  h3: {
    fontSize: typography.size.h3,
    fontFamily: typography.heading,
    fontWeight: typography.weight.heading,
    letterSpacing: typography.letterSpacing.heading,
    color: colors.textPrimary,
    lineHeight: 1.2,
    margin: 0,
  },
  h4: {
    fontSize: typography.size.h4,
    fontFamily: typography.heading,
    fontWeight: typography.weight.heading,
    letterSpacing: typography.letterSpacing.body,
    color: colors.textPrimary,
    lineHeight: 1.25,
    margin: 0,
  },
};

export const Heading: React.FC<HeadingProps> = ({
  level = "h1",
  as,
  style: externalStyle,
  children,
  ...rest
}) => {
  const Tag = (as ?? level) as React.ElementType;
  const style: React.CSSProperties = {
    ...levelConfig[level],
    ...externalStyle,
  };

  return (
    <Tag style={style} {...rest}>
      {children}
    </Tag>
  );
};
