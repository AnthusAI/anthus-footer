import React from 'react';
import { canonicalSiteList, canonicalSites, getAnthusLinks, getPlatformLinks, getSiteById } from './sites.js';

export const defaultCommunityLinks = [
  {
    label: 'Contact us',
    href: 'https://docs.google.com/forms/d/e/1FAIpQLSdWlt4KpwPSBHzg3o8fikHcfrzxo5rCcV-0-zDt815NZ1tcyg/viewform?usp=sf_link',
    description: 'How can we help?',
  },
  {
    label: 'GitHub',
    href: 'https://github.com/AnthusAI',
    description: 'Browse the code.',
  },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ryanalynporter/',
    description: 'Company updates.',
  },
  {
    label: 'Discord',
    href: 'https://discord.gg/uStyWraJ2M',
    description: 'Join the chat.',
  },
];

export const defaultBrandLinks = getAnthusLinks();
export const defaultPlatformLinks = getPlatformLinks();

export const defaultDarkTheme = {
  background: '#27213a',
  footerBackground: '#27213a',
  groupedBackground: '#3c3357',
  panelBackground: '#332b49',
  accentBackground: '#3c3357',
  foreground: '#f7f4ff',
  textColor: '#f7f4ff',
  mutedForeground: '#cbbfef',
  mutedTextColor: '#cbbfef',
  link: '#f7f4ff',
  linkColor: '#f7f4ff',
  borderRadius: '8px',
  maxWidth: '1120px',
  fontFamily: 'inherit',
  fontFamilyBody: 'inherit',
  fontFamilyHeading: 'inherit',
};

export const defaultLightTheme = {
  background: '#f2eefb',
  footerBackground: '#f2eefb',
  groupedBackground: '#e8e0fb',
  panelBackground: '#ffffff',
  accentBackground: '#e8e0fb',
  foreground: '#271f3a',
  textColor: '#271f3a',
  mutedForeground: '#6d618b',
  mutedTextColor: '#6d618b',
  link: '#271f3a',
  linkColor: '#271f3a',
  borderRadius: '8px',
  maxWidth: '1120px',
  fontFamily: 'inherit',
  fontFamilyBody: 'inherit',
  fontFamilyHeading: 'inherit',
};

const defaultGlobalDescription =
  'This product is part of the Anthus Platform: shared runtimes, tools, and product surfaces for AI-native systems.';

