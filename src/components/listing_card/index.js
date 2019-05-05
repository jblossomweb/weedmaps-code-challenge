import React from "react";
import styled from "styled-components";
import get from "lodash.get";

import Avatar from "../avatar";
import StarRating from "../star_rating";

import palette from '../../constants/palette';

const CardWrapper = styled.div`
  min-height: 70px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  padding: 20px;
  background: ${palette.white};
  box-shadow: ${palette.shadow} 0px 0.0625rem 0.1875rem;
`;

const TextColumn = styled.div`
  margin-left: 20px;
  div {
    text-align: left;
  }
`

const LocationRow = styled.div`
  color: ${palette.gray2};
  font-size: 12px;
`

const TitleRow = styled.div`
  color: ${palette.gray4};
  font-size: 18px;
  font-weight: bold;
`

const ListingCard = ({ location, listing }) => (
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
);

export default ListingCard;
