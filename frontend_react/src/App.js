
import './App.css';
import {About, Footer, Header, Skills, Project, Testimonial }from './container';
import {Navbar} from './components/Navbar';

const App=() =>{
  return (
    <div className='app'>
      <Navbar />
      <Header/>
      <About/>
      <Footer/>
      <Skills/>
      <Project/>
      <Testimonial/>
      
    </div>  
  );
}

export default App;
