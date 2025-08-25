import { useState, useEffect } from 'react'
import './App.css'
import grad from './assets/mezuniyet_2.jpg'
import github_logo from './assets/GitHub_Logo_White.png'
import linkedin_logo from './assets/LI-In-Bug.png'
import background from './assets/background_2.jpeg'
import Navbar from '../components/Navbar.jsx'
import Projects from '../components/Projects.jsx'
import CaseStudies from '../components/CaseStudies.jsx'
import Photos from '../components/Photos.jsx'

function Home({ rightTransform, leftTransform, isMobile }) {
  return(
    <div className="content">
        <div style={{backgroundImage: `url(${background})`, backgroundSize: 'cover', backgroundPosition: 'center', height: '80vh', position: 'relative'}}>
          <div style={{margin: 'auto', display: 'block', paddingTop: '5%', overflow: 'hidden'}} className="row">
          <div className='col' style={leftTransform}>
            <p style={{textAlign: 'center', color: 'var(--text-sila)'}} className='tourney-header-thin'>SILA</p>
          </div>
          <div className='col' style={rightTransform}>
            <p style={{textAlign: 'center', color: 'var(--text-sila)'}} className='tourney-header-thick'>OZEL</p>
          </div>
        </div>
        </div>
        <div className='next-section'>
          <div id='about' className='row'>
            <div className='col-md-3'>
              <img style={{ maxWidth: '100%', height: '20rem', width: 'auto', borderRadius: '50%'}} src={grad} alt='Description of image'/>
            </div>
            <div style={{textAlign: 'left'}} className='col'>
              <h3>About Me</h3>
              <p className='about-me'>Hi! I'm Sila, a recent computer science graduate from Bilkent University. I love designing apps and websites. This is my personal website where you can get more information about me! Keep scrolling or navigate to the section you are interested in.</p>
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
        <div id='projects' className='projects-section'>
          <CaseStudies/>
          <Projects/>
        </div>
        <div id='photos' className='photos-section'>
          <Photos/>
        </div>
        <div style={{ width: '90vw', margin: '0 auto', paddingTop: '10vh'}} className='contact' id='contact'>
          <h2>Contact Me</h2>
          <p style={{marginBottom: 0}}>If you would like to get in touch, feel free to reach out via email at <a href='mailto:sila.ozel.cs@gmail.com'>sila.ozel.cs@gmail.com</a>.</p>
          <p>I'm always open to discussing new opportunities, collaborations, or just connecting! You can also give some feedback on my work.</p>
          <img style={{maxWidth: '100%', height: 'auto', width: '20%'}} src='stressed_panda.JPG' alt='Stressed Panda' />
          <p>I might be a bit stressed, but I'm always here to chat!</p>
        </div>
      </div>
  );
}

function App() {
  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [mode, setMode] = useState('dark');
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  const toggleMode = () => {
    setMode((prevMode) => (prevMode === 'dark' ? 'light' : 'dark'))
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
    backgroundColor: 'var(--background-color-light)',
    color: '#000',
  } : {
    backgroundColor: 'var(--background-color-dark)',
    color: '#E9E9E9',
  }
  return (
    <div className="app-container" style={styles}>
      <Navbar/>
      <Home rightTransform={rightTransform} leftTransform={leftTransform} isMobile={isMobile} />
    </div>
  )
}

export default App
