import { html, fixture, expect } from '@open-wc/testing';
import '../src/LoanEMIDetails/LoanEMIDetails.js';
describe('LoanApplication', () => {
  it("is accessible",async()=>{
    const el = await fixture(html`<loanemi-details></loanemi-details>`);
    await expect(el).to.be.accessible();
  });
});
