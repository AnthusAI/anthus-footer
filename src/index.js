import React from 'react';
import {
  canonicalSiteList,
  canonicalSites,
  getAnthusLinks,
  getPlatformLinks,
  getSiteById,
} from './sites.js';

export const defaultCommunityLinks = [
  {
    label: 'Contact us',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdWlt4KpwPSBHzg3o8fikHcfrzxo5rCcV-0-zDt815NZ1tcyg/viewform?usp=sf_link',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnthusAI',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryanalynporter/',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/uStyWraJ2M',
  },
];

export const defaultBrandLinks = getAnthusLinks();
export const defaultPlatformLinks = getPlatformLinks();

const defaultTheme = {
  footerBackground: '#27213a',
  panelBackground: '#332b49',
  accentBackground: '#3c3357',
  textColor: '#f7f4ff',
  mutedTextColor: '#cbbfef',
  linkColor: '#f7f4ff',
  borderRadius: '8px',
  maxWidth: '1120px',
  fontFamily: 'inherit',
};

const baseStyles = {
  footer: theme => ({
    width: '100%',
    backgroundColor: theme.footerBackground,
    color: theme.textColor,
    padding: '1.5rem 1rem',
    fontFamily: theme.fontFamily,
  }),
  shell: theme => ({
    maxWidth: theme.maxWidth,
    margin: '0 auto',
  }),
  topLinks: {
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem 1rem',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '0.95rem',
  },
  link: theme => ({
    color: theme.linkColor,
    textDecoration: 'none',
    fontWeight: 600,
  }),
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem',
  },
  panel: theme => ({
    backgroundColor: theme.panelBackground,
    borderRadius: theme.borderRadius,
    padding: '1.25rem',
  }),
  accentPanel: theme => ({
    backgroundColor: theme.accentBackground,
    borderRadius: theme.borderRadius,
    padding: '1.25rem',
  }),
  eyebrow: theme => ({
    display: 'inline-block',
    marginBottom: '0.5rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.8rem',
    fontWeight: 700,
    color: theme.mutedTextColor,
  }),
  heading: {
    margin: '0 0 0.75rem',
    fontSize: '1.1rem',
  },
  body: {
    margin: 0,
    lineHeight: 1.6,
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '0.5rem',
  },
  bottomRow: theme => ({
    marginTop: '1rem',
    paddingTop: '1rem',
    color: theme.mutedTextColor,
    fontSize: '0.9rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem 1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
};

const mergeTheme = theme => ({ ...defaultTheme, ...(theme || {}) });

const renderLinks = (links, theme) =>
  links.map(link =>
    React.createElement(
      'li',
      { key: `${link.label}-${link.href}` },
      React.createElement(
        'a',
        {
          href: link.href,
          style: baseStyles.link(theme),
          target: link.external === false ? undefined : '_blank',
          rel: link.external === false ? undefined : 'noreferrer',
        },
        link.label
      )
    )
  );

export function AnthusFooter({
  siteId = 'anthus',
  productName = 'Anthus AI Solutions',
  subtitle = 'Part of the Anthus Platform',
  description = 'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
  communityLinks = defaultCommunityLinks,
  brandLinks = defaultBrandLinks,
  platformLinks,
  additionalColumns = [],
  byline = 'Built by Anthus AI Solutions',
  logo,
  theme,
}) {
  const mergedTheme = mergeTheme(theme);
  const site = getSiteById(siteId);
  const resolvedProductName = site?.label || productName;
  const resolvedPlatformLinks =
    platformLinks || getPlatformLinks({ excludeIds: [], includeNonLive: false });
  const brandPanelChildren = [];

  if (logo) {
    brandPanelChildren.push(
      React.createElement(
        'div',
        { key: 'logo', style: { marginBottom: '1rem' } },
        logo
      )
    );
  }

  brandPanelChildren.push(
    React.createElement(
      'span',
      { key: 'eyebrow', style: baseStyles.eyebrow(mergedTheme) },
      subtitle
    ),
    React.createElement(
      'h2',
      { key: 'heading', style: baseStyles.heading },
      resolvedProductName
    ),
    React.createElement(
      'p',
      { key: 'body', style: baseStyles.body },
      description
    )
  );

  const columns = [
    {
      title: 'Anthus',
      links: brandLinks,
      accent: false,
    },
    {
      title: 'Anthus Platform',
      links: resolvedPlatformLinks,
      accent: false,
    },
    ...additionalColumns,
  ];

  return React.createElement(
    'footer',
    { style: baseStyles.footer(mergedTheme) },
    React.createElement(
      'div',
      { style: baseStyles.shell(mergedTheme) },
      React.createElement(
        'div',
        { style: baseStyles.topLinks },
        communityLinks.map((link, index) =>
          React.createElement(
            React.Fragment,
            { key: `${link.label}-${link.href}` },
            React.createElement(
              'a',
              {
                href: link.href,
                style: baseStyles.link(mergedTheme),
                target: link.external === false ? undefined : '_blank',
                rel: link.external === false ? undefined : 'noreferrer',
              },
              link.label
            ),
            index < communityLinks.length - 1
              ? React.createElement('span', { 'aria-hidden': true }, '·')
              : null
          )
        )
      ),
      React.createElement(
        'div',
        { style: baseStyles.grid },
        React.createElement(
          'div',
          { style: baseStyles.accentPanel(mergedTheme) },
          ...brandPanelChildren
        ),
        ...columns.map(column =>
          React.createElement(
            'div',
            {
              key: column.title,
              style: column.accent ? baseStyles.accentPanel(mergedTheme) : baseStyles.panel(mergedTheme),
            },
            React.createElement(
              'h3',
              { style: { ...baseStyles.heading, fontSize: '1rem', marginBottom: '0.75rem' } },
              column.title
            ),
            React.createElement(
              'ul',
              { style: baseStyles.list },
              ...renderLinks(column.links || [], mergedTheme)
            )
          )
        )
      ),
      React.createElement(
        'div',
        { style: baseStyles.bottomRow(mergedTheme) },
        React.createElement('span', null, byline),
        React.createElement('span', null, 'Free and open-source Anthus platform components where applicable')
      )
    )
  );
}

export {
  canonicalSiteList,
  canonicalSites,
  getAnthusLinks,
  getPlatformLinks,
  getSiteById,
};

export default AnthusFooter;
