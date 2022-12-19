import { html, fixture, expect } from "@open-wc/testing";
import Sinon from "sinon";
import { BasicDetails } from "../src/LoanBasicDetails/BasicDetails.js";
var obj = new BasicDetails();

describe("Basic details", () => {
  it('is Accessible', async () => {
    expect(obj).to.be.accessible();
  });

  it("Lion input text field", async () => {
    console.log("input field type");
    const el = await fixture(html`<basic-details> </basic-details>`);
    const inputElement = el.shadowRoot.querySelector("lion-input");
    expect(inputElement.type).to.equal("text");
  });

  it("lion-input-amount", async () => {
    console.log("input field value");
    const el = await fixture(html`<basic-details> </basic-details>`);
    const inputElement = el.shadowRoot.querySelector("lion-input-amount");
    expect(inputElement.value).to.equal("10,000.00");
  });

  it("lion-input-amount", async () => {
    console.log("input field should not empty");
    const el = await fixture(html`<basic-details> </basic-details>`);
    const inputElement = el.shadowRoot.querySelector("lion-input-amount");
    expect(inputElement.value).to.not.equal("");
  });

  it('Should call _numToWord() function', () => {
    let  el;
    const spy = Sinon.spy(el, '_numToWord');
    el._numToWord();
    el.shadowRoot.querySelector('.amount').value = 10000;
    expect(spy).to.have.called
    expect(el.shadowRoot.querySelector('#word').innerHTML.trim()).to.equal('ten thousand');
    spy.restore();
  });

  it("_toDashboard function", async () => {
    const Spy = Sinon.spy(obj, "_toDashboard");
    obj._toDashboard();
    Sinon.assert.calledOnce(Spy);
    console.log("_toDashboard called once");
  });

  it(" _captureDetails", async () => {
    const el = await fixture(html`<basic-details> </basic-details>`)
    const myspy = Sinon.spy(obj, "_captureDetails");
    el.shadowRoot.querySelector('.type').value = 'Home Loan';
    el.shadowRoot.querySelector('.amount').value = 10000;
    el.shadowRoot.querySelector('.period').value = 6;
    obj._captureDetails();
    
    expect(myspy.calledOnce).to.be.true;
  });
});
