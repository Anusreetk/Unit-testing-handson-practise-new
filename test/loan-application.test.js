import { html, fixture, expect } from '@open-wc/testing';
import  '../loan-application.js';

describe('LoanApplication', () => {
  it("is accessible",async()=>{
    const el = await fixture(html `<dash-board> </dash-board>`);
    await expect(el).to.be.accessible();
  });
});
