import set from 'lodash.set';
import mockCoords from '../../__test__/mocks/coord-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';
import { geoPaths } from '../../constants/storePaths';
import * as selectors from './geo';

describe('store/selectors/geo', () => {

  describe('getLocating', () => {
    const path = geoPaths.locating();
    const value = true;
    const testState = { geo: {}};
    set(testState.geo, path, value);
    it('should select value from locating', () => {
      const selected = selectors.getLocating(testState);
      expect(selected).toBe(value);
    });
  });

  describe('getLocation', () => {
    const path = geoPaths.location();
    const value = {
      latitude: mockCoords.latitude,
      longitude: mockCoords.longitude,
    };
    const testState = { geo: {}};
    set(testState.geo, path, value);
    it('should select value from location', () => {
      const selected = selectors.getLocation(testState);
      expect(selected).toEqual(value);
    });
  });

  describe('getError', () => {
    const path = geoPaths.error();
    const value = mockError;
    const testState = { geo: {}};
    set(testState.geo, path, value);
    it('should select value from error', () => {
      const selected = selectors.getError(testState);
      expect(selected).toEqual(value);
    });
  });
});
