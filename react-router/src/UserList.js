import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
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
          <Link to={`/albums/${user.id}`}>Альбом</Link>
        </div>
      ))}
    </div>
  );
}

export default UsersList;
