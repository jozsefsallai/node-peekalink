import { APIResponse } from '../../src/utils/APIResponse';
import RequestStrategy from '../../src/utils/requestStrategies/core';

import * as fixtures from '../fixtures';

class MockRequestStrategy extends RequestStrategy {
  constructor() {
    super('mock');
  }

  private async request<T>(method: string, url: string, opts?: object, body?: object): Promise<APIResponse<T>> {
    if (body && (body as any).url === 'http://bad.url') {
      return Promise.resolve(new APIResponse(false, 404));
    }

    let fixture;

    switch (url.split('/')[3]) {
      case 'is-available':
        fixture = fixtures.availability.availableFixture;
        break;
      default:
        fixture = fixtures.preview.genericLinkPreviewFixture;
        break;
    }

    return Promise.resolve(new APIResponse<any>(true, 200, {
      data: fixture,
      status: 200
    }));
  }

  public get<T>(url: string, opts?: object): Promise<APIResponse<T>> {
    return this.request('GET', url, opts);
  }

  public post<T>(url: string, body?: object, opts?: object): Promise<APIResponse<T>> {
    return this.request('POST', url, opts, body);
  }

  public put<T>(url: string, body?: object, opts?: object): Promise<APIResponse<T>> {
    return this.request('PUT', url, opts, body);
  }

  public patch<T>(url: string, body?: object, opts?: object): Promise<APIResponse<T>> {
    return this.request('PATCH', url, opts, body);
  }

  public delete<T>(url: string, opts?: object): Promise<APIResponse<T>> {
    return this.request('DELETE', url, opts);
  }
}

export = MockRequestStrategy;
