import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav";
import About from './Pages/About';
import Collection from './Pages/Collection';
import Home from './Pages/Home';
import Photos from './Pages/Photos';
// import { getAllPhotos } from "./Pages/Api";



function App() {
 

  return (
    <div className="App">
      <Nav />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/about" element={<About />} />
        <Route path="/collection" element={<Collection />} />      
        <Route path="/collection/:id" element={<Photos />} />      
             
      </Routes>
      
    </div>
  );
}

export default App;
