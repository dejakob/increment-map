const incrementMap = require('../index');

describe('increment-map', () => {
  describe('should return an array with incrementing values', () => {
    it('from 0 to 5', () => {
      const output = incrementMap(0, 5, index => index);
      expect(output).toEqual([0,1,2,3,4,5]);
    });

    it('from 6 to 8', () => {
      const output = incrementMap(6, 8, index => index);
      expect(output).toEqual([6,7,8]);
    });
  })
});