import { useState } from "react";
import Logo from "../assets/img/foodvillaIMG-1.webp"
import { Link } from "react-router-dom";


// login logout
const loggedInUser = ()=>{
    //check user authentication
    return true;
}

const Title= ()=>(
    // <h2 className="title" key="h2"> Food Villa </h2>
    <Link to="/">
    {/* <img className="logo" src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj" alt="logo"/> */}
    {/* using downloaded img logo */}
    <img className="logo" src={Logo} alt="logo"/>

    </Link>
);

// create react component(functional component)
const Header = () =>{
    // using useState we can change login to logout
    const [isloggedInUser, setloggedInUser] = useState(false)
    return(
        <div className="header">
            {console.log("Shlok")}
            <Title/>
             <div className="nav-items">
                <ul>
                    <Link to="/"><li>Home</li></Link>
                    <Link to="/about"><li>About</li></Link>
                    <Link to="/contact"><li>Contact</li></Link>
                    <Link to="/Cart"><li>Cart</li></Link>

                    {/* <li>About</li>
                    <li>Contact</li>
                    <li>Cart</li> */}
                </ul>
                 {/* show logout buuton if they login else login button */}
                {isloggedInUser?
                <button onClick={()=>{
                    setloggedInUser(false)
                }}>Logout</button>
                :<button onClick={()=>{
                    setloggedInUser(true)
                    }}>Login</button>}
             </div>
        </div>
    );
}
export default Header;