import "animate.css";

import VideoBackground from "../assets/videos/video-background.mp4";
import "../styles/Home.css";

const Home = () => {
  return (
    <section className="home-container">
      <video
        src={VideoBackground}
        autoPlay
        preload="metadata"
        loop
        muted
        playsInline
        className="home-video"
      />
      <div className="home-content">
        <p className="home-title animate__animated animate__fadeInLeft">
          Bienvenido a data Valorant
        </p>
        <p className="home-description animate__animated animate__fadeIn">
          Hola aquí podrás obtener diferentes datos del juego Valorant,
          selecciona la opción deseada arriba ☝️
        </p>
      </div>
    </section>
  );
};

export default Home;
