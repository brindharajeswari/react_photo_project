import { FavoriteBorder, Favorite } from "@mui/icons-material";
import { Button, IconButton } from "@mui/material";
import { useEffect, useState } from "react";
//import { useNavigate, useParams } from "react-router-dom";
//import { getAllPhotos } from "./Pages/Api";
import { Link } from "react-router-dom";
import MyPhotos from "./MyPhotos";
// import '../App.css';

function Collection(props) {


    const [likeArr, setLikeArray] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("photo");
        const initialValue = JSON.parse(saved);
        console.log(initialValue);
        return initialValue ||  [];
      });

    // let { symbol } = useParams()

    let key = process.env.REACT_APP_KEY

    //let navigate = useNavigate()

    const [photo, setPhoto] = useState([]);
    //const [likedPhoto, setLikedPhoto] = useState([]);

      

    let url = `https://api.pexels.com/v1/search?query=people`

    const getPhoto = async () => {
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

        try {
            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data)
            setPhoto(data.photos)
            console.log(data.photos)
        } catch (error) {
            console.log(error)
        }
        console.log(photo)
    }


    useEffect(() => {

        getPhoto()
    }, []); 

    //parse-converting str to original form


    function handleIconClick(id) {
        const value = parseInt(id,10);
        if((likeArr.includes(value))) {
            const index = likeArr.indexOf(value);
            if (index > -1) { // only splice array when item is found
             likeArr.splice(index, 1); // 2nd parameter means remove one item only
            }
        } else {
            likeArr.push(value)
        }
        console.log(likeArr)
       localStorage.setItem('photo', JSON.stringify(likeArr))

    }

    return (
        <>
        <div className="collection-container">
            {/* <p> Symbol: {photoList[0].symbol}</p> */}
            {photo.map(photo =>
                <div className="photo">
                    <Link to={`/collection/${photo.id}`} key={photo.id}>
                        {/* <h2>{photo.photographer}</h2> */}
                        <div className="collection-img">
                            <img src={photo.src.original} alt={photo.alt} />
                            {/* button - add (local storage - reads in myphoto) */}
                        </div>
                    </Link>
                    <Button className="like" value={photo.id} onClick={(e) => handleIconClick(e.currentTarget.value)}>
                             { isFavorite(photo.id) ? <Favorite /> : <FavoriteBorder />}
                    </Button>
               </div>
            )}
        </div>
        </>
    )

    function isFavorite(id) {
        const value = parseInt(id);
      return likeArr.indexOf(value) > -1;
    }

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