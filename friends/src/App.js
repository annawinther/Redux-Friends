import React from 'react';
import Login from './components/Login';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import FriendListView from './views/FriendListView';

import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
          <Route 
          exact path='/'
          render={() => {
            if (localStorage.getItem('token')){
              return (
              <FriendListView />
              );
            };
            return <Redirect to="login" />
          }} />

          <Route path='/login' component={Login} />
          {/* <Login /> */}
         
        </BrowserRouter>
    </div>
  );
}

export default App;
