import React, { useEffect, useState } from 'react';
import "./style.css";
import CardContainer from '../components/Card/cardContainer';
import { getUserData, validateAccessToken } from '../helpers/utils';
import {redirect, useNavigate} from "react-router-dom"
import { GoogleLogout, GoogleLogoutProps } from 'react-google-login';
import { useSelector } from 'react-redux';

const Profile = ({userData={
    email: "", 
    password: "",
    username: ""
}}) => {

  const [userDataStorage, setUserDataStorage] = useState<any>({
    expiry: 10000
  });

  const currentState = useSelector((state: any) => {
    return state
  });
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [isPasswordCorrect, setIsPasswordCorrect] = useState(false);

  const checkPassword = () => {
    const storedPassword = userData.password;
    if (password === storedPassword) {
      setIsPasswordCorrect(true);
    } else {
      setIsPasswordCorrect(false);
      alert('Password is incorrect');
    }
  };

  useEffect(() => {

      const checkAccessTokenValidity = async () => {
        if (currentState.accessToken) {
          try {
            // Validate the access token asynchronously
            const isValidAccess = await validateAccessToken(currentState.accessToken);
    
            // if (isValidAccess) {
            //   console.log("Access token is valid");
            //   // Continue with any other profile-related logic
            // } else {
            //   console.log("Access token is not valid");
            //   // Redirect the user to the login page or take appropriate action
            //   navigate("/");
            // }
          } catch (error) {
            console.error("Error while validating access token:", error);
          }
        }
      };
    
      checkAccessTokenValidity();    
    
    if(localStorage) {
      const current = getUserData();
      setUserDataStorage(current)
      console.log({current})
      if(!current || current.expiry < new Date().getTime())  {
        navigate("/")
      }
    }
     else {
      navigate("/")
     }
  }, [currentState.accessToken, navigate])

  return (
    <CardContainer
      width='500px'
      header={"Your Profile"}
      body={
        <div>
          <h2>User Profile</h2>
          <p>Email: {userDataStorage?.email}</p>
          <p>Username: {userDataStorage?.username}</p>
          <p>
            Password: {isPasswordCorrect ? userData.password || userDataStorage.password : '*********'}
          </p>
          {!isPasswordCorrect && (
          <div 
            style={{
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <input
                style={{
                  flex: 1,
                  height: 22,
                  borderRadius: 4
                }}
                className='input-style bordered'
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <button className="custom-button purple-button"onClick={checkPassword}>Reveal Password</button>
          </div>
          )}
          <GoogleLogout 
            clientId={process.env.REACT_APP_OAUTH_CLIENT_ID ?? ""}
            onLogoutSuccess={() => {
              navigate("/")
              console.log("Succes logout")
            }}
          />
        </div>
      }
      shadow
      footer={null}
    />
  );
};

export default Profile;
