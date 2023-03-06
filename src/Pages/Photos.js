import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// //import { getAllPhotos } from "./Pages/Api";
import Collection from "./Collection";
import bubble from "../images/bubble.jpg";

function Photos(props) {
    const [photo, setPhoto] = useState([]);
    //let [details, setDetails] = useState("details");

    let { id } = useParams()

    //let navigate = useNavigate()

    // let photoList = photo.filter((x) => x.id === id)
    
    let url = `https://api.pexels.com/v1/photos/${id}`
    


    useEffect(() => {
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
                setPhoto(data)
                console.log(data)
            } catch(error)
            {
                console.log(error)
            }
    
           }
    
        getPhoto();
      }, []);
      console.log(photo);

      
      if(photo != undefined && photo.src != undefined )  {
        return(
            <div className="photo-container">
                <h1 className="photo-title" > Photo Details </h1>
                <div className="photo-details">
                    <ul>
                      <h2>{id}</h2>  
                      {/* <h3>{photo?.photographer}</h3> */}
                      <h1>Name: {photo.photographer}</h1> 
                      {/* { <img src = {photo.src.original} alt = {photo.alt} style={{display:"flex",justifyContent:"center", alignItems:"center",
                                                                                    width:"400px",height: "400px", objectFit:"cover"}}/> } */}
                      <p>Photo Name: {photo.alt}</p> 
                      <p>Photographer ID: {photo.photographer_id}</p> 
                      <p>Width of Photo: {photo.width}</p>
                      <p>Height of Photo: {photo.height}</p>
                      <p>Photographer Page: {photo.photographer_url}</p>
                      <p>Photo Page: {photo.url}</p>
                      <div className="bubbles">
                        <img src={bubble} alt={bubble}/>
                        <img src={bubble} alt={bubble}/>
                        <img src={bubble} alt={bubble}/>
                        <img src={bubble} alt={bubble}/>
                        <img src={bubble} alt={bubble}/>
                        <img src={bubble} alt={bubble}/>                    
                        <img src={bubble} alt={bubble}/>                    
                        <img src={bubble} alt={bubble}/>                    
                      </div>
                      
    
                    </ul> 
                     
                </div> 
              
                {/* <ul>
                    <li> The Photo Resource </li>
                    <li> Search for Photos </li>
                    <li> Curated Photos </li>
                    <li> Get a Photo </li>
                </ul> */}
            </div>
        )
    
    }

}



export default Photos;