import React from "react";

class Navbar extends React.Component {

    render() {
        return (
            <div>
                <div style={{ "backgroundColor": "white" }}></div>
                <nav className="navbar navbar-dark">
                    <a className="navbar-brand" href="/">
                    <h1 style={{"color":"red"}}>X-translate</h1>
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                </nav>
            </div>
        )
    }
}

export default Navbar