import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Section from './components/Section/Section.jsx';
import Accordion from './components/Accordion/Accordion.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section />
      <hr
        style={{ width: '100%', height: '2px', border: 0, backgroundColor: '#34C94B' }}
      />
      <Accordion />
    </>
  );
}

export default App;
