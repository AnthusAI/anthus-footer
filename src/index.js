import React from 'react';
import { canonicalSiteList, canonicalSites, getAnthusLinks, getPlatformLinks, getSiteById } from './sites.js';

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

export const defaultDarkTheme = {
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

export const defaultLightTheme = {
  footerBackground: '#f2eefb',
  panelBackground: '#ffffff',
  accentBackground: '#e8e0fb',
  textColor: '#271f3a',
  mutedTextColor: '#6d618b',
  linkColor: '#271f3a',
  borderRadius: '8px',
  maxWidth: '1120px',
  fontFamily: 'inherit',
};

const defaultGlobalDescription =
  'The Anthus Platform is the shared product stack behind Anthus delivery: reusable runtimes, tools, and product surfaces that work together across AI-native systems.';

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
  topLinks: theme => ({
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.75rem 1rem',
    justifyContent: 'center',
    marginBottom: '1rem',
    fontSize: '0.95rem',
    color: theme.mutedTextColor,
  }),
  link: theme => ({
    color: theme.linkColor,
    textDecoration: 'none',
    fontWeight: 600,
  }),
  contentGrid: {
    display: 'grid',
    gap: '2rem',
    marginTop: '1rem',
  },
  localIntro: {
    display: 'grid',
    gap: '0.75rem',
  },
  section: {
    display: 'grid',
    gap: '1rem',
    alignContent: 'start',
  },
  visualFrame: () => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '84px',
  }),
  eyebrow: theme => ({
    display: 'inline-block',
    marginBottom: '0.35rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.74rem',
    fontWeight: 700,
    color: theme.mutedTextColor,
  }),
  title: {
    margin: 0,
    fontSize: '1.35rem',
    lineHeight: 1.2,
  },
  description: theme => ({
    margin: 0,
    lineHeight: 1.65,
    color: theme.mutedTextColor,
  }),
  columns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '1rem 2rem',
  },
  platformIntro: {
    display: 'grid',
    gridTemplateColumns: 'minmax(84px, auto) minmax(0, 1fr)',
    gap: '1rem',
    alignItems: 'center',
  },
  platformGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem 1.5rem',
  },
  platformItem: {
    display: 'grid',
    gap: '0.35rem',
    alignContent: 'start',
  },
  columnTitle: theme => ({
    margin: '0 0 0.5rem',
    fontSize: '0.94rem',
    color: theme.mutedTextColor,
    fontWeight: 700,
  }),
  itemLink: theme => ({
    ...baseStyles.link(theme),
    fontSize: '1rem',
    fontWeight: 600,
  }),
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '0.35rem',
  },
  helperText: theme => ({
    margin: '0 0 0.75rem',
    lineHeight: 1.6,
    color: theme.mutedTextColor,
  }),
  bottomRow: theme => ({
    marginTop: '1rem',
    color: theme.mutedTextColor,
    fontSize: '0.9rem',
    display: 'flex',
    flexWrap: 'wrap',
    gap: '0.5rem 1rem',
    justifyContent: 'space-between',
    alignItems: 'center',
  }),
};

const platformSiteIds = new Set(['plexus', 'tactus', 'korporus', 'biblicus', 'babulus', 'kanbus', 'caducus']);

