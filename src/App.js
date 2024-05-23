import logo from './logo.svg';
import About from './About';
import Skills from './Skills';
import Experience from './Experience';
import Education from './Education';
import Portfolio from './Portfolio';
import Contacts from './Contacts';

function App() {
  return (
    <div class="home">
    <p id="title">
        Hello, I am 
    </p>
    <p id="name">
        Ajai Sharan Velmurugan
    </p>
    <p id="developer">
        A PASSONATE SOFTWARE DEVELOPER
    </p>

    <About />
    <Skills />
    <Experience />
    <Education />
    <Portfolio />
    <Contacts />
  </div>

  
  );
  
  

}

export default App;
