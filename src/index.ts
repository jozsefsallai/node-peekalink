import { AvailabilityAPI } from './api/availability';
import { PreviewAPI } from './api/preview';

import { RequestStrategy, RequestStrategyType } from './utils/requestStrategies';

import { LinkAvailability } from './typings/availability';
import { LinkPreview } from './typings/preview';

/**
 * Peekalink API client options
 * @typedef {object} PeekalinkClientOpts
 * @property {string} [apiKey] - The API key that you will use to authenticate
 * @property {string} [apiUrl] - The URL of the Peekalink API to which the requests will be sent.
 * @property {RequestStrategyType} [requestStrategy] - The request strategy that will be used for sending the requests. Defaults to "axios".
 */
interface PeekalinkClientOpts {
  apiUrl?: string;
  apiKey: string;
  requestStrategy?: RequestStrategyType;
}

/**
 * @api public
 * JavaScript API client for Peekalink
 */
class Client {
  // The URL of the Peekalink API
  public readonly apiUrl: string;

  // The API key used to authorize the requests
  public apiKey: string;

  // The request strategy that will be used to send the requests
  public readonly requestStrategy: RequestStrategyType;

  /**
   * @constructor
   * @param {PeekalinkClientOpts} [opts] - The options of the client.
   */
  constructor(opts: PeekalinkClientOpts) {
    this.apiUrl = opts.apiUrl || 'https://api.peekalink.io';
    this.apiKey = opts.apiKey;
    this.requestStrategy = opts.requestStrategy || 'axios';
  }

  /**
   * Changes the API key of the client
   * @param {string} [key] - The new API key
   */
  updateApiKey(key: string) {
    this.apiKey = key;
  }

  /**
   * Promises to return a link preview for a given URL
   * @param {string} [url] - The URL for which you want link preview data
   * @returns {Promise<LinkPreview>} - The link preview data
   */
  preview(url: string): Promise<LinkPreview> {
    const api = new PreviewAPI({ client: this, endpoint: '/' });
    return api.fetch(url);
  }

  /**
   * Promises to return availability data of a given URL
   * @param {string} [url] - The URL that you want to check the availability of
   * @returns {Promise<LinkAvailability>} - Link availability data
   */
  isAvailable(url: string): Promise<LinkAvailability> {
    const api = new AvailabilityAPI({ client: this, endpoint: '/is-available' });
    return api.fetch(url);
  }
}

export {
  Client,
  RequestStrategy
};
