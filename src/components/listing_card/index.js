import React from "react";
import get from "lodash.get";
import { Link } from 'react-router-dom';

import Avatar from "../avatar";
import StarRating from "../star_rating";

import {
  Wrapper,
  CardWrapper,
  TextColumn,
  LocationRow,
  TitleRow,
} from './styles';

const ListingCard = ({ location, listing }) => (
  <Wrapper>
    <Link to={`/listing/${listing.wmid}`}>
      <CardWrapper>
        <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        <TextColumn>
          <LocationRow>
            {listing.city}, {listing.state || location.state_abv} | {Math.round(listing.distance)}mi
          </LocationRow>
          <TitleRow>{listing.name}</TitleRow>
          <StarRating rating={listing.rating} maxRating={5} />
        </TextColumn>
      </CardWrapper>
    </Link>
  </Wrapper>
);

export default ListingCard;
