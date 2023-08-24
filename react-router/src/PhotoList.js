import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

function PhotosList() {
  const { albumId } = useParams();
  const [photos, setPhotos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
      .then(response => {
        setPhotos(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('ERR', error);
        setLoading(false);
      });
  }, [albumId]);

  if (loading) {
    return <div>Загрузка...</div>;
  }

  return (
    <div>
      <h1>Фото из альбома</h1>
      {photos.map(photo => (
        <div key={photo.id}>
          <img src={photo.thumbnailUrl} alt={photo.title} />
        </div>
      ))}
    </div>
  );
}

export default PhotosList;