function useResolvedMode(mode) {
  const getInitialMode = () => {
    if (mode === 'light' || mode === 'dark') {
      return mode;
    }
    if (typeof window !== 'undefined' && window.matchMedia) {
      return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    }
    return 'dark';
  };

  const [resolvedMode, setResolvedMode] = React.useState(getInitialMode);

  React.useEffect(() => {
    if (mode === 'light' || mode === 'dark') {
      setResolvedMode(mode);
      return undefined;
    }

    if (typeof window === 'undefined' || !window.matchMedia) {
      setResolvedMode('dark');
      return undefined;
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const syncMode = () => setResolvedMode(mediaQuery.matches ? 'dark' : 'light');

    syncMode();
    mediaQuery.addEventListener('change', syncMode);
    return () => mediaQuery.removeEventListener('change', syncMode);
  }, [mode]);

  return resolvedMode;
}

const mergeTheme = (mode, theme) => ({
  ...(mode === 'light' ? defaultLightTheme : defaultDarkTheme),
  ...(theme || {}),
});

const renderLinks = (links, theme) =>
  links.map(link =>
    React.createElement(
      'li',
      { key: `${link.label}-${link.href}` },
      React.createElement(
        'a',
        {
          href: link.href,
          style: {
            ...baseStyles.link(theme),
            fontWeight: 500,
          },
          target: link.external === false ? undefined : '_blank',
          rel: link.external === false ? undefined : 'noreferrer',
        },
        link.label
      )
    )
  );

const renderSectionColumns = (columns, theme) =>
  columns.map(column =>
    React.createElement(
      'div',
      { key: column.title },
      React.createElement(
        'h3',
        { style: baseStyles.columnTitle(theme) },
        column.title
      ),
      column.description
        ? React.createElement('p', { style: baseStyles.helperText(theme) }, column.description)
        : null,
      React.createElement('ul', { style: baseStyles.list }, ...renderLinks(column.links || [], theme))
    )
  );

const renderPlatformItems = (items, theme) =>
  items.map(item =>
    React.createElement(
      'div',
      { key: item.id || item.label, style: baseStyles.platformItem },
      React.createElement(
        'a',
        {
          href: item.href,
          style: baseStyles.itemLink(theme),
          target: item.external === false ? undefined : '_blank',
          rel: item.external === false ? undefined : 'noreferrer',
        },
        item.label
      ),
      item.description
        ? React.createElement('p', { style: baseStyles.helperText(theme) }, item.description)
        : null
    )
  );

export function AnthusFooter({
  siteId = 'anthus',
  mode = 'dark',
  productName = 'Anthus AI Solutions',
  subtitle = '',
  description = 'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
  communityLinks = defaultCommunityLinks,
  brandLinks = defaultBrandLinks,
  platformLinks,
  additionalColumns = [],
  localSection,
  globalSection,
  byline = 'Built by Anthus AI Solutions',
  logo,
  theme,
}) {
  const resolvedMode = useResolvedMode(mode);
  const mergedTheme = mergeTheme(resolvedMode, theme);
  const site = getSiteById(siteId);
  const resolvedProductName = localSection?.title || site?.label || productName;
  const resolvedLocalEyebrow = localSection?.eyebrow || subtitle;
  const resolvedLocalDescription = localSection?.description || description;
  const resolvedLocalVisual = localSection?.visual || logo;
  const resolvedLocalLinks = localSection?.links || [];
  const resolvedLocalLinksTitle = localSection?.linksTitle || 'Product';
  const resolvedPlatformExclusions =
    platformSiteIds.has(siteId) && !platformLinks ? [siteId] : [];
  const resolvedPlatformLinks =
    platformLinks || getPlatformLinks({ excludeIds: resolvedPlatformExclusions, includeNonLive: false });
  const resolvedGlobalEyebrow = globalSection?.eyebrow || '';
  const resolvedGlobalTitle = globalSection?.title || 'Anthus Platform';
  const resolvedGlobalDescription = globalSection?.description || defaultGlobalDescription;
  const resolvedGlobalVisual = globalSection?.visual || null;
  const resolvedAnthusLinks = globalSection?.anthusLinks || brandLinks;
  const resolvedGlobalColumns = globalSection?.columns || [];
  const localColumns = [...additionalColumns];

  if (resolvedLocalLinks.length > 0) {
    localColumns.unshift({
      title: resolvedLocalLinksTitle,
      links: resolvedLocalLinks,
    });
  }

  const resolvedPlatformItems = resolvedPlatformLinks.map(link => ({
    ...link,
    description: link.description || canonicalSites[link.id]?.description,
  }));

  const globalColumns = [{ title: 'Anthus', links: resolvedAnthusLinks }, ...resolvedGlobalColumns];

  const localPanelChildren = [
    React.createElement(
      'div',
      { key: 'local-copy' },
      resolvedLocalEyebrow
        ? React.createElement(
            'span',
            { style: baseStyles.eyebrow(mergedTheme) },
            resolvedLocalEyebrow
          )
        : null,
      React.createElement('h2', { style: baseStyles.title }, resolvedProductName),
      React.createElement('p', { style: baseStyles.description(mergedTheme) }, resolvedLocalDescription)
    ),
  ];

  return React.createElement(
    'footer',
    { style: baseStyles.footer(mergedTheme), 'data-color-mode': resolvedMode },
    React.createElement(
      'div',
      { style: baseStyles.shell(mergedTheme) },
      React.createElement(
        'div',
        { style: baseStyles.topLinks(mergedTheme) },
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
        { style: baseStyles.contentGrid },
        React.createElement(
          'div',
          { style: baseStyles.section },
          React.createElement(
            'div',
            { style: { display: 'grid', gap: '1rem' } },
            React.createElement('div', { style: baseStyles.localIntro }, ...localPanelChildren)
          ),
          localColumns.length > 0
            ? React.createElement('div', { style: baseStyles.columns }, ...renderSectionColumns(localColumns, mergedTheme))
            : null
        ),
        React.createElement(
          'div',
          { style: baseStyles.section },
          resolvedGlobalEyebrow
            ? React.createElement(
                'span',
                { style: baseStyles.eyebrow(mergedTheme) },
                resolvedGlobalEyebrow
              )
            : null,
          React.createElement(
            'div',
            { style: baseStyles.platformIntro },
            resolvedGlobalVisual
              ? React.createElement(
                  'div',
                  { key: 'global-visual', style: baseStyles.visualFrame(mergedTheme) },
                  resolvedGlobalVisual
                )
              : null,
            React.createElement(
              'div',
              { key: 'global-copy' },
              React.createElement('h2', { style: baseStyles.title }, resolvedGlobalTitle),
              React.createElement('p', { style: baseStyles.description(mergedTheme) }, resolvedGlobalDescription)
            )
          ),
          globalColumns.length > 0
            ? React.createElement('div', { style: baseStyles.columns }, ...renderSectionColumns(globalColumns, mergedTheme))
            : null,
          React.createElement('div', { style: baseStyles.platformGrid }, ...renderPlatformItems(resolvedPlatformItems, mergedTheme))
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
