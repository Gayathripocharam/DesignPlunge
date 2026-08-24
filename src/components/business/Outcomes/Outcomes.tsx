import React, { useState } from "react";
import { Target, ShieldCheck, Layers, Zap, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";

const outcomesList = [
  {
    num: "01",
    title: "Move faster.",
    icon: Target,
    iconBg: "#EFEAFE",
    iconColor: "#7C5CFC",
    from: "Handoff",
    to: "Integration",
    desc: "Production-ready design and engineering reduce unnecessary handoffs and friction.",
  },
  {
    num: "02",
    title: "Scale with confidence.",
    icon: ShieldCheck,
    iconBg: "#FCEAF6",
    iconColor: "#EC4899",
    from: "Complexity",
    to: "System",
    desc: "Systems and architecture designed to evolve, rather than accumulate more complexity.",
  },
  {
    num: "03",
    title: "Make products easier to use.",
    icon: Layers,
    iconBg: "#EAF1FE",
    iconColor: "#5B8DEF",
    from: "Friction",
    to: "Clarity",
    desc: "Clearer flows and intuitive UX that reduce friction for your users.",
  },
  {
    num: "04",
    title: "Use AI where it matters.",
    icon: Zap,
    iconBg: "#EFEAFE",
    iconColor: "#7C5CFC",
    from: "Manual work",
    to: "Automation",
    desc: "Integrate automation and intelligence into workflows where it produces real leverage.",
  },
];



const Card = ({ item }: { item: typeof outcomesList[number] }) => {
  const [hover, setHover] = useState(false);
  const Icon = item.icon;
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: "relative",
        background: "var(--surface)",
        borderRadius: 20,
        padding: "28px 26px",
        boxShadow: hover
          ? "0 16px 40px rgba(124,92,252,0.16)"
          : "0 4px 20px rgba(17,17,17,0.06)",
        transform: hover ? "translateY(-4px)" : "none",
        transition: "all 0.3s ease",
        cursor: "default",
        border: "1px solid var(--border)",
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 14,
          background: item.iconBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          flexShrink: 0,
        }}
      >
        <Icon size={22} color={item.iconColor} strokeWidth={2} />
      </div>
      <p
        style={{
          fontFamily: "var(--mono)",
          fontSize: 11,
          fontWeight: 600,
          color: "var(--text-muted)",
          letterSpacing: "0.08em",
          margin: "0 0 6px",
          display: "flex",
          alignItems: "center",
          gap: 4,
          flexWrap: "wrap",
        }}
      >
        <span style={{ whiteSpace: "nowrap" }}>{item.num}&nbsp;&nbsp;{item.from}</span>
        <ArrowRight size={11} style={{ flexShrink: 0 }} />
        <span style={{ whiteSpace: "nowrap" }}>{item.to}</span>
      </p>
      <h3
        style={{
          fontFamily: "var(--heading)",
          fontWeight: 600,
          fontSize: 22,
          color: "var(--text-h)",
          margin: "0 0 10px",
          letterSpacing: "-0.01em",
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          fontFamily: "var(--sans)",
          fontSize: 14,
          color: "var(--text)",
          lineHeight: 1.65,
          margin: 0,
        }}
      >
        {item.desc}
      </p>
    </div>
  );
};

export interface OutcomesProps {
  spacingTop?: "none" | "medium" | "large";
  spacingBottom?: "none" | "medium" | "large";
}

export const Outcomes: React.FC<OutcomesProps> = ({ spacingTop = "medium", spacingBottom = "medium" }) => {
  return (
    <Section id="outcomes" background="var(--surface)" spacingTop={spacingTop} spacingBottom={spacingBottom} style={{ position: "relative", overflow: "hidden" }}>
      {/* Decorative gradient orb */}
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          top: -120,
          right: -160,
          width: 520,
          height: 520,
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(124,92,252,0.13) 0%, rgba(236,72,153,0.07) 60%, transparent 80%)",
          filter: "blur(10px)",
          pointerEvents: "none",
        }}
      />

      <div style={{ position: "relative", width: "100%" }}>
        {/* Header */}
        <div style={{ maxWidth: 640, marginBottom: 56 }}>
          <p className="section-marker">
             OUTCOMES
          </p>
          <h2
            style={{
              fontFamily: "var(--heading)",
              fontWeight: 700,
              fontSize: "clamp(2.25rem, 4vw, 3rem)",
              lineHeight: 1.15,
              color: "var(--text-h)",
              margin: "0 0 20px",
              letterSpacing: "-0.02em",
            }}
          >
            What we help you{" "}
            <span style={{ color: "var(--accent)" }}>
              achieve
            </span>
            .
          </h2>
          <p
            style={{
              fontFamily: "var(--sans)",
              fontSize: 16,
              color: "var(--text)",
              lineHeight: 1.75,
              margin: 0,
              maxWidth: 480,
            }}
          >
            The goal isn't just to ship more code. It's to build a product that your users love and your team can easily scale.
          </p>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: 20,
            width: "100%",
            marginBottom: 56,
          }}
        >
          {outcomesList.map((item) => (
            <Card key={item.num} item={item} />
          ))}
        </div>

        {/* CTA row */}
        <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
          <Link
            to="/#how-we-work"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 15,
              color: "#FFFFFF",
              background: "var(--accent)",
              border: "none",
              borderRadius: 999,
              padding: "14px 28px",
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              cursor: "pointer",
              boxShadow: "0 8px 24px rgba(109,93,246,0.28)",
              textDecoration: "none",
              transition: "opacity 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.88")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            See how we work <ArrowRight size={16} />
          </Link>
          <Link
            to="/work"
            style={{
              fontFamily: "var(--sans)",
              fontWeight: 600,
              fontSize: 15,
              color: "var(--text-h)",
              background: "var(--surface)",
              border: "1px solid var(--border)",
              borderRadius: 999,
              padding: "14px 28px",
              cursor: "pointer",
              textDecoration: "none",
              transition: "border-color 0.2s ease",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.borderColor = "var(--text-muted)")}
            onMouseLeave={(e) => (e.currentTarget.style.borderColor = "var(--border)")}
          >
            View our work
          </Link>
        </div>
      </div>
    </Section>
  );
};
