import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>

            <nav className="navbar bg-primary navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand text-white " to="/">CrudIO</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white " aria-current="page" to="/">Home</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav  mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white " aria-current="page" target='_blank' to="https://iamkaran.netlify.app/">About</Link>
                            </li>
                        </ul>
                        <ul className="navbar-nav mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active text-white " aria-current="page" target='_blank' to="https://iamkaran.netlify.app/">Contact</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
