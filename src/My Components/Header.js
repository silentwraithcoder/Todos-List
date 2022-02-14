import React from 'react'
import PropTypes from 'prop-types'
import { Link } from "react-router-dom";

export default function Header(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active badge bg-dark m-2 text-white bg-opacity-75" aria-current="page" to="/">Home</Link>
              </li>
              <li class="nav-item dropdown">
          <Link class="nav-link dropdown-toggle badge bg-dark m-2 text-white bg-opacity-75" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </Link>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><Link class="dropdown-item" href="#">Action</Link></li>
            <li><Link class="dropdown-item" href="#">Another action</Link></li>
            <li><Link class="dropdown-divider"></Link></li>
            <li><Link class="dropdown-item" href="#">Something else here</Link></li>
          </ul>
        </li>
              <li className="nav-item">
                <Link className="nav-link badge bg-dark m-2 text-white bg-opacity-75" to="/about">About</Link>
              </li>  
            </ul>
            { props.searchBar? <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-primary bg-dark bg-opacity-75" type="submit">Search</button>
            </form>: ""}
          </div>
        </div>
      </nav>
    )
}
Header.defaultProps = {
  title: "Your Title Here",
  searchBar: true
}

Header.propTypes = {
  title: PropTypes.string,
  searchBar: PropTypes.bool.isRequired
}