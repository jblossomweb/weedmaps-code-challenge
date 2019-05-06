import React from 'react';
import get from 'lodash.get';
import palette from '../../../constants/palette';

import Accessible from '../../../icons/accessible';
import Atm from '../../../icons/atm';
import CreditCard from '../../../icons/credit-card';
import Delivery from '../../../icons/delivery';
import SolidLock from '../../../icons/solid-lock';
import Photo from '../../../icons/photo';
import VerifiedSeller from '../../../icons/verified-seller';

import {
  LocationRow,
  BodyWrapper,
  BodyBlock,
} from '../styles';

const Amenities = ({ listing }) => (
  <BodyWrapper>
    {listing.is_verified_seller && (
      <BodyBlock>
        <LocationRow>
          <VerifiedSeller width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Verified
        </LocationRow>
      </BodyBlock>
    )}
    {get(listing, ['online_ordering', 'enabled_for_delivery'], false) && (
      <BodyBlock>
        <LocationRow>
          <Delivery width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Delivery
        </LocationRow>
      </BodyBlock>
    )}
    {listing.has_handicap_access && (
      <BodyBlock>
        <LocationRow>
          <Accessible width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Accessible
        </LocationRow>
      </BodyBlock>
    )}
    {listing.accepts_credit_cards && (
      <BodyBlock>
        <LocationRow>
          <CreditCard width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Accepts CC
        </LocationRow>
      </BodyBlock>
    )}
    {listing.has_atm && (
      <BodyBlock>
        <LocationRow>
          <Atm width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          ATM
        </LocationRow>
      </BodyBlock>
    )}
    {listing.has_security_guard && (
      <BodyBlock>
        <LocationRow>
          <SolidLock width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Security
        </LocationRow>
      </BodyBlock>
    )}
    {listing.has_photos && (
      <BodyBlock>
        <LocationRow>
          <Photo width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Photos
        </LocationRow>
      </BodyBlock>
    )}
    {listing.has_videos && (
      <BodyBlock>
        <LocationRow>
          <Photo width={`${25}px`} height={`${25}px`} fill={palette.gray4} /><br/>
          Videos
        </LocationRow>
      </BodyBlock>
    )}
  </BodyWrapper>
);

export default Amenities;
