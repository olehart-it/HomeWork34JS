import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then(response => {
        setUsers(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('ERR', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Список пользователей</h1>
      {users.map(user => (
        <div key={user.id}>
          <p>{user.name}</p>
          <NavLink to={`/albums/${user.id}`}>Альбом</NavLink>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
