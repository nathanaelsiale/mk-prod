import Navbar from '../components/navbar';
import Gallery from '../components/gallery';

export default function GalleryPage() {
  return (
    <>
      <Navbar />
      <div style={{ paddingTop: "100px" }}>
        <h1 style={{ textAlign: "center" }}>Galerie complète</h1>
        <Gallery></Gallery>
      </div>
    </>
  );
}