export const canonicalSites = {
  anthus: {
    id: 'anthus',
    label: 'Anth.us',
    href: 'https://anth.us/',
    kind: 'company',
    description: 'Anthus AI Solutions, the company behind the platform and its delivery model.',
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
    href: 'https://anth.us/blog',
    kind: 'company-page',
    status: 'live',
    showInFooter: true,
  },
  plexus: {
    id: 'plexus',
    label: 'Plexus',
    href: 'https://plexus.anth.us/',
    kind: 'platform',
    description: 'MLOps platform and AI agent incubator for evaluation, deployment, and continuous improvement.',
    status: 'live',
    showInFooter: true,
  },
  tactus: {
    id: 'tactus',
    label: 'Tactus',
    href: 'https://tactus.anth.us/',
    kind: 'platform',
    description: 'Durable programming language and runtime for agent procedures and human-in-the-loop workflows.',
    status: 'live',
    showInFooter: true,
  },
  korporus: {
    id: 'korporus',
    label: 'Korporus',
    href: 'https://korpor.us/',
    kind: 'platform',
    description: 'AI agent operating system and federated shell for apps, procedures, and operational workflows.',
    status: 'live',
    showInFooter: true,
  },
  biblicus: {
    id: 'biblicus',
    label: 'Biblicus',
    href: 'https://anthusai.github.io/Biblicus/',
    kind: 'platform',
    description: 'Corpus analysis platform for extraction, retrieval, and analysis across structured and unstructured sources.',
    status: 'live',
    showInFooter: true,
  },
  babulus: {
    id: 'babulus',
    label: 'Babulus',
    href: 'https://babul.us/',
    kind: 'platform',
    description: 'AI-agent-driven marketing automation system built around VideoML production workflows.',
    status: 'live',
    showInFooter: true,
  },
  kanbus: {
    id: 'kanbus',
    label: 'Kanbus',
    href: 'https://kanb.us/',
    kind: 'platform',
    description: 'Project orchestration system for AI agent workloads, durable boards, and workflow visibility.',
    status: 'live',
    showInFooter: true,
  },
  caducus: {
    id: 'caducus',
    label: 'Caducus',
    href: 'https://caduc.us/',
    kind: 'platform',
    description: 'Health monitoring, logging, alerting, and operator support for Anthus platform services.',
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
  'anthus',
  'anthusSolutions',
  'anthusPlatform',
  'anthusArticles',
];

export const platformSiteIds = [
  'plexus',
  'tactus',
  'korporus',
  'biblicus',
  'babulus',
  'kanbus',
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
      if (!includeNonLive && (!site.href || !site.showInFooter || site.status !== 'live')) {
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
