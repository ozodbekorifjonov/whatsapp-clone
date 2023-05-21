import React from 'react';
import styled from 'styled-components';

const StyleCustomChat = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 16px 24px;
  overflow: hidden;
  box-sizing: border-box;
`;

function ChatCustomStyle({ children }) {
  return <StyleCustomChat>{children}</StyleCustomChat>;
}

export default ChatCustomStyle;
