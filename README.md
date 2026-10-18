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
import AnthusFooter from 'anthus-footer';

export default function Layout({ children }) {
  return (
    <>
      <main>{children}</main>
      <AnthusFooter
        siteId="primus"
        description="Primus is the Anthus MLOps platform for evaluating, deploying, and improving AI agents."
        additionalColumns={[
          {
            title: 'Product',
            links: [
              { label: 'Documentation', href: 'https://anthusai.github.io/Primus/' },
              { label: 'GitHub', href: 'https://github.com/AnthusAI/Primus' }
            ]
          }
        ]}
      />
    </>
  );
}
```

Leave `communityLinks` and `platformLinks` unset so every site renders the same contact link and the same grouped registry. Pass only what is local to the site: its description, logo, product columns, and theme.

Sites track the `main` branch so a rebuild picks up the current footer:

```json
"anthus-footer": "github:AnthusAI/anthus-footer#main"
```

A lockfile still records the commit it installed, so run `npm update anthus-footer` as part of the site's build, right after the install step, to move it to the current `main`. Because every site builds from `main`, CI runs `npm test` and the Storybook build on every pull request and push, and a change should only land when both pass. Tags such as `v0.2.0` mark releases for anyone who wants to pin one.

## API

### `AnthusFooter`

Props:

- `siteId`: Current product/site identifier such as `primus`, `tactus`, `korporus`, or `anthus`
- `productName`: Footer brand heading
- `subtitle`: Small label above the heading
- `description`: Main product/company description
- `communityLinks`: Bottom-row links; defaults to the shared contact URL, GitHub and LinkedIn
- `brandLinks`: Default Anthus links shown in a standard column
- `platformLinks`: Legacy flat list of registry links. Leave it unset to render the registry grouped by role (Products, Open source we use, Research)
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

- `byline`: Bottom-row text, `© Anthus AI Solutions` by default
- `bylineHref`: Where the byline links, `https://anth.us/` by default
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
- `anthusContactUrl`
- `defaultCommunityLinks`
- `defaultBrandLinks`
- `defaultPlatformLinks`
- `footerGroups`
- `canonicalSites`
- `canonicalSiteList`
- `getSiteById`
- `getAnthusLinks`
- `getFooterLinkGroups`
- `getPlatformLinks`

## Canonical site registry

The package is the source of truth for official public-facing Anthus URLs, and for the one contact URL every site uses.

Contact: `https://anth.us/engage`. When Prospectus exposes a public intake form, change `anthusContactUrl` here and every site follows on its next build.

Shown in the footer, grouped by role:

- Products: Cyclotron (`https://cyclotron.anth.us/`), Chatticus (`https://chattic.us/`), Papyrus (`https://p.apyr.us/`), Auritus (`https://aurit.us/`)
- Open source we use: Tactus (`https://tactus.anth.us/`), Kanbus (`https://kanb.us/`), Biblicus (`https://github.com/AnthusAI/Biblicus`)
- Research: Hard Decisions (`https://hard-decisions.anth.us/`), Biased Decisions (`https://biased-decisions.anth.us/`)

Kept in the registry but held back from the footer until they are on a buyer's path: Primus, Korporus, Babulus, Caducus, Virtuus. Plexus is retired; its domain redirects to Primus. VideoML is an open standard rather than an Anthus marketing property and stays out.

Example direct registry usage:

```js
import { anthusContactUrl, getFooterLinkGroups, getSiteById } from 'anthus-footer';

const primus = getSiteById('primus');
const groupedFooterLinks = getFooterLinkGroups();
```

## Adoption notes

- `Anth.us`: replace the current Gatsby footer with `AnthusFooter` and source Anthus + platform links from this package.
- `Primus`: use the shared footer in the dashboard landing/footer surface, but keep product-specific documentation links in an extra column.
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
