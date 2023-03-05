import { Link } from 'react-router-dom';

function Nav() {
    return(
        <div className="nav"> 
            <Link to="/">
               <div>Home</div>
            </Link>

            <Link to="/myphotos">
               <div>MyPhotos</div>
            </Link>  

            {/* <Link to="/photos">
               <div> Photos</div>
            </Link>   */}

            <Link to="/collection">
               <div>Collection</div>
            </Link>  

            <Link to="/contact">
               <div>Contact</div>
            </Link>
        </div>
    )
}

export default Nav;