import React from "react";
import styles from "./BaseCard.module.css";

export type CardVariant = "work" | "service" | "insight" | "ai" | "process" | "testimonial";

export interface BaseCardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: CardVariant;
  className?: string;
  children?: React.ReactNode;
}

export const BaseCard: React.FC<BaseCardProps> = ({
  variant = "work",
  className = "",
  children,
  ...rest
}) => {
  const classNames = [styles.baseCard, styles[variant], className]
    .filter(Boolean)
    .join(' ');
  return (
    <div className={classNames} {...rest}>
      {children}
    </div>
  );
};
