import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
//import { getAllPhotos } from "./Pages/Api";

function Photos() {
    const [photo, setPhoto] = useState([]);
    //let [value, setValue] = useState("");
    let [details, setDetails] = useState("people");
    
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


    return(
        <div> Photo page 

                {/* {photos.map(photo =>
                <Link to={`/photos/${photo.symbol}`}>
                    <h2>{photo.id}</h2>
                </Link> */}
            
            {/* //)} */}
            <ul>
                <li> The Photo Resource </li>
                <li> Search for Photos </li>
                <li> Curated Photos </li>
                <li> Get a Photo </li>
            </ul>
        </div>
    )
}

export default Photos;