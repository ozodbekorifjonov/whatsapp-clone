import React from 'react';

import styled from 'styled-components';
import ArrowDown from './src/arrow-down.svg';
import Refresh from './src/refresh.svg';
import Search from './src/search.svg';

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const ImgObj = {
  arrowDown: ArrowDown,
  refresh: Refresh,
  search: Search,
};

function Icon({ type, onClick, style }) {
  return <IconImg style={style} src={ImgObj[type]} onClick={onClick} alt={type} />;
}

export default Icon;
