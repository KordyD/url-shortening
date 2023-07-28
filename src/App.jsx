import './App.scss';
import Advertising from './modules/Advertising/Advertising';
import Header from './modules/Header/Header';
import Hero from './modules/Hero/Hero';
import Shortening from './modules/Shortening/Shortening';

function App() {
  return (
    <>
      <Header />

      <Hero />

      <Shortening />

      <Advertising />

      <div>
        <h1>Boost your links today</h1>
        <button>Get Started</button>
      </div>

      <footer>
        <div>
          <h3>Features</h3>
          <ul>
            <li>Link Shortening</li>
            <li>Branded Links</li>
            <li>Analytics</li>
          </ul>
        </div>
        <div>
          <h3>Resources</h3>
          <ul>
            <li>Blog</li>
            <li>Developers</li>
            <li>Support</li>
          </ul>
        </div>
        <div>
          <h3>Company</h3>
          <ul>
            <li>About</li>
            <li>Our Team</li>
            <li>Careers</li>
            <li>Contact</li>
          </ul>
        </div>

        <div>
          <a href='#' className='logo-fb' role='img' aria-label='facebook'>
            <img src='/images/icon-facebook.svg' />
          </a>
          <a href='#' className='logo-tw' role='img' aria-label='twitter'>
            <img src='/images/icon-twitter.svg' />
          </a>
          <a href='#' className='logo-pt' role='img' aria-label='pinterest'>
            <img src='/images/icon-pinterest.svg' />
          </a>
          <a href='#' className='logo-inst' role='img' aria-label='instagram'>
            <img src='/images/icon-instagram.svg' />
          </a>
        </div>
      </footer>

      {/* <div className='attribution'>
        Challenge by{' '}
        <a href='https://www.frontendmentor.io?ref=challenge' target='_blank'>
          Frontend Mentor
        </a>
        . Coded by <a href='#'>Your Name Here</a>.
      </div> */}
    </>
  );
}

export default App;
