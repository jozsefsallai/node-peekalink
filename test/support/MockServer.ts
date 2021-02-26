import nock from 'nock';
import * as fixtures from '../fixtures';

nock('http://peekalink.test')
  .post('/', { link: 'https://joe.peekalink/cool-article' }).reply(200, fixtures.preview.genericLinkPreviewFixture)
  .post('/', { link: 'https://joe.peekalink/cool-article' }).reply(200, fixtures.preview.youtubeLinkPreviewFixture)
  .post('/', { link: 'https://bad-link.oof' }).reply(413)
  .post('/is-available/', { link: 'https://hi.joe' }).reply(200, fixtures.availability.availableFixture)
  .post('/is-available/', { link: 'https://hi.notjoe' }).reply(200, fixtures.availability.unavailableFixture);
