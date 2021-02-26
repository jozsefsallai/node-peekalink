/**
 * An enum holding different types of link details
 * @enum {string}
 */
export enum LinkDetailType {
  // The details are of a YouTube link
  YOUTUBE = 'youtube',

  // The details are of a Twitter link
  TWITTER = 'twitter'
}

/**
 * Additional details about a link
 * @typedef {object} LinkDetails
 * @property {LinkDetailType} [type] - The type of the link detail
 */
export interface LinkDetails {
  type: LinkDetailType;
}

/**
 * Additional details about a YouTube link
 * @typedef {object} YouTubeLinkDetails
 * @property {string} [videoId] - The ID of the YouTube video
 * @property {string} [duration] - The duration of the video in seconds
 * @property {number} [viewCount] - The number of views the video has
 * @property {number} [likeCount] - The number of likes the video has
 * @property {number} [dislikeCount] - The number of dislikes the video has
 * @property {number} [commentCount] - The number of comments the video has
 * @property {string} [publishedAt] - The date on which the video was published
 */
export interface YouTubeLinkDetails extends LinkDetails {
  videoId: string;
  duration: string;
  viewCount: number;
  likeCount: number;
  dislikeCount: number;
  commentCount: number;
  publishedAt: string;
}

/**
 * Additional details about a Twitter link
 * @typedef {object} TwitterLinkDetails
 * @property {string} [statusId] - A snowflake representing a tweet ID
 * @property {number} [retweetCount] - The number of retweets the tweet has
 * @property {number} [likesCount] - The number of likes the tweet has
 * @property {string} [publishedAt] - The date on which the tweet was created
 */
export interface TwitterLinkDetails extends LinkDetails {
  statusId: string;
  retweetCount: number;
  likesCount: number;
  publishedAt: string;
}
