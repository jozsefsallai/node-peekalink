import { expect } from 'chai';

import { Client } from '../../src';
import { AvailabilityAPI } from '../../src/api/availability';
import * as fixtures from '../fixtures';

describe('AvailabilityAPI', function () {
  beforeEach(function () {
    this.client = new Client({
      apiUrl: 'http://peekalink.test',
      apiKey: 'my-api-key'
    });

    this.preview = new AvailabilityAPI({ client: this.client, endpoint: '/is-available/' });
  });

  describe('#fetch', function () {
    it('should return a valid response for available URLs', function () {
      return expect(this.preview.fetch('https://hi.joe'))
        .to.eventually.deep.equal(fixtures.availability.availableFixture);
    });

    it('should return a valid response for unavailable URLs', function () {
      return expect(this.preview.fetch('https://hi.notjoe'))
        .to.eventually.deep.equal(fixtures.availability.unavailableFixture);
    });
  });
});
