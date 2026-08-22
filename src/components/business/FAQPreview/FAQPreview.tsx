import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import styles from "./FAQPreview.module.css";

interface FAQ {
  category: string;
  question: string;
  answer: string;
}

const faqs: FAQ[] = [
  {
    category: "INVESTMENT",
    question: "How much does a project cost?",
    answer:
      "Project costs vary based on scope, complexity, and timeline. After an initial discovery call, we provide a detailed proposal with transparent, fixed or milestone-based pricing.",
  },
  {
    category: "TIMELINE",
    question: "How long does a typical project take?",
    answer:
      "Timelines depend on scope, complexity and level of involvement. We define milestones and expected delivery stages after understanding the project.",
  },
  {
    category: "EXISTING PRODUCT",
    question: "Can you work with an existing product?",
    answer:
      "Yes. We frequently integrate with existing products and codebases to refactor UX/UI, build new capabilities, improve architecture, or accelerate feature delivery alongside your team.",
  },
  {
    category: "CONFIDENTIALITY",
    question: "Can you sign an NDA?",
    answer:
      "Absolutely. We respect your intellectual property and confidentiality, and we are happy to execute a Non-Disclosure Agreement before discussing project details.",
  },
  {
    category: "FIT",
    question: "Do you work with early-stage startups?",
    answer:
      "Yes. We help early-stage founders shape their initial concepts and build scalable product foundations.",
  },
  {
    category: "PROCESS",
    question: "What happens after I contact you?",
    answer:
      "Following our call, we prepare a tailored proposal covering scope, timeline, team structure, and pricing. Once approved, we kick off with an alignment workshop and begin sprint execution.",
  },
];

const servicesFaqs: FAQ[] = [
  {
    category: "ENGAGEMENT",
    question: "What does a typical engagement look like?",
    answer:
      "A typical engagement involves a dedicated cross-functional team (design, engineering, AI) working closely with your stakeholders in iterative cycles, from initial discovery through to launch and beyond.",
  },
  {
    category: "EXISTING PRODUCT",
    question: "Can you work with an existing product?",
    answer:
      "Yes. We frequently integrate with existing products and codebases to refactor UX/UI, build new capabilities, improve architecture, or accelerate feature delivery alongside your team.",
  },
  {
    category: "GETTING STARTED",
    question: "How do we get started?",
    answer:
      "Following our initial call, we prepare a tailored proposal covering scope, timeline, and pricing. Once approved, we kick off with an alignment workshop.",
  },
];

/* ─── Plunge‑reveal card ─── */

interface PlungeCardProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: (e: React.MouseEvent) => void;
  originX: number;
  originY: number;
}

const PlungeCard: React.FC<PlungeCardProps> = ({
  faq,
  isOpen,
  onToggle,
  originX,
  originY,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={cardRef}
      className={`${styles.card} ${isOpen ? styles.cardOpen : ""}`}
      onClick={onToggle}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onToggle(e as unknown as React.MouseEvent);
        }
      }}
      aria-expanded={isOpen}
    >
      {/* Question face (always rendered) */}
      <div className={styles.questionFace}>
        <span className={styles.cardCategory}>{faq.category}</span>
        <p className={styles.cardQuestion}>{faq.question}</p>
      </div>

      {/* Dark plunge reveal overlay */}
      <div
        className={styles.plungeOverlay}
        style={{
          "--ox": `${originX}px`,
          "--oy": `${originY}px`,
        } as React.CSSProperties}
      >
        <div className={styles.answerFace}>
          <span className={styles.answerCategory}>{faq.category}</span>
          <p className={styles.answerText}>{faq.answer}</p>
          <span className={styles.closeCue}>click to close</span>
        </div>
      </div>
    </div>
  );
};

/* ─── FAQPreview section ─── */

interface FAQPreviewProps {
  variant?: "home" | "services";
}

export const FAQPreview: React.FC<FAQPreviewProps> = ({ variant }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [origin, setOrigin] = useState({ x: 0, y: 0 });

  const displayFaqs =
    variant === "services"
      ? servicesFaqs
      : variant === "home"
        ? faqs.slice(0, 4)
        : faqs;

  const handleToggle = useCallback(
    (index: number, e: React.MouseEvent) => {
      if (openIndex === index) {
        setOpenIndex(null);
        return;
      }
      const card = (e.currentTarget as HTMLElement).closest(
        `.${styles.card}`
      ) as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        setOrigin({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }
      setOpenIndex(index);
    },
    [openIndex]
  );

  return (
    <Section id="faq" background="var(--surface)" className={styles.container}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <p className="section-marker">
             FAQ
          </p>
          <p className={styles.eyebrow}>QUESTIONS?</p>
          <h2 className={styles.title}>Frequently asked questions</h2>
          <p className={styles.subtitle}>
            {variant === "services"
              ? "We've covered what we do. Now let's talk about what you're trying to solve."
              : "Everything you need to know before starting a project."}
          </p>
        </div>

        <div className={styles.grid}>
          {displayFaqs.map((faq, i) => (
            <PlungeCard
              key={`${faq.category}-${i}`}
              faq={faq}
              isOpen={openIndex === i}
              onToggle={(e) => handleToggle(i, e)}
              originX={origin.x}
              originY={origin.y}
            />
          ))}
        </div>

        <div className={styles.footerCta}>
          <p className={styles.footerCtaText}>Still have a question?</p>
          <Link to="/contact" className={styles.footerCtaLink}>
            Talk to us about your project &rarr;
          </Link>
        </div>
      </div>
    </Section>
  );
};
