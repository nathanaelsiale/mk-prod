import { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/gallery.css';

export default function Gallery({ limit }) {
  const [photos, setPhotos] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/photos/')
      .then(res => {
        const data = limit ? res.data.slice(0, limit) : res.data;
        console.log(res.data);
        setPhotos(data);
      })
      .catch(err => console.log(err));
  }, [limit]);

  return (
    <div className="gallery">
      {photos.map(photo => (
        <div key={photo.id} className="card">
          <img src={photo.image} alt="photo" />
        </div>
      ))}
    </div>
  );
}