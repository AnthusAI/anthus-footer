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
    width: '84px',
    height: '84px',
    objectFit: 'contain',
  },
});

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
  platformLinks: getPlatformLinks({ excludeIds: siteId === 'anthus' ? [] : [siteId] }),
  byline: 'Built by Anthus AI Solutions',
  localSection: {
    eyebrow: siteId === 'anthus' ? 'Anthus AI Solutions' : '',
    title,
    description,
    linksTitle,
    links,
  },
  globalSection: {
    title: 'Anthus Platform',
    description:
      globalDescription ||
      'Shared platform links and company context for this product.',
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
      'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
    linksTitle: 'Anthus',
    links: [
      { label: 'About', href: 'https://anth.us/about', external: false },
      { label: 'AI Solutions', href: 'https://anth.us/ai-solutions', external: false },
      { label: 'Articles', href: 'https://anth.us/blog', external: false },
    ],
    globalDescription:
      'Anthus is the company behind the platform and the place where the broader platform story comes together.',
  }),
};

export const PlexusVariant = {
  args: buildArgs({
    siteId: 'plexus',
    title: 'Plexus',
    description:
      'Plexus is the Anthus MLOps platform and agent incubator for evaluating, deploying, and continuously improving AI agents.',
    linksTitle: 'Resources',
    links: [
      { label: 'Documentation', href: '/documentation', external: false },
      { label: 'Python SDK', href: 'https://anthusai.github.io/Plexus/' },
      { label: 'Change Log', href: 'https://github.com/AnthusAI/Plexus/blob/main/CHANGELOG.md' },
    ],
  }),
};

export const TactusVariant = {
  args: buildArgs({
    siteId: 'tactus',
    title: 'Tactus',
    description:
      'Tactus is a programming language and runtime for durable AI agent procedures with checkpointing, sandboxing, and built-in human-in-the-loop controls.',
    links: [
      { label: 'Getting Started', href: '/getting-started', external: false },
      { label: 'Features', href: '/features', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Tactus' },
    ],
  }),
};

export const KorporusVariant = {
  args: buildArgs({
    siteId: 'korporus',
    title: 'Korporus',
    description:
      'Korporus is the Anthus AI agent operating system: a federated shell for apps, procedures, and operational workflows.',
    linksTitle: 'Reference',
    links: [
      { label: 'Demo', href: '/demo', external: false },
      { label: 'Developers', href: '/developers', external: false },
      { label: 'Architecture', href: '/architecture', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Korporus' },
    ],
  }),
};

export const BiblicusVariant = {
  args: buildArgs({
    siteId: 'biblicus',
    title: 'Biblicus',
    description:
      'Biblicus is a pluggable corpus analysis platform for extraction, retrieval, and analysis across structured and unstructured sources.',
    linksTitle: 'Docs',
    links: [
      { label: 'Guides', href: '/docs/guides', external: false },
      { label: 'CLI', href: '/docs/cli', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Biblicus' },
    ],
  }),
};

export const BabulusVariant = {
  args: buildArgs({
    siteId: 'babulus',
    title: 'Babulus',
    description:
      'Babulus is an AI-agent-driven marketing automation system for turning VideoML workflows into repeatable video production pipelines.',
    links: [
      { label: 'Join waitlist', href: '/waitlist', external: false },
      { label: 'Docs', href: '/docs', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Babulus' },
    ],
  }),
};

export const KanbusVariant = {
  args: buildArgs({
    siteId: 'kanbus',
    title: 'Kanbus',
    description:
      'Kanbus orchestrates AI agent workloads with durable boards, workflow visibility, and operational guardrails for multi-agent delivery.',
    linksTitle: 'Reference',
    links: [
      { label: 'What Is This?', href: '/what-is-this', external: false },
      { label: 'Documentation', href: '/docs', external: false },
      { label: 'GitHub', href: 'https://github.com/AnthusAI/Kanbus' },
    ],
  }),
};

export const CaducusVariant = {
  args: buildArgs({
    siteId: 'caducus',
    title: 'Caducus',
    description:
      'Caducus provides health monitoring, logging, alerting, and level-zero operator support for Anthus platform services.',
    linksTitle: 'Product',
    links: [
      { label: 'Overview', href: 'https://caduc.us/', external: false },
      { label: 'Alerts', href: 'https://caduc.us/alerts', external: false },
      { label: 'Status', href: 'https://caduc.us/status', external: false },
    ],
  }),
};

export const AutomaticMode = {
  args: buildArgs({
    siteId: 'anthus',
    title: 'Anthus AI Solutions',
    description:
      'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
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
      'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
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
      'Anthus builds AI-native systems with durable procedures, operational guardrails, and reusable platform components.',
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
