import './App.scss';
import Advertising from './modules/Advertising/Advertising';
import Boost from './modules/Boost/Boost';
import Footer from './modules/Footer/Footer';
import Header from './modules/Header/Header';
import Hero from './modules/Hero/Hero';
import Shortening from './modules/Shortening/Shortening';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />

        <Shortening />

        <Advertising />

        <Boost />
      </main>

      <Footer />
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
