import "../../styles/home.css";
import Typed from "react-typed";

export default function Home() {
  return (
    <section>
      <div className="home-container">
        <h4>Hi there,</h4>
        <div className="intro-text">
          <h2>I'm</h2>
          <h2> Duffy Original</h2>
        </div>
        <div className="animated-text">
          <h2>A</h2>
          <Typed
            strings={[
              "Professional Coder",
              "UI / UX Designer",
              "Backend Developer",
            ]}
            typeSpeed={100}
            backSpeed={100}
            backDelay={100}
            startDelay={100}
            className="animated-content"
            loop></Typed>
        </div>
        <button className="home-container-button">Hire Me</button>
      </div>
    </section>
  );
}
