Selecting an API:
-----------------
1. API List - `https://apilist.fun/api/pexels`
2. Pexel doc -`https://www.pexels.com/api/documentation/#introduction`
Got API key and URL

#index.js:
---------
1. Added

import { BrowserRouter as Router } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Router>
    <App />
  </Router>
);

#App.js:
--------
Created routes and route path for Home, Myphotos, Collection, Collection (id) - Photos

Created Components and pages
Components:
**********
Nav.js:
-------
Created links for Home page, MyPhoto page, Collection page.

Contact.js:
-----------
Created form to submit (Name, email, phone and message)

Pages:
******
- Home  
- Collection
- Photo
- MyPhotos

Home Page :
---------
* Displaying pexel images (page1)
* Added Title and logo to my website
* Added Search bar - list search pictures (nature, flowers, cats, dogs, babies)
* for styling search bar - got the search icon from `https://mui.com/`
  installed - npm install @mui/material @emotion/react @emotion/styled
  npm install @mui/icons-material
  Check {} package.JSON - "dependencies": 
    "@mui/icons-material": "^5.11.11",
    "@mui/icons-core": "^5.11.11",
    "@mui/material": "^5.11.11",
  Search icon link - `https://mui.com/material-ui/material-icons/?query=search`
  `https://mui.com/material-ui/api/input-adornment/`
* Added logo and Title
  Logo - Using Canva edited and downloaded the cam.jpg 
  Adjusted the width, height in CSS
* Title - downloded the backgroud img from google.com
  Adjusted the font size to 80px and added the background img in CSS
  Made animation 50s linear infinte and added keyframe

Collection:
------------  
* Used useState and useEffect Hook
* Pexel url = `https://api.pexels.com/v1/search?query=people`
* Next day URL and key didnt work, so used `https://rapidapi.com/`
`https://rapidapi.com/pexels-pexels-default/api/Pexels/`
* Used try and catch method to fetch data
* useEffect to get data(photo)
* Used Map method to display the pictures.
* Created link to Photos page to see Photo details
* Added favorite button(heart) - `https://mui.com/material-ui/material-icons/?query=heart&selected=FavoriteBorder`
`https://mui.com/material-ui/react-button/`
* Implemented Local storage :
 - setItem(): to add a key and a value to localStorage
 - localStorage.setItem('items', JSON.stringify(items));

source : 
*********
https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
Net Ninja - https://www.youtube.com/watch?v=SOnMln3W0U8


Photos:
--------
*This page display the Photo details:
 - Name
 - Photo Name
 - Photographer ID
 - Width of Photo
 - Height of Photo
 - Photographer Page
 - Photo Page
* Added 8 bubble image, adjusted the size of each bubble
and set timings for each bubble(1.5s,4s,2s..) and added animation in the css

MyPhoto:
---------
* The liked image in collection page will be seen in MyPhoto page.
* we already added image in local storage(setItem() - collection page),
* now to get the image from local storage(getItem()- MyPhoto page)

source:
********
- local storage: https://www.freecodecamp.org/news/how-to-use-localstorage-with-react-hooks-to-set-and-get-items/
- loop through an array: https://stackoverflow.com/questions/3010840/loop-through-an-array-in-javascript
- useEffect: https://blog.logrocket.com/useeffect-hook-complete-guide/ and https://www.w3schools.com/react/react_useeffect.asp
- fetch data from an api: https://designcode.io/react-hooks-handbook-fetch-data-from-an-api

Challange i faced:
------------------
Though i set the data in local storage(photoID - key & value), initially i couldnt able to get the data from storage.
made some useEffect changes and used looping through an array, got the picture on MyPhoto page but it took 2-4 minutes to display the picture.
Now i know im going in a right direction but find it difficult to retrive the 'liked' photo.
https://designcode.io/react-hooks-handbook-fetch-data-from-an-api - this page helped me how to fetch the data from an API.
Ta-da - when i hit the like button on Collection page, i can see it on MyPhoto page. It took me 2 and a half day to figure it out :)

________________________________________________________________________________________________________________________

github repo Link - https://github.com/brindharajeswari/react_photo_project
Hosted on Netlify: Link - https://main--zesty-kulfi-d1ffaa.netlify.app/

_________________________________________________________________________________________________________________________