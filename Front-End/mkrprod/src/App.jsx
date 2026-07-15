
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Home from './pages/home';
import GalleryPage from './pages/gallerypage';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<GalleryPage />} />
    </Routes>
  );
}

export default App;