import React from 'react';
import {Form} from 'react-formio';
import './App.scss';


function App() {
  return (
    <>
      <div className="App">
          <div className="container" id="main">
            <Form src="https://btywzajnwlxpiym.form.io/erstbewilligung" />
          </div>
      </div>
    </>
  );
}

export default App;
