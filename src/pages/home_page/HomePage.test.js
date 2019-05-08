import { mountScenario } from '../../__test__/utils';
import HomePage from './HomePage';
import { scenarios } from './HomePage.story';

import HeroSection from '../../components/hero_section';
import Listings from '../../components/listings';

import {
  Wrapper,
  Content,
} from './styles';

describe('pages/home_page', () => {

  beforeEach(jest.clearAllMocks);

  describe('scenarios', () => {
    Object.keys(scenarios).forEach(scene => describe(scene, () => {
      const mounted = mountScenario(scenarios[scene]);
      const page = mounted.find(HomePage);
      const props = page.props();
      const wrapper = page.find(Wrapper);
      const heroSection = wrapper.find(HeroSection);
      const content = wrapper.find(Content);
      const error = content.find('[data-tag="error"]');
      const listings = content.find(Listings);
      it(`should mount a HomePage component`, () => {
        expect(page.length).toBe(1);
      });
      it(`should mount a Wrapper component`, () => {
        expect(wrapper.length).toBe(1);
      });
      it(`should mount a HeroSection component`, () => {
        expect(heroSection.length).toBe(1);
      });
      it(`should mount a Content component`, () => {
        expect(content.length).toBe(1);
      });
      if (props.geoError) {
        it(`should mount an error element`, () => {
          expect(error.length).toBe(1);
        });
        it(`should mount an error element containing geoError message`, () => {
          expect(error.text()).toEqual(props.geoError.message);
        });
      } else if (props.listingsError) {
        it(`should mount an error element`, () => {
          expect(error.length).toBe(1);
        });
        it(`should mount an error element containing listingsError message`, () => {
          expect(error.text()).toEqual(props.listingsError.message);
        });
      } else {
        it(`should not mount an error element`, () => {
          expect(error.length).toBe(0);
        });
      }
      if (props.listingsLocation && props.listingsRegions) {
        it(`should mount a Listings component`, () => {
          expect(listings.length).toBe(1);
        });
      } else {
        it(`should not mount a Listings component`, () => {
          expect(listings.length).toBe(0);
        });
      }
    }));
  });
});
