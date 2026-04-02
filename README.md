# anthus-footer

Shared footer component and canonical site registry for Anthus platform marketing sites.

This package is intentionally small and portable:

- React-only
- No Gatsby-specific or Next-specific APIs
- No `StaticImage`, `next/link`, Tailwind dependency, or CSS module requirement
- Flat, solid-color footer styling that can be themed with simple props
- Centralized canonical URL registry for official public-facing Anthus platform sites

## Installation

From GitHub:

```bash
npm install github:AnthusAI/anthus-footer
```

Or in `package.json`:

```json
{
  "dependencies": {
    "anthus-footer": "github:AnthusAI/anthus-footer"
  }
}
```

## Usage

```js
import React from 'react';
import AnthusFooter, {
  defaultCommunityLinks,
  defaultBrandLinks,
  getPlatformLinks
} from 'anthus-footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <AnthusFooter
        siteId="plexus"
        productName="Plexus"
        subtitle="Part of the Anthus Platform"
        description="Plexus is the Anthus MLOps platform and agent incubator for evaluating, deploying, and improving AI agents."
        communityLinks={defaultCommunityLinks}
        brandLinks={defaultBrandLinks}
        platformLinks={getPlatformLinks()}
        additionalColumns={[
          {
            title: 'Product',
            links: [
              { label: 'Documentation', href: 'https://anthusai.github.io/Plexus/' },
              { label: 'GitHub', href: 'https://github.com/AnthusAI/Plexus' }
            ]
          }
        ]}
      />
    </>
  );
}
```

## API

### `AnthusFooter`

Props:

- `siteId`: Current product/site identifier such as `plexus`, `tactus`, `korporus`, or `anthus`
- `productName`: Footer brand heading
- `subtitle`: Small label above the heading
- `description`: Main product/company description
- `communityLinks`: Top-row links such as contact, GitHub, LinkedIn, Discord
- `brandLinks`: Default Anthus links shown in a standard column
- `platformLinks`: Platform project links, usually sourced from the canonical site registry
- `additionalColumns`: Additional footer columns in the form:

```js
[
  {
    title: 'Product',
    accent: false,
    links: [
      { label: 'Docs', href: 'https://example.com/docs' },
      { label: 'GitHub', href: 'https://github.com/example/project' },
      { label: 'Internal page', href: '/docs', external: false }
    ]
  }
]
```

- `byline`: Bottom-row text
- `logo`: Optional React node rendered above the brand copy
- `className`: Optional class on the root `<footer>` element
- `theme`: Optional style overrides

### Theme keys

```js
{
  background: 'var(--footer-bg)',
  footerBackground: '#27213a',
  groupedBackground: 'var(--region-alt)',
  panelBackground: '#332b49',
  accentBackground: '#3c3357',
  foreground: 'var(--foreground)',
  textColor: '#f7f4ff',
  mutedForeground: 'var(--muted-foreground)',
  mutedTextColor: '#cbbfef',
  link: 'var(--foreground)',
  linkColor: '#f7f4ff',
  borderRadius: '8px',
  maxWidth: '1120px',
  fontFamily: 'inherit',
  fontFamilyBody: 'var(--font-body)',
  fontFamilyHeading: 'var(--font-heading)'
}
```

Theme values can be plain colors or CSS variable references such as `var(--footer-bg)` or
`hsl(var(--background))`, depending on how the host site exposes its tokens.

## Exports

- `AnthusFooter`
- `defaultCommunityLinks`
- `defaultBrandLinks`
- `defaultPlatformLinks`
- `canonicalSites`
- `canonicalSiteList`
- `getSiteById`
- `getAnthusLinks`
- `getPlatformLinks`

## Canonical site registry

The package is also the source of truth for official public-facing Anthus platform URLs.

Current live canonical URLs:

- `Anthus Platform` → `https://anth.us/platform`
- `Plexus` → `https://plexus.anth.us/`
- `Tactus` → `https://tactus.anth.us/`
- `Korporus` → `https://korpor.us/`
- `Biblicus` → `https://anthusai.github.io/Biblicus/`
- `Babulus` → `https://babul.us/`
- `Kanbus` → `https://kanb.us/`
- `Caducus` → `https://caduc.us/`

Excluded for now:

- `Virtuus` is present in the registry but not shown in live footer link lists until it has an official canonical public URL.
- `VideoML` is intentionally excluded because it is an open standard rather than an Anthus platform-marketing property.

Example direct registry usage:

```js
import { canonicalSites, getPlatformLinks, getSiteById } from 'anthus-footer';

const plexus = getSiteById('plexus');
const livePlatformLinks = getPlatformLinks();
const canonicalPlatformUrl = canonicalSites.anthusPlatform.href;
```

## Adoption notes

- `Anth.us`: replace the current Gatsby footer with `AnthusFooter` and source Anthus + platform links from this package.
- `Plexus`: use the shared footer in the dashboard landing/footer surface, but keep product-specific documentation links in an extra column.
- `Tactus-web`: import the package directly as a Gatsby dependency, similar to existing GitHub-based shared dependencies in that repo.
- `Korpor.us` and `Kanb.us`: use the shared footer for the public site layouts and keep product-specific links in an additional column.
- `Biblicus`: keep the canonical URL in the registry immediately, but treat docs as a separate integration path. The docs footer is rendered from `docs/_templates/footer.html` and styled in `docs/_themes/biblicus_rtd/static/css/biblicus.css`, so alignment there should come from mirrored tokens/copy rather than mounting the React footer directly into Sphinx.
- `Babulus`: use the canonical `https://babul.us/` marketing site in the registry even if product-app surfaces remain separate.
- `Caducus`: now has a live canonical URL in the registry.
- `Virtuus`: intentionally omitted from live footer lists until the public URL is finalized.

## Notes

- Internal links can be marked with `external: false` to avoid `target="_blank"`.
- If a host site wants framework-native navigation, it can wrap this component or fork only the anchor rendering logic while keeping the data model the same.
- This package is designed to be the shared footer for Anthus platform marketing sites. VideoML is intentionally out of scope because it is an open standard, not a platform-marketing property.
