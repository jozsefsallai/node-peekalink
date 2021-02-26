import { TwitterLinkDetails, YouTubeLinkDetails } from './details';

/**
 * An enum representing various content types that are supported by Peekalink
 * @enum {string}
 */
export enum ContentType {
  // HTML content type
  HTML = 'html',

  // Image content type
  IMAGE = 'image',

  // Video content type
  VIDEO = 'video',

  // GIF content type
  GIF = 'gif'
}

/**
 * Contains details about a link's image assets, such as the favicon or the og:image
 * @typedef {object} ImageAssetDetails
 * @property {string} [url] - The URL of the image
 * @property {number} [width] - The width of the image in pixels
 * @property {number} [height] - The height of the image in pixels
 */
interface ImageAssetDetails {
  url: string;
  width: number;
  height: number;
}

/**
 * Contains information about a link to be used as a link preview
 * @property {string} [url] - The URL of the link
 * @property {string} [domain] - The domain name of the link
 * @property {string} [lastUpdated] - The date on which the link was last updated on Peekalink
 * @property {string} [nextUpdate] - The date on which the link will be next updated on Peekalink
 * @property {ContentType} [contentType] - Specifies what kind of content the link returns
 * @property {string} [mimeType] - The MIME type of the link
 * @property {number} [size] - The size of the page in bytes
 * @property {boolean} [redirected] - Whether or not the link redirected to other links
 * @property {string} [redirectionUrl] - The last URL in the redirect chain. Only present if `redirected` is `true`
 * @property {number} [redirectionCount] - The number of redirects. Only present if `redirected` is `true`
 * @property {string[]} [redirectionTrail] - All the URLs that we got redirected through, in order. Only present if `redirected` is `true`
 * @property {string} [title] - The meta title of the web page
 * @property {string} [description] - The meta description of the web page
 * @property {boolean} [trackersDetected] - Whether or not Peekalink was able to find trackers on the page
 * @property {ImageAssetDetails} [icon] - Information about the website's favicon
 * @property {ImageAssetDetails} [image] - Information about the website's cover image
 * @property {YouTubeLinkDetails | TwitterLinkDetails} - Additional information about a link
 */
export interface LinkPreview {
  url: string;
  domain: string;
  lastUpdated: string;
  nextUpdate: string;
  contentType: ContentType;
  mimeType: string;
  size?: number;
  redirected: boolean;
  redirectionUrl?: string;
  redirectionCount?: number;
  redirectionTrail?: string[];
  title?: string;
  description?: string;
  name?: string;
  trackersDetected: boolean;
  icon?: ImageAssetDetails;
  image?: ImageAssetDetails;
  details?: YouTubeLinkDetails | TwitterLinkDetails;
}
