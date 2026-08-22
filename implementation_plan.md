# Layout System Implementation Plan

## Goal Description
Create a robust, reusable layout system for the DesignPlunge project. This includes migrating existing UI components from `src/lib/components` to `src/components/ui`, removing the old directory, and building a `Shell` component that orchestrates the Navbar, Footer, page transitions, and global experience components. The layout will be data‑driven, leveraging the existing `config/` and `content/` modules, and will follow the architectural guidelines provided.

## User Review Required
> [!IMPORTANT]
> The plan introduces new directories and deletes existing files. Please confirm that you are comfortable with these structural changes before we proceed.

> [!WARNING]
> Moving components will affect any imports throughout the codebase. Ensure that the path updates are acceptable for your project setup.

## Open Questions
> [!CAUTION] Do you have a preferred naming convention for the new layout components (e.g., `Shell`, `PageWrapper`, `SectionWrapper`)?
> 
> [!CAUTION] Should the Navbar be split into separate Desktop and Mobile components now, or can we implement a responsive single component?

## Proposed Changes
---
### Migration of UI Components
- **[MODIFY]** `src/lib/components/Badge.tsx` → move to `src/components/ui/Badge.tsx`
- **[MODIFY]** `src/lib/components/Button.tsx` → already created `src/components/ui/Button.tsx`
- **[MODIFY]** `src/lib/components/Container.tsx` → move to `src/components/ui/Container.tsx`
- **[MODIFY]** `src/lib/components/Grid.tsx` → move to `src/components/ui/Grid.tsx`
- **[MODIFY]** `src/lib/components/Heading.tsx` → move to `src/components/ui/Heading.tsx`
- **[DELETE]** `src/lib/components/` folder after all files are migrated.

### Layout System Core
- **[NEW]** `src/layout/Shell/index.tsx` – Root layout component that renders `<Navbar />`, `<Footer />`, and children wrapped in `<PageWrapper />`.
- **[NEW]** `src/layout/PageWrapper.tsx` – Handles page‑level transitions and scroll restoration.
- **[NEW]** `src/layout/SectionWrapper.tsx` – Provides consistent vertical spacing and optional background token.
- **[NEW]** `src/layout/SectionHeader.tsx` – Renders section titles using design tokens.
- **[NEW]** `src/layout/CTA.tsx` – Call‑to‑action component with configurable text, button, and background.
- **[NEW]** `src/layout/PageTransition.tsx` – Implements smooth page‑transition animation using the existing motion utilities.
- **[NEW]`** `src/layout/ScrollProgress.tsx` – Sticky progress bar reflecting scroll position.

### Navbar & Footer (Data‑Driven)
- **[NEW]** `src/components/navigation/Navbar.tsx` – Reads navigation items from `config/navigation.ts` and renders responsive menu.
- **[NEW]** `src/components/navigation/Footer.tsx` – Reads footer sections from `content/footer.ts` and renders them.
- **[NEW]** `src/config/navigation.ts` – Export type‑safe navigation schema.
- **[NEW]** `src/content/footer.ts` – Export footer data (links, social icons, copyright).

### Index Exports
- Update barrel files:
  - `src/components/ui/index.ts` – export all UI primitives.
  - `src/components/navigation/index.ts` – export Navbar & Footer.
  - `src/layout/index.ts` – export Shell and layout helpers.

## Verification Plan
### Automated Tests
- Run `npm run lint` to ensure no import errors.
- Execute `npm run type-check` (if TypeScript) to verify type safety.
- Run existing unit tests (if any) to confirm nothing broke.

### Manual Verification
- Start the dev server (`npm run dev`) and confirm the Shell renders Navbar, Footer, and children correctly.
- Verify responsive behavior of Navbar on mobile viewport.
- Check that page transitions are smooth and scroll progress bar updates.
- Confirm that all former component imports now resolve from the new UI path.

---
**Implementation will proceed only after your approval of this plan.**
