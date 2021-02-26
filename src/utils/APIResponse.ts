interface APIResponseData<T> {
  data: T;
  status: number;
  headers?: any;
  request?: any;
}

class APIResponse<T> {
  public ok: boolean;
  public status?: number;
  public response?: APIResponseData<T>;

  constructor(ok: boolean, status?: number, response?: APIResponseData<T>) {
    this.ok = ok;
    this.status = status;
    this.response = response;
  }

  public data(): T {
    if (!this.response) {
      throw new Error('Failed to retrieve the response. Perhaps there is none?');
    }

    return this.response.data;
  }
}

export {
  APIResponse,
  APIResponseData
};
