import Footer from "../components/Footer";
import Header from "../components/Header";

const Homepage = () => {
  return (
    <div className="home">
      <Header />
      <video autoPlay muted loop id="hero-banner">
        <source
          src="https://videos.pexels.com/video-files/20600550/20600550-uhd_3840_2160_30fps.mp4"
          type="video/mp4"
        ></source>
      </video>
      <div className="hero-text">
        <h2>Welcome to NexTrip!</h2>
        <p>Let&apos;s plan your next trip together!</p>
        <button>Get started</button>
      </div>
      <p>Homepage will be here.</p>
      <Footer />
    </div>
  );
};

export default Homepage;
