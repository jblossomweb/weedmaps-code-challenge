import React, { Component } from 'react';
import PropTypes from 'prop-types';

import ListingDetails from '../../components/listing_details';

import {
  Wrapper,
  Content,
} from './styles';

class ListingDetailsPage extends Component {
  render() {
    const { listing } = this.props;
    return (
      <React.Fragment>
        <Wrapper>
          <Content>
            {listing && <ListingDetails listing={listing}/>}
          </Content>
        </Wrapper>
      </React.Fragment>
    );
  }
}

ListingDetailsPage.propTypes = {
  listingId: PropTypes.number.isRequired,
  listing: PropTypes.object,
};

ListingDetailsPage.defaultProps = {
  listingId: null,
  listing: null,
};

export default ListingDetailsPage;
