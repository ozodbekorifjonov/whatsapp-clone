import React from 'react';
import styled from 'styled-components';
import FormatDateTime from '../../helper/formatDateTime';

const StyledSenderMessage = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 16px;

  .message__container {
    padding: 16px 24px;
    gap: 10px;
    background: #d7f8f4;
    border-radius: 16px 16px 0 16px;
    max-width: 60%;

    p {
      font-size: 14px;
      line-height: 18px;
      color: #010101;
      opacity: 0.87;
      word-wrap: break-word;
    }

    span {
      font-size: 12px;
      line-height: 18px;
      color: #010101;
      opacity: 0.87;
      font-style: italic;
    }
  }
`;

function SenderMessage({ message, timestamp }) {
  // let date = new Date(timestamp);

  return (
    <StyledSenderMessage>
      <div className="message__container">
        <p>{message}</p>
        {/*<span>*/}
        {/*  <FormatDateTime date={date} type="TIME" />*/}
        {/*</span>*/}
      </div>
    </StyledSenderMessage>
  );
}

export default SenderMessage;
