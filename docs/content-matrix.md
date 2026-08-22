# Content Replacement Matrix

Based on an audit of the repository, here is the status of the content across the site. As requested, no content has been fabricated. Where real information is not present, it has been marked as `CONTENT REQUIRED`.

| Location | Component / File | Current content | Status | Replacement |
| :--- | :--- | :--- | :--- | :--- |
| **Projects** | `src/content/casestudies/*.ts` | "Product Analytics Dashboard", "Business Automation Platform", "AI Operations Platform" | INTENTIONAL UI TEXT | Keep existing content (these are explicitly defined as `type: "concept"` and serve as product thinking demonstrations). |
| **Services** | `src/content/services.ts` | "Digital product design", "Web engineering", "AI & automation", "Design systems" | REAL | Keep existing content. The canonical data represents the actual service offerings. |
| **Studio (Team)** | `src/features/studio/StudioPage.tsx` | `team` array (e.g., "Gayathri" / "Product & Design", "Pocha" / "Engineering & AI") | REAL | Keep existing team members. |
| **Studio (Testimonials)** | `src/components/business/Testimonials/Testimonials.tsx` | Testimonials array (if used/present) with dummy quotes / companies | PLACEHOLDER | `CONTENT REQUIRED` |
| **Contact (Form)** | `src/features/contact/ContactPage.tsx` | Formspree integration and copy | REAL | Keep existing integration. |
| **Footer / Contact** | `src/layout/Footer/Footer.tsx` | "Design Plunge" | REAL | Keep existing. |
| **Footer (Newsletter)**| `src/content/footer.ts` | "Enter your email" / Newsletter form | INTENTIONAL UI TEXT | Keep existing. |

## Open Questions / Missing Content
1. **Testimonials**: We currently do not have real client names, roles, or quotes. We need the real testimonial content to replace any placeholders, or we can remove the Testimonials section entirely until that data is available.
2. **Social Links**: Any specific social media links (LinkedIn, Twitter/X) that should be added to the Footer/Contact page?

Please provide the `CONTENT REQUIRED` information or confirm if sections like Testimonials should be temporarily hidden for production.
