import { ContentType, LinkPreview } from '../../src/typings/preview';
import { LinkDetailType } from '../../src/typings/details';

const genericLinkPreviewFixture: LinkPreview = {
  url: 'https://joe.peekalink/cool-article',
  domain: 'joe.peekalink',
  lastUpdated: '2020-11-25T21:33:44.647884Z',
  nextUpdate: '2020-11-26T21:33:39.594108Z',
  contentType: ContentType.HTML,
  mimeType: 'text/html',
  redirected: false,
  title: 'How Bitcoin Works',
  description: 'I have no idea actually, please help the dumb teamate',
  trackersDetected: true,
  icon: {
    url: 'https://joe.peekalink/favicon.png',
    width: 64,
    height: 64
  },
  image: {
    url: 'https://joe.peekalink/static/guraundo-paundo.png',
    width: 1024,
    height: 400
  }
};

const youtubeLinkPreviewFixture: LinkPreview = {
  ...genericLinkPreviewFixture,
  details: {
    type: LinkDetailType.YOUTUBE,
    videoId: 'LJ9vkt7BHYI',
    duration: '902.0',
    viewCount: 200000,
    likeCount: 4000,
    dislikeCount: 60,
    commentCount: 400,
    publishedAt: '2012-04-28T23:44:44Z'
  }
};

export {
  genericLinkPreviewFixture,
  youtubeLinkPreviewFixture
};
