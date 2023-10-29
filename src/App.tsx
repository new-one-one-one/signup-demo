import React from 'react';
import SignupForm from './pages/signup';
import './App.css';
import CardContainer from './components/Card/cardContainer';

function App() {
  return (
    <div className="App">
      <CardContainer
        header={
          <h3>
            Sign Up 
          </h3>
        }
        body={
          <SignupForm/>
        }
        footer={null}
        width='600px'
        shadow
      />
    </div>
  );
}

export default App;
