import React from 'react';
import logo from './logo.svg';
import './App.css';
import ResponsiveCard from './components/Card/cardContainer';
import LabelWithValue from './components/LabelWithValue';
import { ALIGNMENT_TYPE } from './interfaces/components';

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

      <LabelWithValue
        label="Username"
        alignment={ALIGNMENT_TYPE.VERTICAL}
        separator={":"}
        valueComponent={<input type="text" />}
        helperText="Enter your username"
        isRequired={true}
      />
    </div>
  );
}

export default App;
