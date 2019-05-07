import set from 'lodash.set';
import mockLocation from '../../__test__/mocks/location-mock.json';
import mockListing from '../../__test__/mocks/listing-mock.json';
import mockError from '../../__test__/mocks/error-mock.json';
import { listingsPaths } from '../../constants/storePaths';
import * as selectors from './listings';

const mockListingId = mockListing.data.listing.wmid;

describe('store/selectors/listings', () => {

  describe('getFetching', () => {
    const path = listingsPaths.fetching();
    const value = true;
    const testState = { listings: {}};
    set(testState.listings, path, value);
    it('should select value from fetching', () => {
      const selected = selectors.getFetching(testState);
      expect(selected).toBe(value);
    });
  });

  describe('getLocation', () => {
    const path = listingsPaths.location();
    const value = mockLocation.data.location;
    const testState = { listings: {}};
    set(testState.listings, path, value);
    it('should select value from location', () => {
      const selected = selectors.getLocation(testState);
      expect(selected).toEqual(value);
    });
  });

  describe('getRegions', () => {
    const path = listingsPaths.regions();
    const value = mockLocation.data.regions;
    const testState = { listings: {}};
    set(testState.listings, path, value);
    it('should select value from regions', () => {
      const selected = selectors.getRegions(testState);
      expect(selected).toEqual(value);
    });
  });

  describe('getListingDetails', () => {
    const path = listingsPaths.details(mockListingId);
    const value = mockLocation.data.regions;
    const testState = { listings: {}};
    set(testState.listings, path, value);
    it('should select value from details', () => {
      const selected = selectors.getListingDetails(testState, mockListingId);
      expect(selected).toEqual(value);
    });
  });

  describe('getError', () => {
    const path = listingsPaths.error();
    const value = mockError;
    const testState = { listings: {}};
    set(testState.listings, path, value);
    it('should select value from error', () => {
      const selected = selectors.getError(testState);
      expect(selected).toEqual(value);
    });
  });
});
