import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { getAllPhotos } from "./Pages/Api";
import { Link } from "react-router-dom";


function Collection(props) {

    

    let { symbol } = useParams()

    //let photoList = photos.filter((x) => x.symbol === symbol)

    let key = process.env.REACT_APP_KEY
    
    let navigate = useNavigate()
       
    const [photo, setPhoto] = useState([]);

    let url = `https://api.pexels.com/v1/search?query=people`

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
            console.log(data)
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
      }, []);


      function add(){
        

      }

      

    return(
        <div className="collection-container">
                {/* <p> Symbol: {photoList[0].symbol}</p> */}
            {photo.map(photo =>
                <Link to={`/collection/${photo.id}`} key={photo.id}>
                    {/* <h2>{photo.photographer}</h2> */}
                    <div className="collection-img">
                      <img src = {photo.src.original} alt = {photo.alt}/>
                      {/* button - add (local storage - reads in myphoto) */}
                      <button onClick={add}> Like </button>
                    </div>
                </Link>
             )}
        </div>
    )

//     function goBack(){
//         alert('test')
//         navigate('..')
//     }

//     const loaded = () => {
//         return(
//             <div>
//                 <button onClick={goBack}>Back</button>
//             </div>
//         )
//     }
 }

export default Collection;