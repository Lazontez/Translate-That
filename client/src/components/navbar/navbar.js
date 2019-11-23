import React from "react";
import navbarCss from "../../css/main/navbar.css"
class Navbar extends React.Component{


    render(){
        return(
        <div>
        <nav className="navbar navbar-dark" style={navbarCss} id="navbar">
            <a className="navbar-brand" href="/">
                <img src="./translationLogo.png"  alt="TranlateThat Logo" style={{"marginTop":"-25px"}}/>
            </a>
           
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
        </nav>
    </div>
        )}
}

export default Navbar