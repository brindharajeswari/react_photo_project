import { useState, useEffect } from "react";
import cam from "../images/cam.jpg";




function MyPhotos(){
    const [photo, setPhoto] = useState([]);
    const options = {
        method: 'GET',
        headers: {
            Authorization: 'FQRDUBDYjymHr05aBGX3ni9ZU3Qs9AGgPFZF9Fw4xDpSbVxSfaI506PL',
        }
    };

    const [likeArr, setLikeArray] = useState(() => {
        // getting stored value
        const saved = localStorage.getItem("photo");
        const initialValue = JSON.parse(saved);
        return initialValue ||  [];
      });

      let url = '';

      
    useEffect(() => {
        const arrayLength = likeArr.length;
        for (var i = 0; i < arrayLength; i++) {
            const photoId = likeArr[i];
            url = `https://api.pexels.com/v1/photos/${photoId}`

            const fetchData = async () => {
                try {
                  const response = await fetch(url, options);
                  const data = await response.json();
                  photo.push(data);
                  setPhoto(photo);
                } catch (error) { 
                  console.log("error", error);
                }
            };
            fetchData();
        }
      }, []);

    // const arrayLength = likeArr.length;
    //     for (var i = 0; i < arrayLength; i++) {
    //         const photoId = likeArr[i];
    //         url = `https://api.pexels.com/v1/photos/${photoId}`
    //         getPhoto();
    //     }
      
    //   console.log(photo)

    function photoCollection(list) {
        if(list.length > 0) {
            console.log(list)
            return(
                <div className="home-container"> 
                <div className="header">
                  <img className="logo" src={cam} alt={cam}/> 
                  <h1 className="title"> Lensational </h1> 
                </div>
                <div className="body">
               {list}
                {list.map(x =>  
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
    }
      
    return photoCollection(photo);

      
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