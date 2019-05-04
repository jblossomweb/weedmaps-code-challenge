import React from "react";
import PropTypes from "prop-types";
import ListingCard from "../listing_card";

const ListingCards = ({ location, listings }) => (
  <React.Fragment>
    {listings.map(listing => (
      <ListingCard location={location} listing={listing} key={listing.id} />
    ))}
  </React.Fragment>
);

ListingCards.propTypes = {
  location: PropTypes.object,
  listings: PropTypes.array,
};

ListingCards.defaultProps = {
  location: null,
  listings: [],
};

export default ListingCards;
