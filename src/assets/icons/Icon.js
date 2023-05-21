import React from 'react';

import styled from 'styled-components';
import ArrowDown from './src/arrow-down.svg';
import Refresh from './src/refresh.svg';
import Search from './src/search.svg';
import Online from './src/online.svg';
import Call from './src/call.svg';
import Video from './src/video.svg';
import Lock from './src/lock.svg';
import SearchMessage from './src/search-message.svg';
import Send from './src/send.png';

const IconImg = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  object-fit: contain;
`;

const ImgObj = {
  arrowDown: ArrowDown,
  refresh: Refresh,
  search: Search,
  online: Online,
  call: Call,
  video: Video,
  searchMessage: SearchMessage,
  lock: Lock,
  send: Send,
};

function Icon({ type, onClick, style }) {
  return <IconImg style={style} src={ImgObj[type]} onClick={onClick} alt={type} />;
}

export default Icon;
