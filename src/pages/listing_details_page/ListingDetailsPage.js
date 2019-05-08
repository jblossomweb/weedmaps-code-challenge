import React, { Component } from 'react';
import PropTypes from 'prop-types';
import pick from 'lodash.pick';
import get from 'lodash.get';

import ListingDetails from '../../components/listing_details';
import LoadingBars from '../../components/loading_bars';

import {
  Wrapper,
  Content,
} from './styles';

class ListingDetailsPage extends Component {
  render() {
    const { listing, listingsError, fetchingListings } = this.props;
    const error = listingsError;
    const loading = fetchingListings;
    return (
      <Wrapper>
        {loading && <LoadingBars />}
        <Content>
          {error && <div data-tag={`error`}>{error.message}</div>}
          {listing && (
            <ListingDetails
              {...pick(
                listing,
                [
                  'name',
                  'type',
                  'license_type',
                  'address',
                  'city',
                  'state',
                  'zip_code',
                  'phone_number',
                  'email',
                  'website',
                  'web_url',
                  'rating',
                  'reviews_count',
                  'business_hours',
                  'intro_body',
                  'description',
                  'announcement',
                  'is_verified_seller',
                  'has_handicap_access',
                  'accepts_credit_cards',
                  'has_atm',
                  'has_security_guard',
                  'has_photos',
                  'has_videos',
                ]
              )}
              img={get(
                listing,
                ['avatar_image', 'small_url'],
                undefined,
              )}
              enabled_for_delivery={get(
                listing,
                ['online_ordering', 'enabled_for_delivery'],
                false,
              )}
            />
          )}
        </Content>
      </Wrapper>
    );
  }
};

ListingDetailsPage.propTypes = {
  listingId: PropTypes.number,
  listing: PropTypes.object,
  fetchingListings: PropTypes.bool,
  listingsError: PropTypes.object,
};

ListingDetailsPage.defaultProps = {
  listingId: null,
  listing: null,
  fetchingListings: false,
  listingsError: null,
};

export default ListingDetailsPage;