const baseStyles = {
  footer: theme => ({
    width: '100%',
    backgroundColor: theme.footerBackground,
    color: theme.textColor,
    padding: '1.5rem 0',
    fontFamily: theme.fontFamilyBody,
  }),
  shell: theme => ({
    maxWidth: theme.maxWidth,
    margin: '0 auto',
    padding: '0 1rem',
  }),
  link: theme => ({
    color: theme.linkColor,
    textDecoration: 'none',
    fontWeight: 400,
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
  localBody: {
    display: 'block',
  },
  localVisualFloat: {
    float: 'right',
    margin: '0 0 0.75rem 1rem',
    maxWidth: '64px',
  },
  section: {
    display: 'grid',
    gap: '1rem',
    alignContent: 'start',
  },
  groupedBand: theme => ({
    width: '100%',
    backgroundColor: theme.groupedBackground,
    marginTop: '2rem',
    padding: '1.25rem 0',
  }),
  groupedSection: {
    display: 'grid',
    gap: '1rem',
    alignContent: 'start',
  },
  visualFrame: theme => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '84px',
    padding: '0.25rem',
  }),
  eyebrow: theme => ({
    display: 'inline-block',
    marginBottom: '0.1rem',
    textTransform: 'uppercase',
    letterSpacing: '0.08em',
    fontSize: '0.68rem',
    fontWeight: 500,
    color: theme.mutedTextColor,
    fontFamily: theme.fontFamilyHeading,
  }),
  title: theme => ({
    margin: 0,
    fontSize: '1.12rem',
    lineHeight: 1.25,
    fontWeight: 400,
    fontFamily: theme.fontFamilyHeading,
  }),
  titleLink: theme => ({
    ...baseStyles.link(theme),
    color: theme.linkColor,
    fontWeight: 400,
  }),
  description: theme => ({
    margin: 0,
    fontSize: '0.92rem',
    lineHeight: 1.55,
    fontWeight: 300,
    color: theme.mutedTextColor,
  }),
  columns: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
    gap: '1rem 2rem',
  },
  localGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem 1.5rem',
    alignItems: 'start',
  },
  platformIntro: {
    display: 'grid',
    gridTemplateColumns: 'minmax(0, 1fr) minmax(48px, auto)',
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
  communityGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
    gap: '1rem 1.5rem',
    marginTop: '1.25rem',
  },
  communityItem: {
    display: 'grid',
    gap: '0.3rem',
    alignContent: 'start',
  },
  columnTitle: theme => ({
    margin: '0 0 0.5rem',
    fontSize: '0.82rem',
    color: theme.mutedTextColor,
    fontWeight: 500,
    fontFamily: theme.fontFamilyHeading,
  }),
  itemLink: theme => ({
    ...baseStyles.link(theme),
    fontSize: '0.92rem',
    fontWeight: 500,
  }),
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
    display: 'grid',
    gap: '0.35rem',
  },
  helperText: theme => ({
    margin: 0,
    fontSize: '0.84rem',
    lineHeight: 1.5,
    fontWeight: 300,
    color: theme.mutedTextColor,
  }),
  bottomRow: theme => ({
    marginTop: '1.5rem',
    color: theme.mutedTextColor,
    fontSize: '0.82rem',
    fontWeight: 300,
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

const normalizeTheme = theme => {
  const source = theme || {};

  return {
    ...source,
    footerBackground: source.background ?? source.footerBackground,
    groupedBackground: source.groupedBackground ?? source.accentBackground,
    panelBackground: source.panelBackground,
    textColor: source.foreground ?? source.textColor,
    mutedTextColor: source.mutedForeground ?? source.mutedTextColor,
    linkColor: source.link ?? source.linkColor ?? source.foreground ?? source.textColor,
    fontFamilyBody: source.fontFamilyBody ?? source.fontFamily ?? 'inherit',
    fontFamilyHeading:
      source.fontFamilyHeading ?? source.fontFamilyBody ?? source.fontFamily ?? 'inherit',
  };
};

const mergeTheme = (mode, theme) =>
  normalizeTheme({
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
            fontWeight: 400,
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
      column.titleHref
        ? React.createElement(
            'h3',
            { style: baseStyles.columnTitle(theme) },
            React.createElement(
              'a',
              {
                href: column.titleHref,
                style: {
                  ...baseStyles.link(theme),
                  fontWeight: 500,
                },
                target: column.titleExternal === false ? undefined : '_blank',
                rel: column.titleExternal === false ? undefined : 'noreferrer',
              },
              column.title
            )
          )
        : React.createElement(
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

const renderCommunityItems = (items, theme) =>
  items.map(item =>
    React.createElement(
      'div',
      { key: item.id || item.label, style: baseStyles.communityItem },
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
  className,
  productName = 'Anthus AI Solutions',
  subtitle = '',
  description = 'We build powerful, AI-native solutions backed by durable procedures, rigorous operational guardrails, and our suite of battle-tested, reusable platform components.',
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
  const resolvedProductTitleHref = localSection?.titleHref || null;
  const resolvedLocalEyebrow = localSection?.eyebrow || subtitle;
  const resolvedLocalDescription = localSection?.description || description;
  const resolvedLocalVisual = localSection?.visual || logo;
  const resolvedLocalLinks = localSection?.links || (siteId === 'anthus' ? brandLinks : []);
  const resolvedLocalLinksTitle =
    localSection?.linksTitle || (siteId === 'anthus' ? 'Anthus Platform' : 'Product');
  const resolvedLocalLinksTitleHref =
    localSection?.linksTitleHref ||
    (siteId === 'anthus' ? canonicalSites.anthusPlatform?.href : null);
  const resolvedPlatformLinks =
    platformLinks || getPlatformLinks({ includeNonLive: false });
  const resolvedGlobalEyebrow =
    globalSection?.eyebrow !== undefined
      ? globalSection.eyebrow
      : siteId === 'anthus'
      ? null
      : 'PART OF';
  const resolvedGlobalTitle = globalSection?.title || 'The Anthus Platform';
  const resolvedGlobalTitleHref =
    globalSection?.titleHref || canonicalSites['anthus-platform']?.href || 'https://anth.us/platform';
  const resolvedGlobalDescription = globalSection?.description || 'Solve complex business problems with AI and ML using a proven, reusable technology stack. These interoperable building blocks give our solutions a stronger operational foundation: durable procedures, MLOps control loops, workload orchestration, knowledge systems, observability, and programmable media workflows.';
  const resolvedGlobalVisual = globalSection?.visual || null;
  const resolvedGlobalColumns = globalSection?.columns || [];
  const localColumns = [...additionalColumns];

  if (resolvedLocalLinks.length > 0) {
    localColumns.unshift({
      title: resolvedLocalLinksTitle,
      titleHref: resolvedLocalLinksTitleHref,
      titleExternal: siteId === 'anthus' ? false : undefined,
      links: resolvedLocalLinks,
    });
  }

  const resolvedPlatformItems = resolvedPlatformLinks.map(link => ({
    ...link,
    description: link.description || canonicalSites[link.id]?.description,
  }));

  const globalColumns = [...resolvedGlobalColumns];

  const localPanelChildren = [
    React.createElement(
      'div',
      { key: 'local-copy', style: { display: 'grid', gap: '0.35rem' } },
      resolvedLocalEyebrow
        ? React.createElement(
            'span',
            { style: { ...baseStyles.eyebrow(mergedTheme), marginBottom: 0 } },
            resolvedLocalEyebrow
          )
        : null,
      React.createElement(
        'div',
        { style: baseStyles.localBody },
        resolvedLocalVisual
          ? React.createElement(
              'div',
              { key: 'local-visual', style: baseStyles.localVisualFloat },
              resolvedLocalVisual
            )
          : null,
        resolvedProductTitleHref
          ? React.createElement(
              'h2',
              { style: baseStyles.title(mergedTheme) },
              React.createElement(
                'a',
                {
                  href: resolvedProductTitleHref,
                  style: baseStyles.titleLink(mergedTheme),
                  target: localSection?.titleExternal === false ? undefined : '_blank',
                  rel: localSection?.titleExternal === false ? undefined : 'noreferrer',
                },
                resolvedProductName
              )
            )
          : React.createElement('h2', { style: baseStyles.title(mergedTheme) }, resolvedProductName),
        React.createElement('p', { style: baseStyles.description(mergedTheme) }, resolvedLocalDescription)
      )
    ),
  ];

  return React.createElement(
    'footer',
    { style: baseStyles.footer(mergedTheme), className, 'data-color-mode': resolvedMode },
    React.createElement(
      'div',
      { style: baseStyles.shell(mergedTheme) },
      React.createElement(
        'div',
        { style: baseStyles.section },
        React.createElement(
          'div',
          { style: baseStyles.localGrid },
          React.createElement('div', { style: baseStyles.localIntro }, ...localPanelChildren),
          ...renderSectionColumns(localColumns, mergedTheme)
        )
      )
    ),
    globalSection !== false ? React.createElement(
      'div',
      { style: baseStyles.groupedBand(mergedTheme) },
      React.createElement(
        'div',
        { style: baseStyles.shell(mergedTheme) },
        React.createElement(
          'div',
          { style: baseStyles.groupedSection },
          React.createElement(
            'div',
            { style: baseStyles.platformIntro },
            React.createElement(
              'div',
              { key: 'global-copy', style: { display: 'grid', gap: '0.35rem' } },
              resolvedGlobalEyebrow
                ? React.createElement(
                    'span',
                    { style: { ...baseStyles.eyebrow(mergedTheme), marginBottom: 0 } },
                    resolvedGlobalEyebrow
                  )
                : null,
              React.createElement(
                'h2',
                { className: "platformHeader", style: { ...baseStyles.title(mergedTheme), margin: 0 } },
                React.createElement(
                  'a',
                  {
                    href: resolvedGlobalTitleHref,
                    style: baseStyles.titleLink(mergedTheme),
                  },
                  resolvedGlobalTitle
                )
              ),
              React.createElement('p', { style: { ...baseStyles.description(mergedTheme), margin: 0 } }, resolvedGlobalDescription)
            ),
            resolvedGlobalVisual
              ? React.createElement(
                  'div',
                  { key: 'global-visual', style: baseStyles.visualFrame(mergedTheme) },
                  resolvedGlobalVisual
                )
              : null
          ),
          globalColumns.length > 0
            ? React.createElement('div', { style: baseStyles.columns }, ...renderSectionColumns(globalColumns, mergedTheme))
            : null,
          React.createElement('div', { style: baseStyles.platformGrid }, ...renderPlatformItems(resolvedPlatformItems, mergedTheme)),
          React.createElement(
            'div',
            { style: baseStyles.bottomRow(mergedTheme) },
            React.createElement('span', null, 'Free and open-source software'),
            React.createElement('span', null, byline)
          )
        )
      )
    ) : null,
    React.createElement(
      'div',
      { style: baseStyles.shell(mergedTheme) },
      React.createElement(
        'div',
        { style: baseStyles.communityGrid },
        ...renderCommunityItems(communityLinks, mergedTheme)
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
