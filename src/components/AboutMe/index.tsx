import perfilImg from './assets/MyImage.jpg'
import instagramImg from './assets/instagram.svg'
import linkedinImg from './assets/linkedin.svg'
import githubImg from './assets/github.svg';
import './styles.css';

function AboutMeSection() {
  return (
    <section className="about-me-section">
      <div className="about-me-container">
        <div className='about-container-left'>
          <img src={perfilImg} alt="" />
        </div>
        <div className='about-container-right'>
          <h3>Sobre Mim</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sed purus a ante vulputate aliquet non a diam. Cras non diam libero. Fusce sodales est sit amet ligula iaculis, sit amet ullamcorper nulla sagittis. Pellentesque eget hendrerit lacus. Donec condimentum facilisis massa a facilisis. Donec sed porttitor sem, eu vestibulum est. Quisque faucibus, elit commodo interdum tincidunt, lectus ante fermentum ante, vel rutrum libero magna eu nulla. In rhoncus, lacus non ultrices rutrum, lorem neque facilisis magna, at eleifend velit diam in risus. Ut commodo arcu ac luctus vulputate. Praesent volutpat dui in nibh accumsan, vel vulputate sapien luctus. Sed laoreet tellus tristique, venenatis est sit amet, iaculis libero. Sed molestie ligula augue, ut pulvinar magna dapibus non.</p>
          <div className="social-icons">
            <img src={instagramImg} alt="" />
            <img src={linkedinImg} alt="" />
            <img src={githubImg} alt="" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutMeSection;
// This file is part of the My Portfolio project.
