import React from 'react';
import { Route, Switch } from 'react-router-dom';
import UsersList from './UserList';
import AlbumsList from './AlbumList';
import PhotosList from './PhotoList';

function App() {
  return (
    <Switch>
      <Route path="/" exact component={UsersList} />
      <Route path="/albums/:userId" component={AlbumsList} />
      <Route path="/photos/:albumId" component={PhotosList} />
    </Switch>
  );
}

export default App;
