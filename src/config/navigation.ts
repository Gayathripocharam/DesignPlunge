// src/config/navigation.ts
/**
 * Rich navigation configuration used by the Navbar.
 *
 * Fields:
 *  - id: unique identifier (string)
 *  - label: display text
 *  - path: internal route or external URL
 *  - external?: boolean – true if the link opens a new tab
 *  - highlight?: boolean – apply special styling (e.g., CTA button)
 *  - children?: NavigationItem[] – for dropdown menus
 */
export interface NavigationItem {
  id: string;
  label: string;
  path: string;
  external?: boolean;
  highlight?: boolean;
  children?: NavigationItem[];
}

export const navigation: NavigationItem[] = [
  { id: "home", label: "Home", path: "/" },
  {
    id: "studio",
    label: "Studio",
    path: "/studio"
  },
  { id: "services", label: "Services", path: "/services" },
  { id: "work", label: "Work", path: "/work" },
  { id: "contact", label: "Contact", path: "/contact", highlight: true },
];
