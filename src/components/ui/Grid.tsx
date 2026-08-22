// src/components/ui/Grid.tsx
import React from "react";
import { spacing } from "@/design/spacing";

export interface GridProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Number of columns (default 12) */
  columns?: number;
  /** Gap between cells, using spacing token keys */
  gap?: keyof typeof spacing;
  /** Optional responsive overrides: { breakpoint: columns } */
  responsive?: { [breakpoint: string]: number };
  className?: string;
  children?: React.ReactNode;
}

export const Grid: React.FC<GridProps> = ({
  columns = 12,
  gap = "md",
  responsive: _responsive = {},
  className = "",
  children,
  ...rest
}) => {
  const gapValue = spacing[gap];
  const style: React.CSSProperties = {
    display: "grid",
    gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
    gap: gapValue,
  } as React.CSSProperties;

  // Responsive handling can be achieved via CSS variables or media queries in a real project.
  // Here we expose the responsive prop for future extension.
  return (
    <div style={style} className={className} {...rest}>
      {children}
    </div>
  );
};
