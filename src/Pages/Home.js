import { useEffect, useState } from "react";
import cam from "../images/cam.jpg";
import InputAdornment from '@mui/material/InputAdornment';
import { Icon, IconButton, styled, TextField } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';

function Home() {

    const [photo, setPhoto] = useState([]);
    let [value, setValue] = useState("");
    let [search, setSearch] = useState("people");
    
    let url = `https://api.pexels.com/v1/search?query=${search}`
    const getPhoto = async() => {
        const options = {
            method: 'GET',
            headers: {
                Authorization: 'FQRDUBDYjymHr05aBGX3ni9ZU3Qs9AGgPFZF9Fw4xDpSbVxSfaI506PL',
                // 'X-RapidAPI-Key': 'SIGN-UP-FOR-KEY',
                // 'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
            }
        };
        
        // fetch(url, options)
        //     .then(response => response.json())
        //     .then(response => console.log(response))
        //     .catch(err => console.error(err));

        try{
            const response = await fetch(url, options)
            const data = await response.json()
            setPhoto(data.photos)
            console.log(data.photos)
        } catch(error)
        {
            console.log(error)
        }
        console.log(photo)
       }


    useEffect(() => {
        
        getPhoto()     
      }, [search]);


    // useEffect((function),[variable])

    function handleChange(event) {
      setValue(event.target.value);
    }
  
    function onSearch() {
      setSearch(value)
    }  
    
    return(
      <div className="home-container"> 

      <div className="header">
        <img className="logo" src={cam} alt={cam}/> 
        <h1 className="title"> Lensational </h1> 
      </div>

      <div className="search">
        <h2> The best free stock of photos shared by creators.</h2>


        <TextField onChange={handleChange} style = {{width: 400, height: 30, border: 3}}
         label="Search for photos (nature,flowers,cats..)"
          InputProps={{
            endAdornment: (
             <InputAdornment>
              <IconButton onClick={() => onSearch(value)}>
                <SearchIcon/>
              </IconButton>
             </InputAdornment>
            )
          }}
        />
      </div>

      <div className="body">
      {photo.map(x =>  
             <>     
               {/* <h2>{x.photographer}</h2>  */}
               <div className="home-img">
                 <img src= {x.src.original} />   
               </div> 
              </>      
             )}


      </div>
        
          <div >

            

          </div>
        
      </div>
    )
}

export default Home;