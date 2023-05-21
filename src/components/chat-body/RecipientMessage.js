import React from 'react';
import styled from 'styled-components';

const StyledRecipientMessage = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-bottom: 16px;

  .message__container {
    padding: 16px 24px;
    background: #ffffff;
    border-radius: 16px 16px 16px 0;
    max-width: 60%;

    p {
      font-size: 14px;
      line-height: 18px;
      color: #010101;
      opacity: 0.87;
      word-wrap: break-word;
    }
  }
`;

function RecipientMessage({ message, timestamp }) {
  // let date = new Date(timestamp);

  return (
    <StyledRecipientMessage>
      <div className="message__container">
        <p>{message}</p>
        {/*<span>*/}
        {/*  <FormatDateTime date={date} type="TIME" />*/}
        {/*</span>*/}
      </div>
    </StyledRecipientMessage>
  );
}

export default RecipientMessage;
