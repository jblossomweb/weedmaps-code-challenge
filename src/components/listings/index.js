import React from 'react';
import PropTypes from 'prop-types';
import get from 'lodash.get';

import ListingCard from '../listing_card';

import Delivery from '../../icons/delivery';
import Dispensary from '../../icons/dispensary';
import Doctor from '../../icons/doctor';

import {
  ListingGroups,
} from './styles';

import palette from '../../constants/palette';

class Listings extends React.Component {
  regionTypes = ['delivery', 'dispensary', 'doctor'];

  regionLabels = {
    delivery: 'Delivery Services',
    dispensary: 'Dispensary Storefronts',
    doctor: 'Doctors',
  };

  regionIcons = {
    delivery: <Delivery fill={palette.gray4} />,
    dispensary: <Dispensary fill={palette.gray4} />,
    doctor: <Doctor fill={palette.gray4} />,
  };

  getLabel = (region, label, icon) => {
    if (get(region, 'listings', []).length) {
      return (
        <div key={label}>
          <strong> {icon} {label} </strong>
        </div>
      );
    }
    return (<div />);
  };

  render() {
    const { location, regions } = this.props;
    const { regionTypes, regionLabels, regionIcons, getLabel } = this;
    return (
      <React.Fragment>
        {regionTypes.map(regionType => (
          <ListingGroups key={regionType}>
            <h2>
              {getLabel(
                regions[regionType],
                regionLabels[regionType],
                regionIcons[regionType],
              )}
            </h2>
            {get(regions[regionType], 'listings').map(listing => (
              <ListingCard
                key={listing.id}
                wmid={listing.wmid}
                slug={listing.slug}
                name={listing.name}
                img={get(listing, ['avatar_image', 'small_url'], undefined)}
                city={listing.city}
                state={listing.state || location.state_abv} // sometimes empty
                distance={listing.distance}
                rating={listing.rating}
              />
            ))}
          </ListingGroups>
        ))}
      </React.Fragment>
    )
  }
}

Listings.propTypes = {
  location: PropTypes.object,
  regions: PropTypes.object,
}

Listings.defaultProps = {
  location: null,
  regions: null,
}

export default Listings;
