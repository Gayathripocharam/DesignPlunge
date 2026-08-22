import React from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { Heading } from "@/components/ui/Heading";
import { Button } from "@/components/ui/Button";
import { spacing } from "@/design/spacing";

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "80vh",
        textAlign: "center",
        padding: spacing.xl,
      }}
    >
      <Heading level="h1" style={{ fontSize: "6rem", marginBottom: spacing.md, color: "var(--accent)" }}>
        404
      </Heading>
      <Heading level="h2" style={{ marginBottom: spacing.lg, color: "var(--text-h)" }}>
        Page Not Found
      </Heading>
      <p style={{ marginBottom: spacing.xl, color: "var(--text)", maxWidth: "500px", fontSize: "1.125rem" }}>
        The page you are looking for doesn't exist or has been moved.
      </p>
      <Button onClick={() => navigate("/")}>Return Home</Button>
    </motion.section>
  );
};
