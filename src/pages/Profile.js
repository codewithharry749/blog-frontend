import React, { useEffect, useState } from 'react'


const Profile = () => {
    const [profile, setProfile] = useState()

    useEffect(() => {
        (async () => await fetchSignupData())()
    }, []);

    const fetchSignupData = async () => {
        const res = await fetch('/getsignData', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()
        const index = data.data.length - 1
        setProfile(data.data[index])

    }


    return (
        <section className="vh-100 profile_page" >
            <div className="container py-3 h-100 ">
                <div className="row d-flex justify-content-center align-items-center h-100">
                    <div className="col col-lg-6 mb-4  mb-lg-0">
                        <div className="card mb-3 p-3" style={{ borderRadius: ".5rem" }}>
                            <div className="row g-0">
                                <div className="col-md-4 gradient-custom text-center text-white"
                                    style={{ borderTopLeftRadius: ".5rem", borderBottomLeftRadius: ".5rem" }}>
                                    <img src="../images/profile.png"
                                        alt="Avatar" className="img-fluid my-5" style={{
                                            width: "80px;"
                                            , borderRadius: '.5rem'
                                        }} />
                                    <h5>Harikesh Maurya</h5>
                                    <p>Web Designer</p>

                                </div>
                                <div className="col-md-8">
                                    <div className="card-body p-4">
                                        <h6>Information</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">
                                                <h6>Name</h6>
                                                <p className="text-muted">Harikesh Maurya</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <h6>Email</h6>
                                                <p className="text-muted">Harikeshmaurya9984@gmail.com</p>
                                            </div>

                                        </div>
                                        <h6>Projects</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">

                                                <p className="text-muted">Weather Forcasting</p>
                                            </div>
                                            <div className="col-6 mb-3">
                                                <p className="text-muted">Academic site</p>
                                            </div>
                                        </div>

                                        <h6>Skills</h6>
                                        <hr className="mt-0 mb-4" />
                                        <div className="row pt-1">
                                            <div className="col-6 mb-3">

                                                <p className="text-muted">HTML</p>
                                                <p className="text-muted">CSS</p>
                                                <p className="text-muted">Java Script</p>
                                                <p className="text-muted">Node Js</p>
                                                <p className="text-muted">MongoDB</p>
                                            </div>
                                            <div className="col-6 mb-3">

                                                <p className="text-muted">React Js</p>
                                                <p className="text-muted">BootStrap</p>
                                                <p className="text-muted">NPM</p>
                                                <p className="text-muted">Git</p>
                                                <p className="text-muted">Python</p>
                                            </div>
                                        </div>

                                        <div className="d-flex justify-content-start">
                                            <a href="#!"><i className="fab fa-facebook-f fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-twitter fa-lg me-3"></i></a>
                                            <a href="#!"><i className="fab fa-instagram fa-lg"></i></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    )
}

export default Profile;