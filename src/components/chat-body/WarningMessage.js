import React from 'react';
import styled from 'styled-components';
import Icon from '../../assets/icons/Icon';

const StyledWarningMessage = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 26px;

  .center-box {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 12px 24px;
    gap: 10px;
    width: 75%;
    background: #feecdc;
    border-radius: 12px;

    p {
      font-size: 10px;
      line-height: 13px;
      color: #312e40;
    }
  }
`;

function WarningMessage() {
  return (
    <StyledWarningMessage>
      <div className="center-box">
        <Icon type="lock" />
        <p>
          Messages are end-to-end encrypted. No one outside of this chat, not even WhatsApp can read
          or listen to them click to learn more.
        </p>
      </div>
    </StyledWarningMessage>
  );
}

export default WarningMessage;
