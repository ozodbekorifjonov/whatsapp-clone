import React, { useEffect } from 'react';
import styled from 'styled-components';
import ProfileUserAvatar from '../../assets/images/profile-user.png';
import { useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { useService } from '../../store/service-provider';
import searchArrayObjects from '../../helper/searchArrayObjects';

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
      transition: all linear 0.1s;
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
        width: 80%;

        .last-message-box {
          width: 170px;

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
  let [searchParams, setSearchParams] = useSearchParams();
  const searchVal = searchParams.get('search');
  let { id } = useParams();
  const paramId = id;
  const { getContactsList, isLoading, contactsList } = useService();
  const navigate = useNavigate();

  useEffect(() => {
    getContactsList();
  }, [getContactsList]);

  const handleClickUser = (id) => {
    let path = `/chat/${id}`;
    if (searchVal) {
      path = `${path}?search=${searchVal}`;
    }
    navigate(path);
  };

  const filteredList = searchArrayObjects(contactsList, 'name', searchVal);

  return (
    <StyledChatBarBody>
      <ul>
        {isLoading && 'Loading...'}
        {filteredList?.length === 0 && !isLoading && 'NO DATA'}
        {filteredList?.length > 0 &&
          !isLoading &&
          filteredList.map((contact, id) => (
            <li
              key={id}
              className={contact.id === paramId ? 'active' : null}
              onClick={() => handleClickUser(contact.id)}
            >
              <div className="sender-info">
                <img src={ProfileUserAvatar} alt="avatar-1" className="avatar-frame" />
                <div className="last-message-box">
                  <h3>{contact.name}</h3>
                  <p className="last-message">{contact.type}</p>
                </div>
              </div>
            </li>
          ))}
      </ul>
    </StyledChatBarBody>
  );
}

export default ChatBarBody;
