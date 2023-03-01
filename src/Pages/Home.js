import { useEffect, useState } from "react";

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
        <h1 className="title"> A Lensational </h1> 
        <h2> The best free stock of photos shared by creators.</h2>

        
         <input className="search-container" 
                type="text" 
                placeholder="search for photos"
                value={value} 
                onChange={handleChange} />

         <button onClick={() => onSearch(value)} style={{backgroundColor:" rgb(67, 213, 246)",
                                                         borderRadius:"15px", 
                                                         position:"relative",
                                                         top:"30px",
                                                         left:"550px"}}>Search</button>
         
          <div className="collection-container">
            {/* let photoList = photo.filter((x) => x.src. === symbol) */}

            
             {photo.map(x =>  
             <>     
               {/* <h2>{x.photographer}</h2>  */}
               <div className="img-row">
                 <img src= {x.src.original} />   
               </div> 
            </>      
             )}

          </div>
        
      </div>
    )
}

export default Home;