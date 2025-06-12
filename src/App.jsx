import { useState, useEffect, useRef } from 'react'
import './App.css'
import grad from './assets/grad.JPG'
import github_logo from './assets/GitHub_Logo.png'
import linkedin_logo from './assets/LI-In-Bug.png'
import Photos from '../components/Photos.jsx'
import background from './assets/background.jpeg'

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [mode, setMode] = useState('light');

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
    document.body.className = mode
  }

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      const maxScroll = window.innerHeight * 0.3;
      const percentage = Math.min((scrollPosition / maxScroll) * 100, 100);
      setScrollPercentage(percentage);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    const observers = [];
    const fadeElements = document.querySelectorAll('.fade-up');
    
    const observerCallback = (entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    };

    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    fadeElements.forEach(element => {
      const observer = new IntersectionObserver(observerCallback, observerOptions);
      observer.observe(element);
      observers.push(observer);
    });

    return () => {
      observers.forEach(observer => observer.disconnect());
    };
  }, []);

  const leftTransform = {
    transform: `translateX(${-scrollPercentage}%)`,

  };

  const rightTransform = {
    transform: `translateX(${scrollPercentage}%)`,
  };

  const styles = mode === 'light' ? {
    backgroundColor: '#FFF4E8',
    color: '#000',
  } : {
    backgroundColor: '#151413',
    color: '#E9E9E9',
  }
  return (
    <div style={styles}>
      <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '75vh', position: 'relative'}}>
        <div style={{paddingLeft: '25%', paddingRight: '25%', paddingTop: '10%', overflow: 'hidden'}} className="row">
        <div className='col' style={leftTransform}>
          <p style={{textAlign: 'center'}} className='tourney-header-thin'>SILA</p>
        </div>
        <div className='col' style={rightTransform}>
          <p style={{textAlign: 'center'}} className='tourney-header-thick'>OZEL</p>
        </div>
      </div>
      </div>
      {/* Add next sections here */}
      {/* <div className='next-section'>
        <p className='fade-up'>Welcome to my personal website!</p>
        <div className='fade-up' style={{ transitionDelay: '0.2s' }}>
          <h2>About Me</h2>
          <p>Software Developer & Designer</p>
        </div>
      </div> */}
      <div className='next-section'>
        <div className='row'>
          <div className='col-md-3'>
            <img style={{ maxWidth: '100%', height: '20rem', width: 'auto', borderRadius: '50%'}} src={grad} alt='Description of image'/>
          </div>
          <div style={{textAlign: 'left'}} className='col'>
            <h3>About Me</h3>
            <p className='about-me'>Hi! I'm Sila, a recent computer science graduate from Bilkent University. This is my personal website where you can get more information about me! Keep scrolling or navigate to the section you are interested in.</p>
            <div className='row'>
              <div className='col'>
                <div className='social-icons'>
                  <a href='https://github.com/sila-ozel' target='_blank' rel='noopener noreferrer'>
                    <img src={github_logo} alt='GitHub Logo' />
                  </a>
                  <a href='https://www.linkedin.com/in/s%C4%B1la-%C3%B6zel-0b9625242/' target='_blank' rel='noopener noreferrer'>
                    <img src={linkedin_logo} alt='LinkedIn Logo' />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='photo-gallery'>
        <Photos/>
      </div>
      
    </div>
  )
}

export default App
