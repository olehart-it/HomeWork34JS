import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import UsersList from './UserList';
import AlbumsList from './AlbumList';
import PhotosList from './PhotoList';

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={UsersList} />
        <Route path="/albums/:userId" component={AlbumsList} />
        <Route path="/photos/:albumId" component={PhotosList} />
      </Switch>
    </Router>
  );
}

export default App;
