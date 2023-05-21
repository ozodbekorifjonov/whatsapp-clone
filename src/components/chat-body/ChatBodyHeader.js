import React from 'react';
import styled from 'styled-components';
import ProfileUser from '../../assets/images/profile-user.png';
import Icon from '../../assets/icons/Icon';

const StyledChatBodyHeader = styled.div`
  height: 88px;
  background: #f7f7fc;
  width: 100%;
  padding: 16px 24px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: space-between;

  .left-box {
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;

    .current-messenger-img {
      width: 48px;
      height: 48px;
      border-radius: 8px;
      margin-right: 16px;
    }

    .current-messenger-info {
      h3 {
        font-weight: 500;
        font-size: 18px;
        line-height: 28px;
        color: #09132c;
      }

      span {
        font-weight: 500;
        font-size: 12px;
        line-height: 24px;
        color: #6e7fa9;

        img {
          width: 8px;
          height: 8px;
          margin-right: 4px;
        }
      }
    }
  }

  .right-box {
    img {
      width: 24px;
      height: 24px;
      margin-left: 24px;
      cursor: pointer;
    }
  }
`;

function ChatBodyHeader({ isLoading, contactInfo }) {
  return (
    <StyledChatBodyHeader>
      <div className="left-box">
        {isLoading && 'Loading...'}
        {!isLoading && contactInfo && (
          <>
            <img
              src={contactInfo.avatar ? contactInfo.avatar : ProfileUser}
              alt="avatar-1"
              className="current-messenger-img"
            />
            <div className="current-messenger-info">
              <h3>{contactInfo.name}</h3>
            </div>
          </>
        )}
      </div>
      <div className="right-box">
        <Icon type="call" />
        <Icon type="video" />
        <Icon type="searchMessage" />
        <Icon type="arrowDown" />
      </div>
    </StyledChatBodyHeader>
  );
}

export default ChatBodyHeader;
