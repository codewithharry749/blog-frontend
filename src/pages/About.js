import React from 'react'
import { NavLink } from 'react-router-dom';

const About = () => {
    return (
        <div className='container-fluid' style={{
            width: '90%', margin: '5% auto',
            backgroundColor: '',
            padding: '.5rem'
        }}>
            <div className='row'>
                <div className='col-md-6 col-sm-10 d-flex flex-column align-content-center justify-content-center mb-1' >
                    <div>
                        <span style={{ color: 'black', fontSize: '1.5rem' }}> i am a </span><span style={{ color: 'green', fontSize: '1.5rem' }}>Fullstack web developer</span> & <span style={{ fontSize: '1.5rem', color: 'blue' }}>Part time vloger</span>
                        <p style={{ fontSize: '.9rem' }} >Blogging has evolved over the years and has become a versatile platform used for various purposes, such as personal journals, professional writing, marketing, and even as a means of income generation.</p>
                        <NavLink to='/about/schedule'>
                            <button className='btn btn-success'>create schedule</button>
                        </NavLink>&nbsp;&nbsp;
                        <NavLink to='/about/bloginfo'>
                            <button className='btn btn-primary'>get more info</button>
                        </NavLink>

                    </div>
                </div>
                <div className='col-md-6 col-sm-10 aboutImg_container' >
                    <img src='../images/about.jpg' alt='...' className='img-fluid aboutImg' />
                </div>
            </div>
        </div>
    )
}

export default About;