import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

function AlbumsList() {
  const { userId } = useParams();
  const [albums, setAlbums] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
      .then(response => response.json())
      .then(data => {
        setAlbums(data);
        setLoading(false);
      })
      .catch(error => {
        console.error('ERR', error);
        setLoading(false);
      });
  }, [userId]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Альбомы</h1>
      {albums.map(album => (
        <div key={album.id}>
          <p>{album.title}</p>
          <Link to={`/photos/${album.id}`}>Фото</Link>
        </div>
      ))}
    </div>
  );
}

export default AlbumsList;
