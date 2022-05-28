import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import menuIcon from '../../../images/menu-icon.png';

const Header = () => {
    const [user] = useAuthState(auth);

    const handleSignOut = () => {
        signOut(auth);
    }

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <div>
            <nav className="container flex flex-wrap justify-between items-center mx-auto py-2 relative">
                <div className="container mx-auto px-4 flex flex-wrap items-center justify-between">
                    <div className="w-full container flex flex-wrap justify-between items-center mx-auto relative">
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i className="fas fa-bars"></i>
                            <img src={menuIcon} alt=""></img>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:mx-auto lg:px-16">
                            <li className="nav-item ">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-orange-600 hover:text-black"
                                    to="/"
                                >
                                    <i className="fab fa-facebook-square text-lg leading-lg text-white opacity-75"></i><span className="ml-2">HOME</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-orange-600 hover:text-black"
                                    to="/blogs"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Blogs</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-orange-600 hover:text-black"
                                    to="/myPortfolio"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">My Portfolio</span>
                                </Link>
                            </li>

                            <li className="nav-item">
                            {
                                 user && 
                                 <Link
                                    className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-orange-600 hover:opacity-75"
                                    to="/myItems"
                                >
                                    <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">My Items</span>
                                </Link>
                            }
                                
                            </li>
                            <li className="nav-item">
                            {
                                user ?
                                <button className='fab fa-twitter ml-4 px-3 items-center text-sm text-black font-bold bg-white border-white opacity-75' onClick={handleSignOut}>LOG OUT</button>
                                :
                                <Link
                                        className="px-3 py-2 flex items-center text-sm uppercase font-bold leading-snug text-orange-600 hover:text-black"
                                        to="/login"
                                    >
                                        <i className="fab fa-twitter text-lg leading-lg text-white opacity-75"></i><span className="ml-2">Login</span>
                                </Link>
                            }
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Header;
