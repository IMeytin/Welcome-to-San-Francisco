import AboutCity from './AboutCity';
import './App.css';
import Checklist from './Checklist';
import NavBar from './NavBar';
import { Slider } from './Slider';

function App() {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      <main>
        <AboutCity />
        <div className='container' id='placesChecklist'>
          <h2 className="header">Top 5 Most See places & Checklist</h2>
        </div>
        <div className='sliderChecklist-container'>
          <Slider />
          <Checklist />
        </div>
      </main>
      <footer>
        <p>All images were taken from <a href="https://unsplash.com/">unsplash.com</a></p>
      </footer>
    </div>
  );
}

export default App;
