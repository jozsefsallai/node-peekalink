import RequestStrategy from './core';
import { APIResponse } from '../APIResponse';

import AxiosStrategy from './AxiosStrategy';

type RequestStrategyType = 'axios' | typeof RequestStrategy;

interface IRequestStrategy {
  name: string;

  get<T>(url: string, opts?: object): Promise<APIResponse<T>>;
  post<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>>;
  put<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>>;
  patch<T>(url: string, body: object, opts?: object): Promise<APIResponse<T>>;
  delete<T>(url: string, body: object): Promise<APIResponse<T>>;
};

const getRequestStrategy = (strategy: RequestStrategyType) => {
  if (typeof strategy === 'function' && strategy.prototype instanceof RequestStrategy) {
    // eslint-disable-next-line new-cap
    return new strategy(strategy.name);
  }

  if (strategy === 'axios') {
    return new AxiosStrategy();
  }

  throw new TypeError(`Unknown request strategy: ${strategy}.`);
};

export {
  getRequestStrategy,
  RequestStrategy,
  RequestStrategyType,
  IRequestStrategy
};
