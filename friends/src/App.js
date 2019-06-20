import React from 'react';
import Login from './components/Login';
import './App.css';
import FriendListView from './views/FriendListView';

function App() {
  return (
    <div className="App">
      <FriendListView/>
      <Login />
    </div>
  );
}

export default App;
