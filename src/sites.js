export const anthusContactUrl = 'https://anth.us/engage';

export const footerGroups = [
  { id: 'products', title: 'Products' },
  { id: 'open-source', title: 'Open source we use' },
  { id: 'research', title: 'Research' },
];

export const canonicalSites = {
  anthus: {
    id: 'anthus',
    label: 'Anthus',
    href: 'https://anth.us/',
    kind: 'company',
    description: 'Company, delivery model, and platform home.',
    status: 'live',
    showInFooter: true,
  },
  anthusSolutions: {
    id: 'anthus-solutions',
    label: 'AI Solutions',
    href: 'https://anth.us/ai-solutions',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  anthusPlatform: {
    id: 'anthus-platform',
    label: 'Anthus Platform',
    href: 'https://anth.us/platform',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  anthusArticles: {
    id: 'anthus-articles',
    label: 'Articles',
    href: 'https://anth.us/articles/',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  anthusAbout: {
    id: 'anthus-about',
    label: 'About',
    href: 'https://anth.us/about',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  anthusPosts: {
    id: 'anthus-posts',
    label: 'Posts',
    href: 'https://anth.us/posts',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  cyclotron: {
    id: 'cyclotron',
    label: 'Cyclotron',
    href: 'https://cyclotron.anth.us/',
    kind: 'product',
    footerGroup: 'products',
    description: 'Open-source, self-aligning decision engine.',
    status: 'live',
    showInFooter: true,
  },
  chatticus: {
    id: 'chatticus',
    label: 'Chatticus',
    href: 'https://chattic.us/',
    kind: 'product',
    footerGroup: 'products',
    description: 'A shared office for people and their AI agents.',
    status: 'live',
    showInFooter: true,
  },
  papyrus: {
    id: 'papyrus',
    label: 'Papyrus',
    href: 'https://p.apyr.us/',
    kind: 'product',
    footerGroup: 'products',
    description: 'Open-source newsroom that runs in your AWS account.',
    status: 'live',
    showInFooter: true,
  },
  auritus: {
    id: 'auritus',
    label: 'Auritus',
    href: 'https://aurit.us/',
    kind: 'product',
    footerGroup: 'products',
    description: 'Just-in-time narration for the web.',
    status: 'live',
    showInFooter: true,
  },
  primus: {
    id: 'primus',
    label: 'Primus',
    href: 'https://primus.anth.us/',
    kind: 'product',
    description: 'MLOps platform for agent evaluation and iteration.',
    status: 'held-back',
    showInFooter: false,
  },
  tactus: {
    id: 'tactus',
    label: 'Tactus',
    href: 'https://tactus.anth.us/',
    kind: 'platform',
    footerGroup: 'open-source',
    description: 'Durable runtime for agent procedures.',
    status: 'live',
    showInFooter: true,
  },
  korporus: {
    id: 'korporus',
    label: 'Korporus',
    href: 'https://korpor.us/',
    kind: 'platform',
    description: 'Agent operating system and federated shell.',
    status: 'held-back',
    showInFooter: false,
  },
  biblicus: {
    id: 'biblicus',
    label: 'Biblicus',
    href: 'https://github.com/AnthusAI/Biblicus',
    kind: 'platform',
    footerGroup: 'open-source',
    description: 'Corpus analysis for extraction and retrieval.',
    status: 'live',
    showInFooter: true,
  },
  babulus: {
    id: 'babulus',
    label: 'Babulus',
    href: 'https://babul.us/',
    kind: 'platform',
    description: 'Marketing automation built around VideoML.',
    status: 'held-back',
    showInFooter: false,
  },
  kanbus: {
    id: 'kanbus',
    label: 'Kanbus',
    href: 'https://kanb.us/',
    kind: 'platform',
    footerGroup: 'open-source',
    description: 'Durable multi-agent task management.',
    status: 'live',
    showInFooter: true,
  },
  caducus: {
    id: 'caducus',
    label: 'Caducus',
    href: 'https://caduc.us/',
    kind: 'platform',
    description: 'Monitoring, alerts, and operator support.',
    status: 'held-back',
    showInFooter: false,
  },
  hardDecisions: {
    id: 'hard-decisions',
    label: 'Hard Decisions',
    href: 'https://hard-decisions.anth.us/',
    kind: 'research',
    footerGroup: 'research',
    description: 'Independent benchmark of decision models.',
    status: 'live',
    showInFooter: true,
  },
  biasedDecisions: {
    id: 'biased-decisions',
    label: 'Biased Decisions',
    href: 'https://biased-decisions.anth.us/',
    kind: 'research',
    footerGroup: 'research',
    description: 'Leaderboard of demographic bias in decision models.',
    status: 'live',
    showInFooter: true,
  },
  virtuus: {
    id: 'virtuus',
    label: 'Virtuus',
    href: null,
    kind: 'platform',
    status: 'excluded-for-now',
    showInFooter: false,
  },
};

export const canonicalSiteList = Object.values(canonicalSites);

export const anthusLinkSiteIds = [
  'anthusSolutions',
  'anthusPlatform',
  'anthusArticles',
  'anthusAbout',
  'anthusPosts',
];

export const platformSiteIds = [
  'cyclotron',
  'chatticus',
  'papyrus',
  'auritus',
  'primus',
  'tactus',
  'kanbus',
  'biblicus',
  'hardDecisions',
  'biasedDecisions',
  'korporus',
  'babulus',
  'caducus',
  'virtuus',
];

export function getSiteById(id) {
  return canonicalSites[id] || null;
}

export function getAnthusLinks() {
  return anthusLinkSiteIds
    .map(id => canonicalSites[id])
    .filter(site => site?.href && site.showInFooter)
    .map(site => ({
      id: site.id,
      label: site.label,
      href: site.href,
      external: false,
    }));
}

function isVisibleInFooter(site) {
  return Boolean(site?.href && site.showInFooter && site.status === 'live');
}

export function getFooterLinkGroups({ excludeIds = [] } = {}) {
  const visibleSites = platformSiteIds
    .map(id => canonicalSites[id])
    .filter(site => isVisibleInFooter(site) && !excludeIds.includes(site.id));

  return footerGroups
    .map(group => ({
      ...group,
      links: visibleSites
        .filter(site => site.footerGroup === group.id)
        .map(site => ({
          id: site.id,
          label: site.label,
          href: site.href,
          description: site.description,
          status: site.status,
          external: false,
        })),
    }))
    .filter(group => group.links.length > 0);
}

export function getPlatformLinks({ excludeIds = [], includeNonLive = false } = {}) {
  return platformSiteIds
    .map(id => canonicalSites[id])
    .filter(site => {
      if (!site) {
        return false;
      }
      if (excludeIds.includes(site.id)) {
        return false;
      }
      if (!includeNonLive && !isVisibleInFooter(site)) {
        return false;
      }
      return true;
    })
    .map(site => ({
      id: site.id,
      label: site.label,
      href: site.href,
      description: site.description,
      status: site.status,
      external: false,
    }));
}
