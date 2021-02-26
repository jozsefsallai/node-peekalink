import { expect } from 'chai';
import { Client } from '../src';

import MockRequestStrategy from './support/MockRequestStrategy';
import * as fixtures from './fixtures';

describe('Client', function () {
  describe('@constructor', function () {
    describe('apiUrl', function () {
      it('should default to api.peekalink.io', function () {
        const client = new Client({ apiKey: 'my-key' });
        return expect(client.apiUrl).to.equal('https://api.peekalink.io');
      });

      it('should set custom API url', function () {
        const client = new Client({ apiUrl: 'http://peekalink.test', apiKey: 'my-key' });
        return expect(client.apiUrl).to.equal('http://peekalink.test');
      });
    });

    describe('requestStrategy', function () {
      it('should default to axios', function () {
        const client = new Client({ apiKey: 'my-key' });
        return expect(client.requestStrategy).to.equal('axios');
      });
    });
  });

  describe('#updateApiKey', function () {
    it('should update the API key', function () {
      const client = new Client({ apiKey: 'first-key' });
      client.updateApiKey('new-api-key');
      return expect(client.apiKey).to.equal('new-api-key');
    });
  });

  describe('APIs', function () {
    beforeEach(function () {
      this.client = new Client({ apiKey: 'my-api-key', requestStrategy: MockRequestStrategy });
    });

    it('#preview', function () {
      const preview = this.client.preview('https://xyz.joe');
      return expect(preview)
        .to.eventually.deep.equal(fixtures.preview.genericLinkPreviewFixture);
    });

    it('#isAvailable', function () {
      const isAvailable = this.client.isAvailable('https://xyz.joe');
      return expect(isAvailable)
        .to.eventually.deep.equal(fixtures.availability.availableFixture);
    });
  });
});
