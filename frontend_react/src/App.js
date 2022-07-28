import logo from './logo.svg';
import './App.css';
import {About, Footer, Header, Skills, Project, Testimonial }from './container';

const App=() =>{
  return (
    <div className='app'>
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
