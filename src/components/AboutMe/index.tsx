import { AboutMeContent } from "./content";
import Image from './image.png'
import './style.css';

function AboutMeSection() {

  return (
    <section className="aboutme-section">
      <div className="aboutme-container">
        <div className="aboutme-container-left">
          <img src={Image} alt="" />
        </div>
        <div className="aboutme-container-right">
          <div className="aboutme-content">
            <h2>I am a Title</h2>
            <p>{AboutMeContent}</p>
          </div>
          <div className="aboutme-socials">
            <a target="_blank" href=""><i className="bi bi-instagram"></i></a>
            <a target="_blank" href="https://github.com/guiigle"><i className="bi bi-github"></i></a>
            <a target="_blank" href="https://www.linkedin.com/in/gui-oliveira-dev/"><i className="bi bi-linkedin"></i></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection;
// This component serves as a section of the application that provides information about the author or creator of