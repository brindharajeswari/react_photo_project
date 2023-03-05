import { Route, Routes, Navigate } from "react-router-dom";
import './App.css';
import Nav from "./Components/Nav";

import Collection from './Pages/Collection';
import Home from './Pages/Home';
import Photos from './Pages/Photos';
import MyPhotos from "./Pages/MyPhotos";
import Contact from "./Components/Contact";
// import { getAllPhotos } from "./Pages/Api";



function App() {
 

  return (
    <div className="App">
      <Nav />
       <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/myphotos" element={<MyPhotos />} />
        <Route path="/collection" element={<Collection />} />      
        <Route path="/collection/:id" element={<Photos />} />      
        <Route path="/contact" element={<Contact />} />    
      </Routes>
      
    </div>
  );
}

export default App;
