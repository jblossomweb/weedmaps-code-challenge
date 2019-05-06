import React from "react";
import get from "lodash.get";
import parseHtml from 'react-html-parser';
import palette from '../../constants/palette';

import MapPin from '../../icons/map-pin';
import Dispensary from '../../icons/dispensary';

import Avatar from '../avatar';
import StarRating from '../star_rating';

import Amenities from './partials/amenities';

import {
  Wrapper,
  CardWrapper,
  FlexWrapper,
  AvatarWrapper,
  TextColumn,
  LocationRow,
  TitleRow,
  BodyWrapper,
  BodyBlock,
  BodySpan,
} from './styles';

const ListingDetails = ({ listing }) => (
  <Wrapper>
    <CardWrapper>
      <FlexWrapper>
        <AvatarWrapper>
          <Avatar img={`${get(listing, "avatar_image.small_url")}`} />
        </AvatarWrapper>
        <TextColumn>
          <TitleRow>{listing.name}</TitleRow>
          <StarRating rating={listing.rating} maxRating={5} />
          <LocationRow>
            ({listing.reviews_count || 0} reviews)
          </LocationRow>
          <LocationRow>
          {listing.type} • {listing.city}, {listing.state} {listing.zip_code}
          </LocationRow>
          <LocationRow>
          {listing.license_type} 
          </LocationRow>
        </TextColumn>
      </FlexWrapper>
      <BodyWrapper>
        <BodyBlock>
          {listing.phone_number && (
            <BodySpan>
              <span role="img" aria-label="phone">📞</span>&nbsp;
              <a href={`dial:${listing.phone_number}`}>{listing.phone_number}</a>
            </BodySpan>
          )}
          {listing.email && (
            <BodySpan>
              <span role="img" aria-label="email">📧</span>&nbsp;
              <a href={`mailto:${listing.email}`}>{listing.email}</a>
            </BodySpan>
          )}
          {listing.website && (
            <BodySpan>
              <span role="img" aria-label="website">🌐</span>&nbsp;
              <a href={listing.website} rel="noopener noreferrer" target="_blank">{listing.website}</a>
            </BodySpan>
          )}
        </BodyBlock>
        {listing.address && (
          <BodyBlock>
            <span role="img" aria-label="map">
              <MapPin width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
            </span>
            &nbsp;
            <a
              href={`
                https://www.google.com/maps/place/
                ${listing.address}+${listing.city}+${listing.state}+${listing.zip_code}
              `}
              rel="noopener noreferrer"
              target="_blank"
            >
              {listing.address} {listing.city}, {listing.state} {listing.zip_code}
            </a>
          </BodyBlock>
        )}
        {listing.web_url && (
          <BodyBlock>
            <span role="img" aria-label="map">
              <Dispensary width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
            </span>
            &nbsp;
            <a
              href={listing.web_url}
              rel="noopener noreferrer" target="_blank"
            >
              View on Weedmaps
            </a>
          </BodyBlock>
        )}
      </BodyWrapper>
    </CardWrapper>
    {listing.business_hours && (
      <CardWrapper>
        <FlexWrapper>
          <BodyWrapper>
            <TitleRow>Business Hours</TitleRow>
            {Object.keys(listing.business_hours).map(day => {
              const { open, close, is_closed } = listing.business_hours[day];
              return (
                <BodyBlock key={day}>
                  <LocationRow>
                    {day}:<br/>
                    {is_closed ? 'CLOSED' : `${open}-${close}`}
                  </LocationRow>
                </BodyBlock>
              )
            })}
          </BodyWrapper>
          <Amenities listing={listing} />
        </FlexWrapper>
      </CardWrapper>
    )}
    {listing.intro_body && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>Introduction</TitleRow>
          <BodyBlock>{parseHtml(listing.intro_body)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
    {listing.description && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>About Us</TitleRow>
          <BodyBlock>{parseHtml(listing.description)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
    {listing.announcement && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>Announcement</TitleRow>
          <BodyBlock>{parseHtml(listing.announcement)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
  </Wrapper>
);

export default ListingDetails;
