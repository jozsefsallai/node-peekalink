import { expect } from 'chai';
import { APIResponse } from '../../src/utils/APIResponse';

describe('utils/APIResponse', function () {
  describe('@constructor', function () {
    it('should only set `ok` when no `status` or `response` is provided', function () {
      const res = new APIResponse(false);

      return expect(res.ok).to.equal(false)
        && expect(res.response).to.be.undefined
        && expect(res.status).to.be.undefined;
    });

    it('should set `ok` and `status`', function () {
      const res = new APIResponse(false, 500);

      return expect(res.ok).to.equal(false)
        && expect(res.status).to.equal(500)
        && expect(res.response).to.be.undefined;
    });

    it('should set all values', function () {
      const response = {
        data: 'hello-world',
        status: 200
      };

      const res = new APIResponse<string>(true, 200, response);

      return expect(res.ok).to.equal(true)
        && expect(res.status).to.equal(200)
        && expect(res.response).to.deep.equal(response);
    });
  });

  describe('#data', function () {
    it('should throw on no response', function () {
      const res = new APIResponse(false);
      const callback = () => res.data();

      return expect(callback).to.throw(Error, /Failed to retrieve the response/);
    });

    it('should return response when it is present', function () {
      const response = {
        data: 'hello-world',
        status: 200
      };

      const res = new APIResponse(true, 200, response);
      const data = res.data();

      return expect(data).to.equal('hello-world');
    });
  });
});
