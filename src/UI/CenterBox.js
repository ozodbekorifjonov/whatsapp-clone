import React from 'react';
import styled from 'styled-components';

const Box = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

function CenterBox({ children }) {
  return <Box>{children}</Box>;
}

export default CenterBox;
