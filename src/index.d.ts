import * as React from 'react';

export type FooterLink = {
  id?: string;
  label: string;
  href: string;
  external?: boolean;
  status?: string;
};

export type FooterColumn = {
  title: string;
  accent?: boolean;
  links: FooterLink[];
};

export type FooterTheme = {
  footerBackground?: string;
  panelBackground?: string;
  accentBackground?: string;
  textColor?: string;
  mutedTextColor?: string;
  linkColor?: string;
  borderRadius?: string;
  maxWidth?: string;
  fontFamily?: string;
};

export type CanonicalSite = {
  id: string;
  label: string;
  href: string | null;
  kind: string;
  status: string;
  showInFooter: boolean;
};

export type AnthusFooterProps = {
  siteId?: string;
  productName?: string;
  subtitle?: string;
  description?: string;
  communityLinks?: FooterLink[];
  brandLinks?: FooterLink[];
  platformLinks?: FooterLink[];
  additionalColumns?: FooterColumn[];
  byline?: string;
  logo?: React.ReactNode;
  theme?: FooterTheme;
};

export const defaultCommunityLinks: FooterLink[];
export const defaultBrandLinks: FooterLink[];
export const defaultPlatformLinks: FooterLink[];

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
