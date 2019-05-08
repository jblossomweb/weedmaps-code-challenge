import { connect } from 'react-redux';

import * as listingsSelectors from '../../store/selectors/listings';
import * as listingsThunks from '../../store/thunks/listings';

import ListingDetailsPage from './ListingDetailsPage';

class Container extends ListingDetailsPage {
  componentWillMount() {
    const { listingId, listing, fetchListingDetails } = this.props
    if (listingId && !listing) {
      fetchListingDetails(listingId);
    }
  }
}

const mapStateToProps = (state, { match }) => ({
  listingId: Number(match.params.id.split('-')[0]),
  listing: listingsSelectors.getListingDetails(state, match.params.id),
});

const mapDispatchToProps = dispatch => ({
  fetchListingDetails: listingId => listingsThunks.fetchListingDetails(listingId)(dispatch),
});

export default connect(mapStateToProps, mapDispatchToProps)(Container);
