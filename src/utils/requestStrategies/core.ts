// istanbul ignore file
/* eslint-disable @typescript-eslint/no-unused-vars */

import { IRequestStrategy } from '.';
import { APIResponse } from '../APIResponse';

class RequestStrategy implements IRequestStrategy {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }

  get<T>(url: string, opts?: object): Promise<APIResponse<T>> {
    throw new Error('Cannot use an abstract request strategy.');
  };

  post<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    throw new Error('Cannot use an abstract request strategy.');
  };

  put<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    throw new Error('Cannot use an abstract request strategy.');
  };

  patch<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>> {
    throw new Error('Cannot use an abstract request strategy.');
  };

  delete<T>(url: string, opts?: object): Promise<APIResponse<T>> {
    throw new Error('Cannot use an abstract request strategy.');
  };
}

export = RequestStrategy;
