import React from "react";
import PropTypes from 'prop-types';
import parseHtml from 'react-html-parser';
import pick from 'lodash.pick';
import palette from '../../constants/palette';

import MapPin from '../../icons/map-pin';
import Dispensary from '../../icons/dispensary';

import Avatar from '../avatar';
import StarRating from '../star_rating';
import ListingAmenities from '../listing_amenities';

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

const ListingDetails = props => (
  <Wrapper>
    <CardWrapper>
      <FlexWrapper>
        <AvatarWrapper>
          <Avatar img={props.img} />
        </AvatarWrapper>
        <TextColumn>
          <TitleRow>{props.name}</TitleRow>
          <StarRating rating={props.rating} maxRating={5} />
          <LocationRow>
            ({props.reviews_count || 0} reviews)
          </LocationRow>
          <LocationRow>
            {props.type}
            {props.type && (props.city || props.state) ? ` • ` : null}
            {props.city}
            {props.city && props.state ? `, ` : null}
            {props.state}
            {props.city || props.state ? ` ` : null}
            {props.zip_code}
          </LocationRow>
          <LocationRow>
            {props.license_type} 
          </LocationRow>
        </TextColumn>
      </FlexWrapper>
      <BodyWrapper>
        <BodyBlock>
          {props.phone_number && (
            <BodySpan>
              <span role="img" aria-label="phone">📞</span>&nbsp;
              <a href={`dial:${props.phone_number}`}>{props.phone_number}</a>
            </BodySpan>
          )}
          {props.email && (
            <BodySpan>
              <span role="img" aria-label="email">📧</span>&nbsp;
              <a href={`mailto:${props.email}`}>{props.email}</a>
            </BodySpan>
          )}
          {props.website && (
            <BodySpan>
              <span role="img" aria-label="website">🌐</span>&nbsp;
              <a href={props.website} rel="noopener noreferrer" target="_blank">{props.website}</a>
            </BodySpan>
          )}
        </BodyBlock>
        {props.address && (
          <BodyBlock>
            <span role="img" aria-label="map">
              <MapPin width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
            </span>
            &nbsp;
            <a
              href={`
                https://www.google.com/maps/place/
                ${props.address}+${props.city}+${props.state}+${props.zip_code}
              `}
              rel="noopener noreferrer"
              target="_blank"
            >
              {props.address} {props.city}, {props.state} {props.zip_code}
            </a>
          </BodyBlock>
        )}
        {props.web_url && (
          <BodyBlock>
            <span role="img" aria-label="map">
              <Dispensary width={`${25}px`} height={`${25}px`} fill={palette.gray4} />
            </span>
            &nbsp;
            <a
              href={props.web_url}
              rel="noopener noreferrer" target="_blank"
            >
              View on Weedmaps
            </a>
          </BodyBlock>
        )}
      </BodyWrapper>
    </CardWrapper>
    {props.business_hours && (
      <CardWrapper>
        <FlexWrapper>
          <BodyWrapper>
            <TitleRow>Business Hours</TitleRow>
            {Object.keys(props.business_hours).map(day => {
              const { open, close, is_closed } = props.business_hours[day];
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
          <ListingAmenities
            {...pick(props, [
              'is_verified_seller',
              'enabled_for_delivery',
              'has_handicap_access',
              'accepts_credit_cards',
              'has_atm',
              'has_security_guard',
              'has_photos',
              'has_videos',
            ])}
          />
        </FlexWrapper>
      </CardWrapper>
    )}
    {props.intro_body && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>Introduction</TitleRow>
          <BodyBlock>{parseHtml(props.intro_body)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
    {props.description && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>About Us</TitleRow>
          <BodyBlock>{parseHtml(props.description)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
    {props.announcement && (
      <CardWrapper>
        <BodyWrapper>
          <TitleRow>Announcement</TitleRow>
          <BodyBlock>{parseHtml(props.announcement)}</BodyBlock>
        </BodyWrapper>
      </CardWrapper>
    )}
  </Wrapper>
);

ListingDetails.propTypes = {
  name: PropTypes.string,
  img: PropTypes.string,
  type: PropTypes.string,
  license_type: PropTypes.string,
  address: PropTypes.string,
  city: PropTypes.string,
  state: PropTypes.string,
  zip_code: PropTypes.string,
  phone_number: PropTypes.string,
  email: PropTypes.string,
  website: PropTypes.string,
  web_url: PropTypes.string,
  rating: PropTypes.number,
  reviews_count: PropTypes.number,
  business_hours: PropTypes.object,
  intro_body: PropTypes.string,
  description: PropTypes.string,
  announcement: PropTypes.string,
};

ListingDetails.defaultProps = {
  name: null,
  img: undefined,
  type: null,
  license_type: null,
  address: null,
  city: null,
  state: null,
  zip_code: null,
  phone_number: null,
  email: null,
  website: null,
  web_url: null,
  rating: 0,
  business_hours: null,
  intro_body: null,
  description: null,
  announcement: null,
};

export default ListingDetails;
