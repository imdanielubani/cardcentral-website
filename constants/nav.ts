import { ROUTES } from "./routes";

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: ROUTES.HOME },
  { label: "About Us", href: ROUTES.ABOUT },
  { label: "Rates", href: ROUTES.RATES },
  { label: "Blog", href: ROUTES.BLOG },
  { label: "Contact", href: ROUTES.CONTACT },
  { label: "FAQ", href: ROUTES.FAQ },
];

export const FOOTER_LINKS = {
  company: [
    { label: "About Us", href: ROUTES.ABOUT },
    { label: "Rates", href: ROUTES.RATES },
    { label: "Blog", href: ROUTES.BLOG },
    { label: "Contact Us", href: ROUTES.CONTACT },
  ],
  legal: [
    { label: "Terms & Conditions", href: ROUTES.TERMS },
    { label: "Privacy Policy", href: ROUTES.PRIVACY },
    { label: "FAQ", href: ROUTES.FAQ },
  ],
} as const;
