import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveCard from './components/Card/cardContainer';

function App() {
  return (
    <div className="App">
     <ResponsiveCard
        header={<h2>Card Header</h2>}
        body={<p>This is the card body content.</p>}
        footer={<p>Card Footer</p>}
        width="300px"
        shadow={true}
      />
    </div>
  );
}

export default App;
