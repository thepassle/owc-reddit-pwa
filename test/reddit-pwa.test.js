import { html, fixture, expect } from '@open-wc/testing';

import '../src/reddit-pwa';

describe('<reddit-pwa>', () => {
  it('has a default property header', async () => {
    const el = await fixture('<reddit-pwa></reddit-pwa>');
    expect(el.title).to.equal('open-wc');
  });

  it('allows property header to be overwritten', async () => {
    const el = await fixture(html`
      <reddit-pwa title="different"></reddit-pwa>
    `);
    expect(el.title).to.equal('different');
  });
});
