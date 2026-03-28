import React from 'react';

const pageStyles = {
  minHeight: '100vh',
  background: '#f4f1fb',
  color: '#201b2e',
  fontFamily:
    'Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif',
};

export const decorators = [
  Story => (
    <div style={pageStyles}>
      <div style={{ paddingTop: '2rem' }}>
        <Story />
      </div>
    </div>
  ),
];

export const parameters = {
  layout: 'fullscreen',
  controls: {
    expanded: true,
  },
};
