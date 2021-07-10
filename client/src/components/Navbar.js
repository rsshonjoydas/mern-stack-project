import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';

const Navbar = () => (
  <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="{#}">
          Navbar
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="{#}navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item active">
              <a className="nav-link active" aria-current="page" href="{#}">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{#}">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{#}">
                Contact
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{#}">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="{#}">
                Registration
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </>
);

export default Navbar;