import { LinkAvailability } from '../typings/availability';
import { APIRequest } from '../utils/APIRequest';

class AvailabilityAPI extends APIRequest {
  async fetch(url: string): Promise<LinkAvailability> {
    return this.post<LinkAvailability>({ url });
  }
}

export {
  AvailabilityAPI
};
