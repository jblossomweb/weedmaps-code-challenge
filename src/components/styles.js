import styled from "styled-components";
import palette from '../constants/palette';
import pixels from '../constants/pixels';

export const AppWrapper = styled.div`
  margin-top: ${pixels.headerHeight}px;
  margin-bottom: 20px;
  text-align: center;
  font-family: proxima-nova, Helvetica, Roboto, Arial, sans-serif;
  background: ${palette.gray1};
  animation: fadein .5s;
`;

export const AppContent = styled.div`
  width: 90%;
  max-width: 760px;
  margin: 10px auto;
  animation: fadein .5s;
`;
