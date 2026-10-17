import assert from 'node:assert/strict';
import test from 'node:test';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

import AnthusFooter, {
  anthusContactUrl,
  defaultCommunityLinks,
  getFooterLinkGroups,
  getPlatformLinks,
} from '../src/index.js';

const retiredOrHeldBackLabels = ['Plexus', 'Korporus', 'Babulus', 'Caducus', 'Virtuus', 'Discord'];

test('every site sends the contact link to the one shared contact URL', () => {
  const contactLink = defaultCommunityLinks.find(link => link.label === 'Contact us');
  assert.equal(contactLink.href, anthusContactUrl);
  assert.equal(anthusContactUrl, 'https://anth.us/engage');
});

test('footer links are grouped by role in a fixed order', () => {
  const groupTitles = getFooterLinkGroups().map(group => group.title);
  assert.deepEqual(groupTitles, ['Products', 'Open source we use', 'Research']);
});

test('retired and held-back sites stay out of the footer', () => {
  const renderedFooterMarkup = renderToStaticMarkup(React.createElement(AnthusFooter, { siteId: 'cyclotron' }));
  for (const label of retiredOrHeldBackLabels) {
    assert.ok(!renderedFooterMarkup.includes(`>${label}<`), `${label} should not render`);
  }
  for (const link of getPlatformLinks()) {
    assert.ok(!retiredOrHeldBackLabels.includes(link.label), `${link.label} should not be listed`);
  }
});

test('the default footer renders every grouped link and the shared contact URL', () => {
  const renderedFooterMarkup = renderToStaticMarkup(React.createElement(AnthusFooter, { siteId: 'chatticus' }));
  for (const group of getFooterLinkGroups()) {
    assert.ok(renderedFooterMarkup.includes(`>${group.title}<`));
    for (const link of group.links) {
      assert.ok(renderedFooterMarkup.includes(`href="${link.href}"`), `${link.label} link missing`);
    }
  }
  assert.ok(renderedFooterMarkup.includes(`href="${anthusContactUrl}"`));
  assert.ok(!renderedFooterMarkup.includes('docs.google.com/forms'));
});

test('the component entry is marked as a client module so server-rendered Next pages can import it', async () => {
  const { readFile } = await import('node:fs/promises');
  const componentEntrySource = await readFile(new URL('../src/index.js', import.meta.url), 'utf8');
  assert.ok(componentEntrySource.startsWith("'use client';"));
});
