import nock from 'nock';
import * as fixtures from '../fixtures';

nock('http://peekalink.test')
  .post('/', { url: 'https://joe.peekalink/cool-article' }).reply(200, fixtures.preview.genericLinkPreviewFixture)
  .post('/', { url: 'https://joe.peekalink/cool-article' }).reply(200, fixtures.preview.youtubeLinkPreviewFixture)
  .post('/', { url: 'https://bad-link.oof' }).reply(413)
  .post('/is-available/', { url: 'https://hi.joe' }).reply(200, fixtures.availability.availableFixture)
  .post('/is-available/', { url: 'https://hi.notjoe' }).reply(200, fixtures.availability.unavailableFixture);
