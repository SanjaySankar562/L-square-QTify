import Hero from './components/Hero/Hero.jsx';
import Navbar from './components/Navbar/Navbar.jsx';
import Section from './components/Section/Section.jsx';
import FAQ from './components/FAQ/FAQ.jsx';
import Songs from './components/Songs/Songs.jsx';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Section dataSource="https://qtify-backend.labs.crio.do/albums/top" title="Top Album" />
      <Section dataSource="https://qtify-backend.labs.crio.do/albums/new" title="New Album" />
      <Songs/>
      <FAQ/>
    </>
  );
}

export default App;
