import React from 'react';
import LandingPage from './components/LandingPage';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Achievements from './components/Achievements';
import Certifications from './components/Certifications';
import ContactForm from './components/ContactForm';

const App = () => (
  <>
    <LandingPage />
    <Skills />
    <About />
    
    <Projects />
    <Achievements />
    <Certifications />
    <ContactForm />
  </>
);

export default App;