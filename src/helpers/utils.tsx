import axios from "axios";

const storeUserDataWithExpiry = (email: string, username: string, password: string) => {
    try {
        const now = new Date().getTime();
        const expiryTime = now + 60000;
        const userData = {
        email,
        username,
        password,
        expiry: expiryTime,
        };
        localStorage.setItem('user-data', JSON.stringify(userData));
    } catch (error) {
        console.error('Error storing user data:', error);
    }
};

const getUserData = () => {
    try {
        const userData = localStorage.getItem('user-data');
        if (!userData) {
        return null;
        }
        const userDataObj = JSON.parse(userData);
        const now = new Date().getTime();
        if (now > userDataObj.expiry) {
        localStorage.removeItem('user-data');
        return null;
        }
        return userDataObj;
    } catch (error) {
        console.error('Error retrieving user data:', error);
        return null;
    }
};


const validateAccessToken = async (accessToken:string) => {
  try {
    const response = await axios.get(`https://www.googleapis.com/oauth2/v3/tokeninfo?access_token=${accessToken}`);
    const tokenInfo = response.data;

    if (tokenInfo.aud === process.env.REACT_APP_OAUTH_CLIENT_ID) {
      console.log('Access token is valid');
      return true 
    }
  } catch (error) {
    console.error('Error validating access token:', error);
  }
  return false;
};

export  {
    storeUserDataWithExpiry,
    getUserData,
    validateAccessToken
}