import React, { useEffect, useState } from 'react';
import "./style.css";
import CardContainer from '../components/Card/cardContainer';
import { getUserData } from '../helpers/utils';
import {redirect} from "react-router-dom"

const Profile = ({userData={
    email: "", 
    password: "",
    username: ""
}}) => {

  const [userDataStorage, setUserDataStorage] = useState<any>({
    expiry: 10000
  });
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
    if(localStorage) {
      const current = getUserData();
      setUserDataStorage(current)
      console.log({current})
      if(!current || current.expiry < new Date().getTime())  {
        redirect("/signup")
      }
    }
     else {
      redirect("/signup")
     }
  }, [])

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
        </div>
      }
      shadow
      footer={null}
    />
  );
};

export default Profile;
