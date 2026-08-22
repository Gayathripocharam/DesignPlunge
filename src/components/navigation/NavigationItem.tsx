// src/components/navigation/NavigationItem.tsx
import type React from "react";
import { NavLink } from "react-router-dom";
import type { NavigationItem as NavItem } from "@/config/navigation";
import { colors } from "@/design/colors";
import { typography } from "@/design/typography";
import { spacing } from "@/design/spacing";
import { radii } from "@/design/radii";

const baseStyle: React.CSSProperties = {
  padding: `${spacing.sm} ${spacing.md}`,
  fontSize: typography.size.body, // Larger for mobile menu
  fontFamily: typography.mono,
  fontWeight: typography.weight.label,
  letterSpacing: typography.letterSpacing.label,
  textTransform: "uppercase" as const,
  textDecoration: "none",
  transition: `color 180ms ease-out`,
  display: "block",
};

const highlightStyle: React.CSSProperties = {
  ...baseStyle,
  backgroundColor: colors.accentGold,
  color: colors.textPrimary,
  borderRadius: radii.md,
};

/**
 * Renders a single navigation link (used primarily in Mobile Menu now).
 */
export const NavigationItem: React.FC<{ item: NavItem }> = ({ item }) => {
  if (item.external) {
    return (
      <a
        href={item.path}
        target="_blank"
        rel="noopener noreferrer"
        style={{ ...baseStyle, color: colors.textSecondary }}
      >
        {item.label}
      </a>
    );
  }

  if (item.highlight) {
    return (
      <NavLink to={item.path} style={highlightStyle}>
        {item.label}
      </NavLink>
    );
  }

  return (
    <NavLink 
      to={item.path} 
      style={({ isActive }) => ({
        ...baseStyle,
        color: isActive ? colors.textPrimary : colors.textSecondary,
      })}
    >
      {item.label}
    </NavLink>
  );
};
