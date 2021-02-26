import { expect } from 'chai';

import { Client } from '../../src';
import { PreviewAPI } from '../../src/api/preview';
import { APIError } from '../../src/utils/errors/APIError';
import * as fixtures from '../fixtures';

describe('PreviewAPI', function () {
  beforeEach(function () {
    this.client = new Client({
      apiUrl: 'http://peekalink.test',
      apiKey: 'my-api-key'
    });

    this.preview = new PreviewAPI({ client: this.client, endpoint: '/' });
  });

  describe('#fetch', function () {
    it('should return a valid response', function () {
      return expect(this.preview.fetch('https://joe.peekalink/cool-article'))
        .to.eventually.deep.equal(fixtures.preview.genericLinkPreviewFixture);
    });

    it('should return details for youtube links', function () {
      return expect(this.preview.fetch('https://joe.peekalink/cool-article'))
        .to.eventually.have.property('details');
    });

    it('should eventually throw an APIError', function () {
      return expect(this.preview.fetch('https://bad-link.oof'))
        .to.be.rejectedWith(APIError, /code: 413/);
    });
  });
});
