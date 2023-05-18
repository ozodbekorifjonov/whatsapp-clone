import React from 'react';
import { Link } from 'react-router-dom';
import currentUserImg from '../../assets/images/current-user.png';
import Icon from '../../assets/icons/Icon';
import styled from 'styled-components';

const StyledChatBarHeader = styled.div`
  .d-flex {
    display: flex;
    justify-content: space-between;
    align-items: center;

    .left-box {
      display: flex;
      align-items: center;

      .current-user-link {
        margin-right: 24px;

        .current-user {
          width: 40px;
          height: 40px;
          object-fit: cover;
        }
      }
    }
  }

  .search-form {
    margin-top: 24px;
    margin-bottom: 24px;

    form {
      .form-control {
        display: flex;
        align-items: center;

        .search-box {
          border-top: 1px solid #d1e4e8;
          border-left: 1px solid #d1e4e8;
          border-bottom: 1px solid #d1e4e8;
          border-radius: 24px 0 0 24px;
          padding: 12.5px 0 12px 16px;
          background-color: #ffffff;
          
          img {
            width: 20px;
            height: 20px;
            object-fit: contain;
            margin-right: 9.88px;
          }
        }

        input {
          outline: none;
          width: -webkit-fill-available;
          padding: 12px 16px 12px 0;
          border-top: 1px solid #d1e4e8;
          border-right: 1px solid #d1e4e8;
          border-bottom: 1px solid #d1e4e8;
          border-radius: 0 24px 24px 0;
          border-left: none;
          font-size: 16px;
          line-height: 24px;

          &::placeholder {
            color: #9393c1;
          }
        }
      }
    }
  }
`;

function ChatBarHeader() {
  return (
    <StyledChatBarHeader>
      <div className="d-flex">
        <div className="left-box">
          <Link to={'/'} className="current-user-link">
            <img src={currentUserImg} alt="current-user" className="current-user" />
          </Link>
          <Link to={'/'}>
            <Icon type="refresh" />
          </Link>
        </div>
        <div className="right-box">
          <div>
            <Icon type="arrowDown" />
          </div>
        </div>
      </div>
      <div className="search-form">
        <form action="">
          <div className="form-control">
            <div className="search-box">
              <Icon type="search" />
            </div>
            <input type="text" placeholder="Search or start a new chat" />
          </div>
        </form>
      </div>
    </StyledChatBarHeader>
  );
}

export default ChatBarHeader;
