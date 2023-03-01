import { Link } from 'react-router-dom';

function Nav(props) {
    return(
        <div className="nav"> 
            <Link to="/">
               <div>Home</div>
            </Link>
            <Link to="/about">
               <div>About</div>
            </Link>  
            <Link to="/photos">
               <div> Photos</div>
            </Link>  
            <Link to="/collection">
               <div>Collection</div>
            </Link>  
        </div>
    )
}

export default Nav;