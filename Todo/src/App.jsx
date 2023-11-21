import React, { useState } from 'react';
import List from './List';
import Form from './Form';
import MainTitle from './MainTitle';
import SecondTitle from './SecondTitle';
import './App.css'

function App() {

  return (
    <div>
      <MainTitle />
      <Form />
      <SecondTitle />
      <List />
    </div>
  )
}

export default App
