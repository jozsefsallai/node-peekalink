// istanbul ignore file

import axios, { AxiosError } from 'axios';
import { APIResponse } from '../APIResponse';
import RequestStrategy from './core';

class AxiosStrategy extends RequestStrategy {
  constructor() {
    super('axios');
  }

  private request<T>(method: 'GET' | 'POST' | 'PATCH' | 'PUT' | 'DELETE', url: string, opts?: object, body?: object): Promise<APIResponse<T>> {
    return new Promise((resolve, reject) => {
      return axios({
        method,
        url,
        ...(body && { data: body }),
        ...opts
      })
        .then(({ data, status, headers, request }) => resolve(new APIResponse<T>(true, 200, {
          data,
          status,
          headers,
          request
        })))
        .catch((err: AxiosError) => {
          if (!err.isAxiosError) {
            return reject(err);
          }

          return resolve(new APIResponse<T>(false, err.response?.status || parseInt(err.code || '500'), err.response));
        });
    });
  }

  get<T>(url: string, opts?: object): Promise<APIResponse<T>> {
    return this.request<T>('GET', url, opts);
  }

  post<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    return this.request<T>('POST', url, opts, body);
  }

  put<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    return this.request<T>('PUT', url, opts, body);
  }

  patch<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    return this.request<T>('PATCH', url, opts, body);
  }

  delete<T>(url: string, opts: object): Promise<APIResponse<T>> {
    return this.request<T>('DELETE', url, opts);
  }
}

export = AxiosStrategy;
