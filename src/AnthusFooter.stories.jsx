import React from 'react';

import AnthusFooter, {
  defaultBrandLinks,
  defaultCommunityLinks,
  defaultDarkTheme,
  defaultLightTheme,
  getPlatformLinks,
} from './index.js';

const anthusRobot = React.createElement('img', {
  src: 'https://raw.githubusercontent.com/AnthusAI/Anth.us/main/src/images/icon.png',
  alt: 'Anthus robot avatar',
  style: {
    width: '48px',
    height: '48px',
    objectFit: 'contain',
  },
});

const anthusSiteTheme = {
  background: '#d03382',
  groupedBackground: '#9b165d',
  panelBackground: 'rgba(255, 255, 255, 0.14)',
  foreground: '#ffffff',
  mutedForeground: '#fedded',
  link: '#ffffff',
  fontFamilyBody:
    '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  fontFamilyHeading:
    '"Montserrat", -apple-system, BlinkMacSystemFont, "Segoe UI", Helvetica, Arial, sans-serif',
  maxWidth: '1280px',
};

const tactusSiteTheme = {
  background: '#fdfdfd',
  groupedBackground: '#ededed',
  panelBackground: '#ffffff',
  foreground: '#27272a',
  mutedForeground: '#52525b',
  link: '#27272a',
  fontFamilyBody:
    '"Source Sans 3", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  fontFamilyHeading:
    '"Source Sans 3", ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
  maxWidth: '62rem',
};

const kanbusSiteTheme = {
  background: '#fcfcfc',
  groupedBackground: '#f3f4f6',
  panelBackground: '#ffffff',
  foreground: '#111827',
  mutedForeground: '#6b7280',
  link: '#111827',
  fontFamilyBody: 'Inter, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontFamilyHeading: 'Inter, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  maxWidth: '1200px',
};

const korporusSiteTheme = {
  background: '#0f1115',
  groupedBackground: '#1a1f28',
  panelBackground: '#14171d',
  foreground: '#e7e9ee',
  mutedForeground: '#9ca3af',
  link: '#e7e9ee',
  fontFamilyBody: 'Inter, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  fontFamilyHeading: 'Inter, "SF Pro Text", "Helvetica Neue", Arial, sans-serif',
  maxWidth: '1200px',
};

const plexusSiteTheme = {
  background: 'hsl(300 20% 99%)',
  groupedBackground: 'hsl(300 7% 97%)',
  panelBackground: 'hsl(300 7% 97%)',
  foreground: 'hsl(280 25% 12%)',
  mutedForeground: 'hsl(280 5% 45%)',
  link: 'hsl(280 25% 12%)',
  fontFamilyBody: 'Inter, ui-sans-serif, system-ui, sans-serif',
  fontFamilyHeading: 'Inter, ui-sans-serif, system-ui, sans-serif',
  maxWidth: '1120px',
};

const babulusSiteTheme = {
  background: 'hsl(210 40% 98%)',
  groupedBackground: 'hsl(210 40% 93%)',
  panelBackground: 'hsl(210 40% 96.1%)',
  foreground: 'hsl(215 25% 20%)',
  mutedForeground: 'hsl(215.4 16.3% 46.9%)',
  link: 'hsl(215 25% 20%)',
  fontFamilyBody: 'var(--font-body), ui-sans-serif, system-ui, sans-serif',
  fontFamilyHeading: 'var(--font-heading), var(--font-body), ui-sans-serif, system-ui, sans-serif',
  maxWidth: '1120px',
};

