
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from "sinon";
import {Header} from '../src/header/Header.js';
var obj = new Header();
describe.skip('header', () => {
  it('is accessibile', async () => {
    expect(obj).to.be.accessible();
  });

  it.skip('localeChanged', async () => {
    const Spy = Sinon.spy(obj, 'localeChanged');
    const Btn = await obj.shadowRoot.querySelector('button[id="en-GB"]');
    Btn.simulate('click');
    Sinon.assert.calledOnce(Spy);
  });
});
