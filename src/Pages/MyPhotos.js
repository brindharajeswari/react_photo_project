import { useState, useEffect } from "react";




function MyPhotos(likeArr){

    const [photo, setPhoto] = useState([]);

    
    
  const likedPhoto = JSON.parse(localStorage.getItem('photo'));
  console.log('likedPhoto')
   console.log(likedPhoto)
   //console.log({likeArr})


    return(
        <>
        {/* {likedPhoto.map(x => 
        <div className="my-photo">
            <img src={x.src.original} />
        </div>)} */}
        </>
    );
}

export default MyPhotos;