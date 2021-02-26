import { LinkPreview } from '../typings/preview';
import { APIRequest } from '../utils/APIRequest';

class PreviewAPI extends APIRequest {
  async fetch(url: string): Promise<LinkPreview> {
    return this.post<LinkPreview>({ url });
  }
}

export {
  PreviewAPI
};