const buildArgs = ({
  siteId,
  title,
  description,
  globalVisual = anthusRobot,
  linksTitle = 'Product',
  links = [],
  columns = [],
  mode = 'dark',
  globalDescription,
  theme,
}) => ({
  siteId,
  mode,
  communityLinks: defaultCommunityLinks,
  brandLinks: defaultBrandLinks,
  platformLinks: getPlatformLinks(),
  byline: 'Built by Anthus AI Solutions',
  localSection: {
    eyebrow: siteId === 'anthus' ? 'Anthus AI Solutions' : '',
    title,
    description,
    linksTitle,
    links,
  },
  globalSection: {
    eyebrow: siteId === 'anthus' ? null : 'PART OF',
    title: 'The Anthus Platform',
    description:
      globalDescription ||
      'Solve complex business problems with AI and ML using a proven, reusable technology stack. These interoperable building blocks give our solutions a stronger operational foundation: durable procedures, MLOps control loops, workload orchestration, knowledge systems, observability, and programmable media workflows.',
    visual: globalVisual,
    columns,
  },
  theme,
});

const meta = {
  title: 'AnthusFooter/Variants',
  component: AnthusFooter,
};

export default meta;

export const AnthusMainSite = {
  args: buildArgs({
    siteId: 'anthus',
    title: 'Anthus AI Solutions',
    description:
      'We build powerful, AI-native solutions backed by durable procedures, rigorous operational guardrails, and our suite of battle-tested, reusable platform components.',
    linksTitle: 'Anthus',
    links: [
      { label: 'About', href: 'https://anth.us/about', external: false },
      { label: 'AI Solutions', href: 'https://anth.us/ai-solutions', external: false },
      { label: 'Articles', href: 'https://anth.us/blog', external: false },
    ],
    globalDescription:
      'The Anthus Platform is the shared product stack behind Anthus delivery.',
    theme: anthusSiteTheme,
    mode: 'light',
  }),
};

export const PlexusVariant = {
  args: buildArgs({
    siteId: 'plexus',
    title: 'Plexus',
    description:
      'A comprehensive MLOps platform for managing, evaluating, and continuously improving AI agents through human-in-the-loop workflows and rigorous control loops.',
    linksTitle: 'Resources',
    links: [
      { label: 'Documentation', href: '/documentation', external: false },
      { label: 'Python SDK', href: 'https://anthusai.github.io/Plexus/' },
      { label: 'Change Log', href: 'https://github.com/AnthusAI/Plexus/blob/main/CHANGELOG.md' },
    ],
    theme: plexusSiteTheme,
    mode: 'light',
  }),
};

