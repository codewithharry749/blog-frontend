import React from 'react'
import { NavLink } from 'react-router-dom';
import Degitalclock from './Degitalclock';
import { useDispatch, useSelector } from 'react-redux';
import { getItemSelector, login } from '../redux/slice/blogSlice';

const HeaderPage = () => {

    const dispatch = useDispatch();
    const isLogin = useSelector(getItemSelector)
    console.log(isLogin)


    const loginNow = () => {

        document.title = "login now...";
        dispatch(login())
    }

    return (
        //    < !--Navbar -- >
        <nav

            className="navbar navbar-expand-lg navbar-light text-black">
            {/* <!-- Container wrapper --> */}
            <div className="container-fluid">
                {/* <!-- Toggle button --> */}
                <button
                    className="navbar-toggler"
                    type="button"
                    data-mdb-toggle="collapse"
                    data-mdb-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <i className="fas fa-bars"></i>
                </button>

                {/* <!-- Collapsible wrapper --> */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    {/* <!-- Navbar brand --> */}
                    <NavLink style={{ textDecoration: 'none' }} className="navbar-brand mt-2 mt-lg-0" to="/">
                        <img
                            src="../images/logo.png"
                            height="25"
                            alt="MDB Logo"
                            loading="lazy"
                        />
                    </NavLink>
                    {/* <!-- Left links --> */}
                    {
                        !isLogin ? '' : (<ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none' }} className="nav-link" to="/">Home</NavLink>
                            </li>

                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none' }} className="nav-link" to="/allblogs">Vlogs</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none' }} className="nav-link" to="/creatblog">Create Vlog</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink style={{ textDecoration: 'none' }}

                                    className="nav-link"
                                    to="/about">About Us</NavLink>
                            </li>
                        </ul>)
                    }
                    {/* <!-- Left links --> */}
                </div>

                {/* =============== */}
                <div className="collapse navbar-collapse" id="navbarSupportedContent">


                    {/* <!-- Left links --> */}
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Degitalclock />
                        </li>
                    </ul>
                    {/* <!-- Left links --> */}
                </div>
                {/* <!-- Collapsible wrapper --> */}

                {/* <!-- Right elements --> */}
                <div className="d-flex align-items-center">
                    {/* <!-- Icon --> */}
                    {
                        <NavLink style={{ textDecoration: 'none' }} to='/login' >
                            <button type="button"
                                onClick={loginNow}
                                class="btn btn-primary"
                            >Login</button>
                        </NavLink>
                    }
                    &nbsp;&nbsp;
                    &nbsp;&nbsp;

                    {/* <!-- Avatar --> */}
                    <div className="dropdown">
                        <NavLink style={{ textDecoration: 'none' }}
                            className="dropdown-toggle d-flex align-items-center hidden-arrow"
                            to="#"
                            id="navbarDropdownMenuAvatar"
                            role="button"
                            data-mdb-toggle="dropdown"
                            aria-expanded="false"
                        >
                            {
                                <img
                                    style={{
                                        width: '50px',
                                        height: '50px',
                                        borderRadius: '50%',
                                        backgroundColor: 'white'
                                    }}
                                    src='../images/login_logo.avif'
                                    className="rounded-circle login_image"
                                    height="25"

                                    loading="lazy"
                                />
                            }

                        </NavLink>
                        <ul
                            className="dropdown-menu dropdown-menu-end"
                            aria-labelledby="navbarDropdownMenuAvatar"
                        >
                            <li>
                                <NavLink style={{ border: "none", textDecoration: 'none' }} className="dropdown-item" to="/profile">profile
                                </NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: 'none' }} className="dropdown-item" to="/setting">Settings</NavLink>
                            </li>
                            <li>
                                <NavLink style={{ textDecoration: 'none' }} className="dropdown-item" to="/login">

                                    Logout

                                </NavLink>

                            </li>
                        </ul>
                    </div>
                </div>
                {/* <!-- Right elements --> */}
            </div>
            {/* <!-- Container wrapper --> */}
        </nav>
        // <!--Navbar -->
    )
}

export default HeaderPage;