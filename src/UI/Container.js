import React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  width: 1120px;
  height: 100vh;
  box-sizing: border-box;
  margin: 0 auto;
  overflow: hidden;

  @media only screen and (min-width: 320px) and (max-width: 720px) {
    width: 100%;
    padding: 0;
  }
`;

function Container({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

export default Container;
