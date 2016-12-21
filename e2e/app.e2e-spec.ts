import { browser, element, by } from 'protractor';
import * as chai from 'chai';
import * as chaiAsPromised from 'chai-as-promised';
chai.use(chaiAsPromised);
var expect = chai.expect;


describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello from Angular App with Webpack';

  beforeEach(function () {
    browser.get('');
  });

  it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).to.eventually.equal(expectedMsg);
  });

});
