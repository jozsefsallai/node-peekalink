import { Client } from '..';
import { APIResponse } from './APIResponse';
import { APIError } from './errors/APIError';
import { getRequestStrategy, IRequestStrategy } from './requestStrategies';

interface RequestOpts {
  client: Client;
  endpoint: string;
}

interface RequestHeaders {
  Accept: string;
  'Content-Type': string;
  'X-API-Key': string;
}

class APIRequest {
  protected client: Client;
  private endpoint: string;

  protected api: IRequestStrategy;

  constructor(opts: RequestOpts) {
    this.client = opts.client;
    this.endpoint = opts.endpoint;
    this.api = getRequestStrategy(this.client.requestStrategy);
  }

  private get headers(): RequestHeaders {
    return {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      'X-API-Key': this.client.apiKey
    };
  }

  private get url(): string {
    return `${this.client.apiUrl}${this.endpoint}`;
  }

  private handleResponse<T>(res: APIResponse<T>): T {
    if (!res.ok) {
      throw new APIError('Failed to fetch the requested endpoint.', res.status || 500);
    }

    return res.data();
  }

  protected get<T>(): Promise<T> {
    return this.api.get<T>(this.url, { headers: this.headers })
      .then(this.handleResponse);
  }

  protected post<T>(payload: object): Promise<T> {
    return this.api.post<T>(this.url, payload, { headers: this.headers })
      .then(this.handleResponse);
  }

  protected put<T>(payload: object): Promise<T> {
    return this.api.put<T>(this.url, payload, { headers: this.headers })
      .then(this.handleResponse);
  }

  protected patch<T>(payload: object): Promise<T> {
    return this.api.patch<T>(this.url, payload, { headers: this.headers })
      .then(this.handleResponse);
  }

  protected delete<T>(): Promise<T> {
    return this.api.delete<T>(this.url, { headers: this.headers })
      .then(this.handleResponse);
  }
}

export {
  APIRequest,
  RequestOpts
};
