import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info shadow">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Grocery Stock Management</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
                <ul className="navbar-nav justify-content-center align-items-center mb-2 mb-lg-0">
                    <li className="nav-item">
                        <Link className="nav-link" to="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/manage-inventory">Manage Inventory</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/add-item"> Add Item</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/my-items"> My Items</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/login"> <button className="btn btn-primary">Login</button></Link>
                    </li>

                </ul>

            </div>
        </div>
    </nav>
    );
};

export default Header;