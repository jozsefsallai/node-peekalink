import { LinkPreview } from '../typings/preview';
import { APIRequest } from '../utils/APIRequest';

class PreviewAPI extends APIRequest {
  async fetch(link: string): Promise<LinkPreview> {
    return this.post<LinkPreview>({ link });
  }
}

export {
  PreviewAPI
};
