import React, { useCallback, useMemo, useState } from 'react';
import { Link, useLocation, useNavigate, useSearchParams } from 'react-router-dom';
import ProfileUserAvatar from '../../assets/images/profile-user.png';
import Icon from '../../assets/icons/Icon';
import styled from 'styled-components';
import { debounceFunction } from '../../helper/debounceFunction';
import { SEARCH_DELAY } from '../../constants';

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

    .right-box {
      h4 {
        cursor: pointer;
        font-weight: 500;
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
  let [searchParams, setSearchParams] = useSearchParams();
  let [searchVal, setSearchVal] = useState(searchParams.get('search'));
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const handleSearchQuery = useCallback(
    (nextValue) => {
      if (nextValue) navigate(`${pathname}?search=${nextValue}`);
      if (nextValue === '') navigate(`/chat`);
    },
    [navigate]
  );

  const customDebounce = useMemo(
    () => debounceFunction((nextValue) => handleSearchQuery(nextValue), SEARCH_DELAY),
    [handleSearchQuery]
  );

  const handleChange = (event) => {
    const nextValue = event.target.value;
    customDebounce(nextValue);
  };

  const logOut = () => {
    localStorage.clear();
    navigate('/login');
  };

  return (
    <StyledChatBarHeader>
      <div className="d-flex">
        <div className="left-box">
          <Link to={'/'} className="current-user-link">
            <img src={ProfileUserAvatar} alt="current-user" className="current-user" />
          </Link>
          <Link to={'/'}>
            <Icon type="refresh" />
          </Link>
        </div>
        <div className="right-box">
          <div>
            <h4 onClick={logOut}>log out</h4>
          </div>
        </div>
      </div>
      <div className="search-form">
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="form-control">
            <div className="search-box">
              <Icon type="search" />
            </div>
            <input
              onChange={handleChange}
              defaultValue={searchVal}
              type="text"
              placeholder="Search or start a new chat"
            />
          </div>
        </form>
      </div>
    </StyledChatBarHeader>
  );
}

export default ChatBarHeader;
