
import { html, fixture, expect } from '@open-wc/testing';
import Sinon from "sinon";
import {LoanSuccess} from '../src/SuccessAndError/Success.js';
import {LoanError} from '../src/SuccessAndError/Error.js';
var obj1 = new LoanSuccess();
var obj2 = new LoanError();

describe('Success', () => {
  it('is Accessible', async () => {
    expect(obj1).to.be.accessible();
  });

  it(' success _toHome ', async () => {
    const Spy = Sinon.spy(obj1, '_toHome');
    obj1._toHome();
    Sinon.assert.calledOnce(Spy);
  });
});

describe('Error', () => {
  it('is Accessible', async () => {
    expect(obj2).to.be.accessible();
  });
  it('error _toHome', async () => {
    const Spy = Sinon.spy(obj2, '_toHome');
    obj2._toHome();
    Sinon.assert.calledOnce(Spy);
  });
});
