// src/components/ui/PremiumCard.tsx
import React from "react";
import { motion } from "framer-motion";
import { spacing } from "@/design/spacing";
import { motion as motionTokens } from "@/design/motion";

export interface PremiumCardProps {
  /** Title of the capability */
  title: string;
  /** Optional short description */
  description?: string;
  /** Lucide outline icon component */
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  /** Additional className */
  className?: string;
}

/** Simple premium card used across the site. */
export const PremiumCard: React.FC<PremiumCardProps> = ({
  title,
  description,
  Icon,
  className = "",
}) => {
  const containerStyle = {
    backgroundColor: "var(--surface-elevated)",
    borderRadius: "10px",
    border: "1px solid var(--border)",
    boxShadow: `0 4px 12px rgba(0,0,0,0.1)`,
    padding: spacing.xl,
    height: "100%",
    textAlign: "left" as const,
    transition: `transform ${motionTokens.durationFast}s ${motionTokens.easeOut}, box-shadow ${motionTokens.durationFast}s ${motionTokens.easeOut}`,
  };

  const hoverStyle = {
    y: -4,
    boxShadow: `0 8px 20px rgba(0,0,0,0.15)`,
  };

  return (
    <motion.div
      className={className}
      style={containerStyle}
      whileHover={hoverStyle}
    >
      {Icon && (
        <Icon
          width={32}
          height={32}
          style={{ marginBottom: spacing.sm, color: "var(--text-h)" }}
        />
      )}
      <h3 style={{ margin: 0, fontSize: "20px", lineHeight: 1.2, color: "var(--text-h)" }}>
        {title}
      </h3>
      {description && (
        <p style={{ marginTop: spacing.sm, fontSize: "15px", color: "var(--text)" }}>
          {description}
        </p>
      )}
    </motion.div>
  );
};

