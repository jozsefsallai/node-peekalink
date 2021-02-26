import { LinkAvailability } from '../typings/availability';
import { APIRequest } from '../utils/APIRequest';

class AvailabilityAPI extends APIRequest {
  async fetch(link: string): Promise<LinkAvailability> {
    return this.post<LinkAvailability>({ link });
  }
}

export {
  AvailabilityAPI
};
