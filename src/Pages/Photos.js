import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
// //import { getAllPhotos } from "./Pages/Api";
import Collection from "./Collection";
import bubble from "../images/bubble.jpg";

function Photos(props) {
    const [photo, setPhoto] = useState([]);
    //let [details, setDetails] = useState("details");

    let { id } = useParams()

    // let navigate = useNavigate()

    // let photoList = photo.filter((x) => x.id === id)
    
    let url = `https://api.pexels.com/v1/photos/${id}`
    
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
            // console.log(data.src)
        } catch(error)
        {
            console.log(error)
        }
        console.log(photo)
       }


    useEffect(() => {
        
        getPhoto()     
      }, []);

    //   function goBack(){
    //     alert('test')
    //     navigate('..')
    // }

    //   const loaded = () => {
    //     return(
    //         <div>
    //             <h1>{photo.id}</h1>  
    //             <h2> {photo.photographer}</h2>
    //             {/* <button onClick={goBack}>Back</button> */}
    //         </div>
    //     )
    // }

    // const loading = () => {
    //     return(
    //         <div>Loading... </div>
    //     )

    // }

    // return photo ? loaded() : loading();
    //console.log(symbol)   




    return(
        <div className="photo-container">
            <h1> Photo Details </h1>
            <div className="photo-details">
                <ul>
                  <h2>{id}</h2>  
                  {/* <h3>{photo?.photographer}</h3> */}
                  <p>Name: {photo.photographer}</p> 
                  <p>Photo Name: {photo.alt}</p> 
                  <p>Photographer ID: {photo.photographer_id}</p> 
                  <p>Photo Width: {photo.width}</p>
                  <p>Photo Height: {photo.height}</p>
                  <p>Photographer Page: {photo.photographer_url}</p>
                  <p>Photo Page: {photo.url}</p>
                  <div className="bubbles">
                    <img src={bubble} alt={bubble}/>
                    <img src={bubble} alt={bubble}/>
                    <img src={bubble} alt={bubble}/>
                    <img src={bubble} alt={bubble}/>
                    <img src={bubble} alt={bubble}/>
                    <img src={bubble} alt={bubble}/>
                    
                  </div>
                  

                  {/* <p>{photo.src.landscape}</p> */}
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

export default Photos;