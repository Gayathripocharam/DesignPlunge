// src/components/ui/Button.tsx
import React from "react";
import styles from "./Button.module.css";
import type { LucideIcon } from "lucide-react";

export type ButtonVariant = "primary" | "secondary" | "link";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  loading?: boolean;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      loading = false,
      icon: Icon,
      iconPosition = "right",
      children,
      className,
      disabled,
      ...rest
    },
    ref
  ) => {
    const classNames = [
      styles.button,
      styles[variant],
      className
    ].filter(Boolean).join(" ");

    return (
      <button
        ref={ref}
        className={classNames}
        disabled={disabled || loading}
        data-loading={loading}
        {...rest}
      >
        {loading && <span className={styles.loader} aria-hidden="true" />}
        {!loading && Icon && iconPosition === "left" && (
          <Icon size={16} strokeWidth={2} />
        )}
        <span>{children}</span>
        {!loading && Icon && iconPosition === "right" && (
          <Icon size={16} strokeWidth={2} />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
