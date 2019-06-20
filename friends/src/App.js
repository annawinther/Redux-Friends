import React from 'react';
import Login from './components/Login';
import './App.css';
import FriendList from './components/FriendsList';

function App() {
  return (
    <div className="App">
      <FriendList />
     <Login />
    </div>
  );
}

export default App;
