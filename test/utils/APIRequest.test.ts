import { expect } from 'chai';
import { APIRequest } from '../../src/utils/APIRequest';
import { Client } from '../../src';
import MockRequestStrategy from '../support/MockRequestStrategy';

describe('utils/APIRequest', function () {
  describe('methods', function () {
    beforeEach(function () {
      this.client = new Client({ apiKey: 'my-api-key', requestStrategy: MockRequestStrategy });
      this.request = new APIRequest({ client: this.client, endpoint: '/' });
    });

    [
      'get', 'post', 'put', 'patch', 'delete'
    ].forEach(method => {
      it(`should resolve for method ${method}`, function () {
        return expect(this.request[method]()).to.eventually.not.be.rejected;
      });
    });
  });
});
