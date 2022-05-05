import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import ButtonSpinner from '../Loading/ButtonSpinner';

const Header = () => {
    const [user, loading] = useAuthState(auth);
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-info shadow">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">Groc Stock</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
                    aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse justify-content-end" id="navbarSupportedContent">
                    <ul className="navbar-nav justify-content-center mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        {
                            loading ? <ButtonSpinner /> : <>
                                {
                                    user && <>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/manage-inventory">Manage Inventory</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/add-item"> Add Item</Link>
                                        </li>
                                        <li className="nav-item">
                                            <Link className="nav-link" to="/my-items"> My Items</Link>
                                        </li></>
                                }
                                <li className="nav-item ms-md-5">
                                    {
                                        user ? <><span className='me-2'>Welcome, {user?.displayName}</span><button onClick={() => signOut(auth)} className="btn btn-danger">Logout</button></> : <Link className="mx-md-3" to="/login"><button className="btn btn-warning">Login</button></Link>
                                    }
                                </li>

                            </>
                        }
                    </ul>

                </div>
            </div>
        </nav>
    );
};

export default Header;