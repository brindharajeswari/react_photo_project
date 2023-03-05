import { useState, useEffect } from "react";
import cam from "../images/cam.jpg";




function MyPhotos(){
    const [photo, setPhoto] = useState([]);

    const [likeArr, setLikeArray] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("photo");
        const initialValue = JSON.parse(saved);
        return initialValue ||  [];
      });

      let url = '';

      const getPhoto = async() => {

        const options = {
            method: 'GET',
            headers: {
                Authorization: 'FQRDUBDYjymHr05aBGX3ni9ZU3Qs9AGgPFZF9Fw4xDpSbVxSfaI506PL',
            }
        };
        try {
            const response = await fetch(url, options)
            const data = await response.json()
            console.log(data)
            photo.push(data);
        } catch (error) {
            console.log(error)
        }
        console.log(photo)
    }

    useEffect(() => {
        var arrayLength = likeArr.length;
        for (var i = 0; i < arrayLength; i++) {
            const photoId = likeArr[i];
            url = `https://api.pexels.com/v1/photos/${photoId}`
            getPhoto();
        }
      }, []);
      console.log(photo)

      



    return(
        <div className="home-container"> 
        <div className="header">
          <img className="logo" src={cam} alt={cam}/> 
          <h1 className="title"> Lensational </h1> 
        </div>
        <div className="body">
        {photo.map(x =>  
               <>     
                 {/* <h2>{x.photographer}</h2>  */}
                 <div className="myphoto-img">
                   <img src= {x.src.original} />   
                 </div> 
              </>      
               )}  
        </div>
          
        </div>
      )

      
  }

  
export default MyPhotos;

// const loaded = () => {
//     return(
//         <div>
//             {/* <h1>{photo.id}</h1>  
//             <h2> {photo.photographer}</h2> */}
//             {/* <button onClick={goBack}>Back</button> */}
//         </div>
//     )
// }

// const loading = () => {
//     return(
//         <div>Loading... </div>
//     )
// }