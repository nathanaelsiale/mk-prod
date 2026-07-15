import React from 'react';
import Navbar from '../components/navbar';
import Gallery from '../components/gallery';
import ContactButton from '../components/contactbutton';
import '../styles/home.css';
import { Link } from 'react-router-dom';
import pic from '../assets/pic.webp';


export default function Home() {
  return (
    <>
      <Navbar />

      <section id="home" className="section hero">
        <div className='welcomeword'>
        <h2>MK-Prod photographie professionnelle</h2>
        <p>Derrière chaque image se cache une histoire, un frisson, ou un souvernir.<br></br>
        Parce que chaque instant est unique, capturez vos moments inoubliables<br />
        avec l'expertise de MK-Prod.
        Confiez-nous vos histoire, nous en ferons des images éternelles.</p>
        </div>
        <img src={pic} alt='imageacceuil' className='imgfont'></img>

      </section>

      <section id="portfolio" className="section">
        <h2>Portfolio</h2>
        <p className='txt'>Decouvrez nos réalisations et laissez-vous inspirer par nos créations uniques.</p>
        <Gallery limit={12} />
        <Link to="/gallery" className="btn">Voir plus</Link>
      </section>

      <section id="contact" className="section">
        <h2>Contact</h2>
        <p>Contactez nous via whatsapp et nous serons ravi de repondre a votre demande; disponible H24.</p>
        <ContactButton />
      </section>
    </>
  );
}
