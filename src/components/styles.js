import styled from "styled-components";
import palette from '../palette';

export const AppHeader = styled.div`
  height: 70px;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
  background-color: ${palette.black};
  color: ${palette.white};

  img {
    width: 110px;
    height: 25px;
  }
`;

export const AppWrapper = styled.div`
  margin-bottom: 20px;
  text-align: center;
  font-family: proxima-nova, Helvetica, Roboto, Arial, sans-serif;
  background: ${palette.gray1};
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 760px;
  margin: 10px auto;
`;

export const ListingGroups = styled.div`
  margin-top: 30px;
  width: 100%;
  h2 {
    text-align: left;
    color: ${palette.gray4};
  }
`;

export const HeroSection = styled.div`
  background-color: ${palette.white};
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  border-bottom: 1px solid ${palette.gray1};
  padding: 0 0 16px;

  h2 {
    font-weight: 300;
    color: ${palette.gray2};
    display: flex;
    align-items: center;
    span {
      margin-left: 5px;
    }
  }
`;

export const ContentContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 16px;
`;

export const LocationSection = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  height: 80px;
`;

export const TextContent = styled.div`
  width: 100%;
  max-width: 1100px;
  height: auto;
  text-align: left;
  color: ${palette.gray2};
  line-height: 25px;
  font-size: 14px;
  letter-spacing: 1px;
  font-weight: 300;
`;

export const LocateButton = styled.a`
  width: 105px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: start;
  border: 1px solid ${palette.gray3};
  color: ${palette.gray4};
  border-radius: 3px;
  padding: 5px;
  font-size: 12px;
  font-weight: bold;
  cursor: pointer;
  text-transform: uppercase;

  svg {
    margin-right: 10px;
  }
`;
