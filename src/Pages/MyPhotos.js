import React, { useState, useEffect, updateState } from "react";
import cam from "../images/cam.jpg";




function MyPhotos(){
    // const arrayLength = likeArr.length;
    //     for (var i = 0; i < arrayLength; i++) {
    //         const photoId = likeArr[i];
    //         url = `https://api.pexels.com/v1/photos/${photoId}`
    //         getPhoto();
    //     }
      
    //   console.log(photo)

      
    return  <PhotoCollection />;

      
  }

  function PhotoCollection(data) {
    const [likeArr, setLikeArray] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("photo");
        const initialValue = JSON.parse(saved);
        return initialValue ||  [];
      });


    const options = {
        method: 'GET',
        headers: {
            Authorization: 'FQRDUBDYjymHr05aBGX3ni9ZU3Qs9AGgPFZF9Fw4xDpSbVxSfaI506PL',
        }
    };
    let url = '';

    const [photo, setPhoto] = useState([]);

    useEffect(() => {
        let photo2 = [];

        const fetchData = async () => {
            const arrayLength = likeArr.length;

            for (let i = 0; i < arrayLength; i++) {
                const photoId = likeArr[i];
                url = `https://api.pexels.com/v1/photos/${photoId}`
                try {
                const response = await fetch(url, options);
                const data = await response.json();
                photo2.push(data);
                if(arrayLength == photo2.length) {
                    setPhoto(photo2);
                }
                } catch (error) { 
                 console.log("error", error);
                }
            };
        }

        fetchData();

      }, [setPhoto]);

        return(
            <div className="home-container"> 
            <div className="header">
              <img className="logo" src={cam} alt={cam} /> 
              <h1 className="title"> Lensational </h1> 
            </div>
            <div className="body">
            {photo.map(x =>  
                   <>     
                     {/* <h2>{x.photographer}</h2>  */}
                     <div className="myphoto-img">
                       <img src= {x.src.original} style={{ width:"400px",height: "400px", objectFit:"cover"}}/>   
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