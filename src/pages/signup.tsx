import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { ALIGNMENT_TYPE } from '../interfaces/components';
import {
  validateUsername,
  validateEmail,
  validatePassword,
  validateConfirmPassword,
} from '../helpers/validations';
import { setAccessToken, updateErrors, updateField } from '../reduxStore/actions/signUpActions';
import LabelWithValue from '../components/LabelWithValue';
import { storeUserDataWithExpiry } from '../helpers/utils';
import "./style.css";
import CardContainer from '../components/Card/cardContainer';
import {useNavigate} from "react-router-dom";
import {GoogleLogin} from "react-google-login";
import { gapi } from 'gapi-script';

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const currentState = useSelector((state: any) => {
    return state
  });

  const handleInputChange = (field: string, value: string) => {
    dispatch(updateField(field, value));
  };

  const handleValidation = () => {
    const newErrors: { [key: string]: string | null } = {};
    newErrors.username = validateUsername(currentState?.username);
    newErrors.email = validateEmail(currentState && currentState?.email);
    newErrors.password = validatePassword(currentState && currentState?.password);
    newErrors.confirmPassword = validateConfirmPassword(
      currentState && currentState?.password,
      currentState && currentState?.confirmPassword
    );
    dispatch(updateErrors(newErrors));
  };

  const clearForm = () => {
    dispatch(updateField('username', ''));
    dispatch(updateField('email', ''));
    dispatch(updateField('password', ''));
    dispatch(updateField('confirmPassword', ''));
  }

  const navigate = useNavigate()

  const onSuccess = (response: any) => {
    console.log("On Scucess", response.profileObj)
    const profile = response.profileObj;
    storeUserDataWithExpiry(
      profile?.email,
      profile?.name,
      "password"
    );
    dispatch(setAccessToken(response.tokenId));
    navigate("/profile")
  }

  const onFailure = (response: any) => {
    console.log("On Failure", response)
  }

  const handleSubmit = () => {
    
    handleValidation();

    if (
      !currentState?.errors.username &&
      !currentState?.errors.email &&
      !currentState?.errors.password &&
      !currentState?.errors.confirmPassword
    ) {
      storeUserDataWithExpiry(
        currentState?.email,
        currentState?.username,
        currentState?.password
      );
      clearForm();
      navigate("/profile")
    } else {
      console.log('Validation errors exist, data not stored.');
    }
  };

  console.log({currentState})

  useEffect(() => {
    function start() {
      gapi.client.init({
        clientId: process.env.REACT_APP_OAUTH_CLIENT_ID,
        scope: 'email',
      });
    }

    gapi.load('client:auth2', start);
  }, []);
  
  return (
    <CardContainer
      header={
        <h3> Sign Up </h3>
      }
      body={
        <div>
          <LabelWithValue
            label="Username"
            alignment={ALIGNMENT_TYPE.VERTICAL}
            separator=":"
            valueComponent={
              <input
                className='input-style'
                type="text"
                value={currentState && currentState?.username}
                onChange={(e) => handleInputChange('username', e.target.value)}
              />
            }
            errorMessage={currentState && currentState?.errors.username}
            isRequired
          />

          <LabelWithValue
            label="Email"
            alignment={ALIGNMENT_TYPE.VERTICAL}
            separator=":"
            valueComponent={
              <input
                className='input-style'
                type="text"
                value={currentState && currentState.email}
                onChange={(e) => handleInputChange('email', e.target.value)}
              />
            }
            errorMessage={currentState && currentState.errors.email}
            isRequired
          />

          <LabelWithValue
            label="Password"
            alignment={ALIGNMENT_TYPE.VERTICAL}
            separator=":"
            valueComponent={
              <input
                className='input-style'
                type="password"
                value={currentState && currentState.password}
                onChange={(e) => handleInputChange('password', e.target.value)}
              />
            }
            errorMessage={currentState && currentState.errors.password}
            isRequired
          />

          <LabelWithValue
            label="Confirm Password"
            alignment={ALIGNMENT_TYPE.VERTICAL}
            separator=":"
            valueComponent={
              <input
                className='input-style'
                type="password"
                value={currentState && currentState.confirmPassword}
                onChange={(e) =>
                  handleInputChange('confirmPassword', e.target.value)
                }
              />
            }
            errorMessage={currentState && currentState.errors.confirmPassword}
            isRequired
          />

          <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button className="custom-button purple-button" onClick={handleValidation}>
              Validate
            </button>
            <button className="custom-button blue-button" onClick={handleSubmit}>
              Submit
            </button>
            <button className="custom-button grey-button" onClick={clearForm}>
              Clear
            </button>
            <GoogleLogin
              clientId={process.env.REACT_APP_OAUTH_CLIENT_ID ?? ""}
              buttonText="Sign Up With Google"
              onSuccess={onSuccess}
              onFailure={onFailure}
              cookiePolicy={'single_host_origin'}
            />
          </div>
        </div>
      }
      footer={null}
      width='600px'
      shadow
    />    
  );
};

export default Signup;
