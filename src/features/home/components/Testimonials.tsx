import React from "react";
import { Heading } from "@/components/ui/Heading";
import { spacing } from "@/design/spacing";
import { typography } from "@/design/typography";

const testimonials = [
  {
    quote: "Design Plunge turned our ideas into a polished product that our users love.",
    author: "Jane Doe, CEO of Acme Corp",
  },
  {
    quote: "Their design sense is impeccable and their engineering is rock‑solid.",
    author: "John Smith, Founder of StartupX",
  },
  {
    quote: "The AI automation they built saved us countless hours.",
    author: "Emily Chen, Product Lead at BetaWorks",
  },
];

export const Testimonials: React.FC = () => (
  <section style={{
    backgroundColor: "var(--surface-elevated)",
    padding: `${spacing.xl} ${spacing.lg}`,
    marginTop: spacing.xl,
    borderRadius: "12px",
  }}>
    <Heading level="h2" style={{
      color: "var(--text-h)",
      marginBottom: spacing.lg,
      textAlign: "center",
    }}>
      What Our Clients Say
    </Heading>
    <div style={{
      display: "grid",
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: spacing.lg,
    }}>
      {testimonials.map((t, i) => (
        <blockquote key={i} style={{
          padding: spacing.md,
          borderLeft: `4px solid var(--accent)`,
          backgroundColor: "var(--code-bg)",
          borderRadius: "8px",
        }}>
          <p style={{
            fontStyle: "italic",
            marginBottom: spacing.sm,
            color: "var(--text)",
            fontSize: typography.size.body,
          }}>{t.quote}</p>
          <cite style={{
            display: "block",
            textAlign: "right",
            fontWeight: "bold",
            color: "var(--text-h)",
          }}>{t.author}</cite>
        </blockquote>
      ))}
    </div>
  </section>
);
