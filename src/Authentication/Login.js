import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Login = () => {


    const navigate = useNavigate()
    // =========== Signup Detail ===============
    const [username, setUsername] = useState()
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const [cpassword, setCpassword] = useState()


    // =============== Signup ==================

    const signupData = async () => {
        document.title = "Signup operation....."
        const res = await fetch('/signupData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ username, email, password, cpassword })
        });
        const data = await res.json();
        // console.log(data);


        if (data.data === "usernameExist") {
            // alert("Username not availabe")
            toast.warning('Username not availabe', {
                position: toast.POSITION.TOP_CENTER
            })
        }
        if (data.data === "userExist") {
            // alert("Email id already used please use new email id");
            toast.warning('Email id already used please use new email id', {
                position: toast.POSITION.TOP_CENTER
            })

        }

        if (password !== cpassword) {
            toast.success('Password Not matched', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } else {
            if (data.data !== "usernameExist") {
                if (data.data !== "userExist") {
                    toast.success('User Signup successfull', {
                        position: toast.POSITION.TOP_CENTER
                    })
                    // alert("User Signup successfull")
                    setUsername('')
                    setEmail('')
                    setPassword('')
                    setCpassword('')

                }
            }

        }
    }


    //  ===================== Login =============

    const loginData = async () => {
        document.title = "Login operation....."

        const res = await fetch('/loginData', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ email, password })
        });

        const data = await res.json();
        console.log(data)

        if (data.data === "Success") {

            // alert("Login SuccessFull")
            toast.success('User Signup successfull', {
                position: toast.POSITION.TOP_CENTER
            })
            navigate('/')
        }
        else {
            // alert("Email or Password are Not Matched")
            toast.warning('Email or Password are Not Matched', {
                position: toast.POSITION.TOP_CENTER
            })
        }
    }



    return (
        <div style={{
            width: '50%', margin: '0.5rem auto',
            boxShadow: ' rgba(0, 0, 0, 0.35) 0px 5px 15px',
            padding: '1rem', borderRadius: '.5rem'
        }}>
            {/* <!-- Pills navs --> */}
            <ul className="nav nav-pills nav-justified mb-3" id="ex1" role="tablist">
                <li className="nav-item" role="presentation">
                    <a className="nav-link active" id="tab-login" data-mdb-toggle="pill" href="#pills-login" role="tab"
                        aria-controls="pills-login" aria-selected="true">Login</a>
                </li>
                <li className="nav-item" role="presentation">
                    <a className="nav-link" id="tab-register" data-mdb-toggle="pill" href="#pills-register" role="tab"
                        aria-controls="pills-register" aria-selected="false">Sign Up</a>
                </li>
            </ul>
            {/* <!-- Pills navs --> */}

            {/* <!-- Pills content --> */}
            <div className="tab-content">
                <div className="tab-pane fade show active" id="pills-login" role="tabpanel" aria-labelledby="tab-login">

                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}
                            className="form-control is-valid" placeholder="Enter email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    {/* <!-- Password input --> */}
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input
                            onChange={(e) => setPassword(e.target.value)}
                            type="password"

                            className="form-control is-valid" placeholder="Enter password" aria-label="Username" aria-describedby="addon-wrapping" />
                        <div>

                        </div>
                    </div><br />
                    <button type="submit"
                        onClick={loginData} className="btn btn-primary 
                        btn-block mb-3">Login</button>

                </div>
                <div className="tab-pane fade" id="pills-register" role="tabpanel" aria-labelledby="tab-register">

                    <div className="text-center mb-3">
                        <p>Sign up with:</p>
                        <button type="button"

                            className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-facebook-f"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-google"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-twitter"></i>
                        </button>

                        <button type="button" className="btn btn-link btn-floating mx-1">
                            <i className="fab fa-github"></i>
                        </button>
                    </div>

                    <p className="text-center">or:</p>

                    {/* <!-- User Name input --> */}
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Username</span>
                        <input
                            type="text" className="form-control is-valid" placeholder="Enter username"
                            onChange={(e) => setUsername(e.target.value)}
                            value={username}
                            aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    {/* <!-- Username input --> */}


                    {/* <!-- Email input --> */}
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Email</span>
                        <input
                            type="email"
                            onChange={(e) => setEmail(e.target.value)}

                            value={email}
                            className="form-control is-valid" placeholder="Enter email" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div>
                    <br />
                    {/* <!-- Password input --> */}
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Password</span>
                        <input type="password"
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                            className="form-control is-valid" placeholder="Enter password" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div><br />

                    {/* <!-- Repeat Password input --> */}
                    <div className="input-group flex-nowrap">
                        <span className="input-group-text" id="addon-wrapping">Cpassaword</span>
                        <input type="password"
                            onChange={(e) => setCpassword(e.target.value)}
                            value={cpassword}
                            className="form-control is-toggled is-valid " placeholder="Enter confirm password" aria-label="Username" aria-describedby="addon-wrapping" />
                    </div><br />

                    {/* <!-- Submit button --> */}

                    <div>
                        <button type="submit"
                            onClick={signupData}
                            className="btn btn-primary 
                        btn-block mb-3">Sign in</button>
                        <ToastContainer />
                        <button type="submit"
                            onClick={() => {

                                setUsername("admin")
                                setEmail('admin@example.com')
                                setPassword("1234")
                                setCpassword("1234")

                            }}
                            className="btn btn-primary 
                        btn-block mb-3">Sign in As Guest</button>
                    </div>



                </div>
            </div >
            {/* <!-- Pills content --> */}
        </div >
    )
}

export default Login;