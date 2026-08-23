import React, { useState, useRef, useCallback } from "react";
import { Link } from "react-router-dom";
import { Section } from "@/components/ui/Section";
import styles from "./FAQPreview.module.css";

import { homeFaqs, servicesFaqs } from '@/content/faq';
import type { FAQ } from '@/content/faq';

/* ─── Plunge‑reveal card ─── */

interface PlungeCardProps {
  faq: FAQ;
  isOpen: boolean;
  onToggle: (e: React.MouseEvent | React.KeyboardEvent) => void;
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
          onToggle(e);
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
    variant === 'services'
      ? servicesFaqs
      : variant === 'home'
        ? homeFaqs.slice(0, 4)
        : homeFaqs;

  const handleToggle = useCallback(
    (index: number, e: React.MouseEvent | React.KeyboardEvent) => {
      if (openIndex === index) {
        setOpenIndex(null);
        return;
      }
      const card = (e.currentTarget as HTMLElement).closest(
        `.${styles.card}`
      ) as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        const clientX = 'clientX' in e ? e.clientX : rect.left + rect.width / 2;
        const clientY = 'clientY' in e ? e.clientY : rect.top + rect.height / 2;
        setOrigin({
          x: clientX - rect.left,
          y: clientY - rect.top,
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