export const TactusVariant = {
  args: buildArgs({
    siteId: 'tactus',
    title: 'Tactus',
    description:
      'A durable execution environment for AI agent procedures, ensuring long-running processes, complex state management, and reliable fault tolerance without losing context.',
    links: [
      { label: 'Getting Started', href: '/getting-started', external: false },
      { label: 'Features', href: '/features', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Tactus' },
    ],
    theme: tactusSiteTheme,
    mode: 'light',
  }),
};

export const KorporusVariant = {
  args: buildArgs({
    siteId: 'korporus',
    title: 'Korporus',
    description:
      'A federated shell and standardized operating system designed to run generalized AI solutions, host operator applications, and manage platform deployments seamlessly.',
    linksTitle: 'Reference',
    links: [
      { label: 'Demo', href: '/demo', external: false },
      { label: 'Developers', href: '/developers', external: false },
      { label: 'Architecture', href: '/architecture', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Korporus' },
    ],
    theme: korporusSiteTheme,
    mode: 'dark',
  }),
};

export const BiblicusVariant = {
  args: buildArgs({
    siteId: 'biblicus',
    title: 'Biblicus',
    description:
      'Advanced corpus analysis and data ingestion for building highly accurate retrieval-backed automation, unlocking deep insights and structured knowledge from unstructured data.',
    linksTitle: 'Docs',
    links: [
      { label: 'Guides', href: '/docs/guides', external: false },
      { label: 'CLI', href: '/docs/cli', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Biblicus' },
    ],
    theme: tactusSiteTheme,
    mode: 'light',
  }),
};

export const BabulusVariant = {
  args: buildArgs({
    siteId: 'babulus',
    title: 'Babulus',
    description:
      'Next-generation marketing automation powered by VideoML. Generate targeted, programmable media pipelines and dynamic content campaigns driven by intelligent data analysis.',
    links: [
      { label: 'Join waitlist', href: '/waitlist', external: false },
      { label: 'Docs', href: '/docs', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Babulus' },
    ],
    theme: babulusSiteTheme,
    mode: 'light',
  }),
};

export const KanbusVariant = {
  args: buildArgs({
    siteId: 'kanbus',
    title: 'Kanbus',
    description:
      'Streamlined work orchestration and robust project management specifically tailored for planning, tracking, and delivering complex AI agent solutions and enterprise deployments.',
    linksTitle: 'Reference',
    links: [
      { label: 'What Is This?', href: '/what-is-this', external: false },
      { label: 'Documentation', href: '/docs', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Kanbus' },
    ],
    theme: kanbusSiteTheme,
    mode: 'light',
  }),
};

export const CaducusVariant = {
  args: buildArgs({
    siteId: 'caducus',
    title: 'Caducus',
    description:
      'Enterprise-grade monitoring and observability to provide operators with clear visibility, real-time alerts, and dependable support for production AI systems.',
    linksTitle: 'Product',
    links: [
      { label: 'Overview', href: 'https://caduc.us/', external: false },
      { label: 'Alerts', href: 'https://caduc.us/alerts', external: false },
      { label: 'Status', href: 'https://caduc.us/status', external: false },
    ],
    theme: kanbusSiteTheme,
    mode: 'light',
  }),
};

export const AutomaticMode = {
  args: buildArgs({
    siteId: 'anthus',
    title: 'Anthus AI Solutions',
    description:
      'We build powerful, AI-native solutions backed by durable procedures, rigorous operational guardrails, and our suite of battle-tested, reusable platform components.',
    linksTitle: 'Anthus',
    links: [
      { label: 'About', href: 'https://anth.us/about', external: false },
      { label: 'AI Solutions', href: 'https://anth.us/ai-solutions', external: false },
      { label: 'Articles', href: 'https://anth.us/blog', external: false },
    ],
    mode: 'auto',
    columns: [
      {
        title: 'Theme',
        description: 'This story follows the browser `prefers-color-scheme` setting automatically.',
        links: [
          { label: 'Dark theme tokens', href: '#', external: false },
          { label: 'Light theme tokens', href: '#', external: false },
        ],
      },
    ],
  }),
};

export const LightMode = {
  args: buildArgs({
    siteId: 'anthus',
    title: 'Anthus AI Solutions',
    description:
      'We build powerful, AI-native solutions backed by durable procedures, rigorous operational guardrails, and our suite of battle-tested, reusable platform components.',
    linksTitle: 'Anthus',
    links: [
      { label: 'About', href: 'https://anth.us/about', external: false },
      { label: 'AI Solutions', href: 'https://anth.us/ai-solutions', external: false },
      { label: 'Articles', href: 'https://anth.us/blog', external: false },
    ],
    mode: 'light',
    theme: {
      ...defaultLightTheme,
    },
  }),
  parameters: {
    backgrounds: {
      default: 'light canvas',
      values: [{ name: 'light canvas', value: '#f4f1fb' }],
    },
  },
};

export const DarkMode = {
  args: buildArgs({
    siteId: 'anthus',
    title: 'Anthus AI Solutions',
    description:
      'We build powerful, AI-native solutions backed by durable procedures, rigorous operational guardrails, and our suite of battle-tested, reusable platform components.',
    linksTitle: 'Anthus',
    links: [
      { label: 'About', href: 'https://anth.us/about', external: false },
      { label: 'AI Solutions', href: 'https://anth.us/ai-solutions', external: false },
      { label: 'Articles', href: 'https://anth.us/blog', external: false },
    ],
    mode: 'dark',
    theme: {
      ...defaultDarkTheme,
    },
  }),
};
