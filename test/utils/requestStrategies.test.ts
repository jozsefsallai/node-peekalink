import { expect } from 'chai';
import { RequestStrategy, getRequestStrategy } from '../../src/utils/requestStrategies';
import MockRequestStrategy from '../support/MockRequestStrategy';

describe('utils/requestStrategies', function () {
  describe('RequestStrategy class', function () {
    describe('@constructor', function () {
      it('should set name', function () {
        const strategy = new RequestStrategy('test-strategy');
        return expect(strategy.name).to.equal('test-strategy');
      });
    });
  });

  describe('getRequestStrategy', function () {
    describe('on string input', function () {
      it('should return axios', function () {
        const strategy = getRequestStrategy('axios');
        return expect(strategy.name).to.eql('axios');
      });

      it('should throw on invalid input', function () {
        const strategy = () => getRequestStrategy('gneurshk' as any);
        return expect(strategy).to.throw('Unknown request strategy: gneurshk.');
      });
    });

    describe('on strategy class input', function () {
      it('should return custom strategy', function () {
        const strategy = getRequestStrategy(MockRequestStrategy);
        return expect(strategy.name).to.equal('mock');
      });
    });
  });
});
