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


export  {
    storeUserDataWithExpiry,
    getUserData
}