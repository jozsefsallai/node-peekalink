import { expect } from 'chai';
import { APIError } from '../../../src/utils/errors/APIError';

describe('utils/errors/APIError', function () {
  describe('@constructor', function () {
    beforeEach(function () {
      this.error = new APIError('somethings bad', 418);
    });

    it('should set the correct name', function () {
      return expect(this.error.name).to.equal('APIError');
    });

    it('should set code', function () {
      return expect(this.error.code).to.equal(418);
    });

    it('should have correct message', function () {
      return expect(this.error.message).to.equal('somethings bad (code: 418)');
    });
  });

  describe('#toJSON', function () {
    it('should return correct json', function () {
      const error = new APIError('something borked', 500);
      return expect(error.toJSON()).to.deep.equal({
        name: 'APIError',
        message: 'something borked (code: 500)',
        code: 500
      });
    });
  });
});
