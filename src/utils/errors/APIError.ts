/**
 * Error codes corresponding to different link preview errors
 * @enum {number}
 */
enum LinkPreviewError {
  // The link has reached the redirection limit
  LinkMaxRedirectsError = 400,

  // The link is not publicly accessible
  LinkIsPrivateError = 403,

  // The link points to a non-existing page
  LinkDoesNotExist = 404,

  // The request to fetch information about the link has timed out
  LinkTimedOutHTTPError = 408,

  // The link returned an empty response
  LinkEmpty = 409,

  // There was an HTTP error while fetching the link preview data
  LinkPreviewHTTPError = 409,

  // The link is currently unreachable
  LinkUnreachable = 409,

  // The link contains too much data for the server to handle
  LinkContentIsTooLarge = 413
}

/**
 * @api public
 * An error class that makes API error management easier
 * @extends Error
 */
class APIError extends Error {
  // The error code (usually an HTTP status code)
  code: LinkPreviewError | number;

  /**
   * @constructor
   * Will create an error instance with a message and eventually an error code
   * @param {string} [message] - The error message
   * @param {number} [code] - The error code (usually an HTTP status code)
   */
  constructor(message: string, code: LinkPreviewError | number) {
    super(`${message} (code: ${code})`);
    this.name = 'APIError';
    this.code = code;
  }

  /**
   * Will return a JSON representation of the error
   * @returns {object}
   */
  toJSON() {
    return {
      name: this.name,
      message: this.message,
      code: this.code
    };
  }
}

export {
  APIError,
  LinkPreviewError
};
