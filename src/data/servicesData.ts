import { type VisualMetaphorType } from '@/components/business/ServiceOverview/VisualMetaphors';

export interface Service {
  id: string; // "01"‑"04"
  title: string;
  description: string;
  metadata: string[]; // token list
  visualKey: VisualMetaphorType; // maps to VisualMetaphors variant
}

export const services: Service[] = [
  {
    id: "01",
    title: "DIGITAL PRODUCTS",
    description: "We shape products from the first problem definition to the final interface—connecting strategy, UX, and engineering into one coherent system.",
    metadata: ["PRODUCT STRATEGY", "UX / UI", "PROTOTYPING", "ENGINEERING"],
    visualKey: "digital-products",
  },
  {
    id: "02",
    title: "WEB APPLICATIONS",
    description: "We build reliable web applications that turn operational complexity into clear, usable experiences.",
    metadata: ["ARCHITECTURE", "FRONTEND", "BACKEND", "INTEGRATIONS"],
    visualKey: "web-applications",
  },
  {
    id: "03",
    title: "AI SYSTEMS",
    description: "We design AI systems around real workflows—not AI for the sake of adding AI.",
    metadata: ["AI WORKFLOWS", "AUTOMATION", "RAG", "AGENTS"],
    visualKey: "ai-systems",
  },
  {
    id: "04",
    title: "DESIGN SYSTEMS",
    description: "We create reusable foundations that keep products consistent as teams, features, and interfaces grow.",
    metadata: ["TOKENS", "COMPONENTS", "PATTERNS", "PRODUCT UI"],
    visualKey: "design-systems",
  },
];
