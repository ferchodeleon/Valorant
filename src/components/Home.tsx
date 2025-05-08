import "animate.css";
import { useTranslation } from "react-i18next";

import VideoBackground from "../assets/videos/video-background.mp4";
import "../styles/Home.css";

const Home = () => {
  const { t } = useTranslation();
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
          {t("welcome")}
        </p>
        <p className="home-description animate__animated animate__fadeIn">
          {t("descriptionHome")}
        </p>
      </div>
    </section>
  );
};

export default Home;
