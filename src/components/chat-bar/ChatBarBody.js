import React from 'react';
import styled from 'styled-components';
import Avatar1 from '../../assets/images/avatar1.png';

const StyledChatBarBody = styled.div`
  overflow: hidden;

  ul {
    list-style-type: none;
    overflow: auto;
    max-height: 100%;

    li {
      cursor: pointer;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 8px 12px;
      transition: all linear 0.2s;
      border-radius: 8px;

      &:hover {
        background-color: rgba(209, 228, 232, 0.5);
      }

      &.active {
        background-color: rgba(209, 228, 232, 1);
      }

      .avatar-frame {
        width: 60px;
        height: 60px;
        border-radius: 8px;
        object-fit: cover;
        margin-right: 12px;
      }

      .sender-info {
        display: flex;
        align-items: center;

        .last-message-box {
          width: 195px;

          h3 {
            font-weight: 500;
            font-size: 16px;
            line-height: 24px;
            color: #09132c;
            margin-bottom: 8px;
          }

          .last-message {
            font-weight: 400;
            font-size: 12px;
            line-height: 16px;
            color: #09132c;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
          }
        }
      }

      .last-message-time {
        font-weight: 400;
        font-size: 10px;
        line-height: 16px;
        color: #829c99;
      }
    }
  }
`;

function ChatBarBody() {
  return (
    <StyledChatBarBody>
      <ul>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li className="active">
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
        <li>
          <div className="sender-info">
            <img src={Avatar1} alt="avatar-1" className="avatar-frame" />
            <div className="last-message-box">
              <h3>Cody Fisher </h3>
              <p className="last-message">Lorem ipsum dolor sit amet?</p>
            </div>
          </div>
          <h6 className="last-message-time">05:14 pm</h6>
        </li>
      </ul>
    </StyledChatBarBody>
  );
}

export default ChatBarBody;
