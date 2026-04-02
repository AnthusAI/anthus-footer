import * as React from 'react';

export type FooterLink = {
  id?: string;
  label: string;
  href: string;
  description?: string;
  external?: boolean;
  status?: string;
};

export type FooterColumn = {
  title: string;
  accent?: boolean;
  description?: string;
  links: FooterLink[];
};

export type FooterTheme = {
  background?: string;
  footerBackground?: string;
  groupedBackground?: string;
  panelBackground?: string;
  accentBackground?: string;
  foreground?: string;
  textColor?: string;
  mutedForeground?: string;
  mutedTextColor?: string;
  link?: string;
  linkColor?: string;
  borderRadius?: string;
  maxWidth?: string;
  fontFamily?: string;
  fontFamilyBody?: string;
  fontFamilyHeading?: string;
};

export type FooterMode = 'light' | 'dark' | 'auto';

export type CanonicalSite = {
  id: string;
  label: string;
  href: string | null;
  kind: string;
  description?: string;
  status: string;
  showInFooter: boolean;
};

export type FooterSection = {
  eyebrow?: string;
  title?: string;
  description?: string;
  visual?: React.ReactNode;
  linksTitle?: string;
  links?: FooterLink[];
  anthusLinks?: FooterLink[];
  platformLinks?: FooterLink[];
  columns?: FooterColumn[];
};

export type AnthusFooterProps = {
  siteId?: string;
  mode?: FooterMode;
  className?: string;
  productName?: string;
  subtitle?: string;
  description?: string;
  communityLinks?: FooterLink[];
  brandLinks?: FooterLink[];
  platformLinks?: FooterLink[];
  additionalColumns?: FooterColumn[];
  localSection?: FooterSection;
  globalSection?: FooterSection;
  byline?: string;
  logo?: React.ReactNode;
  theme?: FooterTheme;
};

export const defaultCommunityLinks: FooterLink[];
export const defaultBrandLinks: FooterLink[];
export const defaultPlatformLinks: FooterLink[];
export const defaultDarkTheme: FooterTheme;
export const defaultLightTheme: FooterTheme;

export const canonicalSites: Record<string, CanonicalSite>;
export const canonicalSiteList: CanonicalSite[];

export function getSiteById(id: string): CanonicalSite | null;
export function getAnthusLinks(): FooterLink[];
export function getPlatformLinks(options?: {
  excludeIds?: string[];
  includeNonLive?: boolean;
}): FooterLink[];

export function AnthusFooter(props: AnthusFooterProps): React.ReactElement;

export default AnthusFooter;
