import './App.css';
import { Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import About from './components/About';
import Review from './components/Review';
import Services from './components/Services';
import Footer from './components/Footer';
import Contact from './components/Contact';
import Enroll from './components/Enroll';
import Gallery from './components/Gallery';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/reviews' element={<Review/>}></Route>
        <Route path='/services' element={<Services/>}></Route>
        <Route path='/contact' element={<Contact/>}></Route>
        <Route path='/enroll' element={<Enroll/>}></Route>
        <Route path='/gallery' element={<Gallery/>}></Route>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
