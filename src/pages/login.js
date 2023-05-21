import React, { useState } from 'react';
import CenterBox from '../UI/CenterBox';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../store/auth-provider';

const StyledForm = styled.form`
  .form-control {
    margin-top: 16px;

    input {
      margin-top: 8px;
      display: block;
      outline: none;
      width: -webkit-fill-available;
      padding: 12px 16px;
      border: 1px solid #d1e4e8;
      border-radius: 5px;
      font-size: 16px;
      line-height: 24px;

      &::placeholder {
        color: #9393c1;
      }
    }

    button {
      background-color: #09132c;
      color: white;
      font-size: 16px;
      line-height: 24px;
      border: none;
      border-radius: 5px;
      padding: 12px 16px;
      width: -webkit-fill-available;
      cursor: pointer;
    }
  }
`;

function Login() {
  const [idInstance, setIdInstance] = useState('');
  const [apiTokenInstance, setApiTokenInstance] = useState('');
  const { setAuthCredentials } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (idInstance !== '' && apiTokenInstance !== '') {
      setAuthCredentials(idInstance, apiTokenInstance);
      setIdInstance('');
      setApiTokenInstance('');
      navigate('/chat');
    }
  };
  return (
    <CenterBox>
      <h3>Login for Whatsapp | GREEN API</h3>
      <StyledForm onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="idInstance">Enter idInstance from green-api.com</label>
          <input
            defaultValue={idInstance}
            onChange={(e) => setIdInstance(e.target.value)}
            type="text"
            id="idInstance"
            placeholder={'idInstance'}
          />
        </div>
        <div className="form-control">
          <label htmlFor="apiTokenInstance">Enter apiTokenInstance from green-api.com</label>
          <input
            defaultValue={apiTokenInstance}
            onChange={(e) => setApiTokenInstance(e.target.value)}
            type="text"
            id="apiTokenInstance"
            placeholder={'apiTokenInstance'}
          />
        </div>
        <div className="form-control">
          <button type="submit">Submit</button>
        </div>
      </StyledForm>
    </CenterBox>
  );
}

export default Login;
