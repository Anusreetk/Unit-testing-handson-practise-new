import { html, fixture, expect } from '@open-wc/testing';
import Sinon from "sinon";
import { CustomerDetails } from  '../src/Customer/Customer-details.js';
var obj = new CustomerDetails();

describe('customer details', () => {
  it('is Accessible', async () => {
    expect(obj).to.be.accessible();
  });
  it('lion-input-amount',async()=>{
    console.log("customer input field should not empty");
    const el = await fixture(html`<customer-details> </customer-details>`);
    const inputElement = el.shadowRoot.querySelector('lion-input-amount');
    expect(inputElement.value).to.not.equal(" ");
   });
   it('_toEmidetails', () => {
    const Spy = Sinon.spy(obj, '_toEmidetails');
    obj._toEmidetails();
    Sinon.assert.calledOnce(Spy);
  });
});
