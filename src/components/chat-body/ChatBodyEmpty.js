import React from 'react';
import styled from 'styled-components';
import QRCodePhone from '../../assets/images/qr-code-phone.png';

const StyledChatBodyEmpty = styled.div`
  position: absolute;
  width: 75%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;

  img {
    margin-bottom: 28px;
    width: 280px;
    height: 280px;
  }

  h3 {
    font-weight: 500;
    font-size: 36px;
    line-height: 48px;
    color: #333e5b;
    margin-bottom: 24px;
  }

  p {
    font-weight: 500;
    font-size: 18px;
    line-height: 28px;
    color: #8f94a3;
  }
`;

function ChatBodyEmpty() {
  return (
    <StyledChatBodyEmpty>
      <img src={QRCodePhone} alt="qr-code-phone" />
      <h3>
        Keep your phone <br /> connected
      </h3>
      <p>
        Whatsapp connects to your phone to sync messages. To reduce data usage. connect your phone
        to Wi-Fi.
      </p>
    </StyledChatBodyEmpty>
  );
}

export default ChatBodyEmpty;
