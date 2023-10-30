import React from 'react';
import SignupForm from './pages/signup';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Profile from './pages/profile';
import { getUserData } from './helpers/utils';

function App() {
  const userData = useSelector((state: any) => state || getUserData() );

  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={
          <SignupForm/>
        } />
        <Route
          path="/profile"
          element={<Profile userData={userData}/>}
        />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
