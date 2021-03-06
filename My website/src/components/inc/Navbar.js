import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="nbr navbar-dark shadow">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <nav className="navbar navbar-expand-lg ">
                            <div className="container-fluid">
                                <Link to="/" className="navbar-brand navbar-light">Orphantech</Link>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                                        <li className="nav-item">
                                            <Link to="/" className="nav-link navbar-light active">Home</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/about" className="nav-link navbar-light active">About</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link to="/contact" className="nav-link navbar-light active">Contact</Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>

        </nav>
    )
}

export default Navbar;
