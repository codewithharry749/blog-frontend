import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useDispatch } from 'react-redux';
import { editBlog } from '../redux/slice/blogSlice';

const Allblogs = () => {
    const dispatch = useDispatch()
    const [blogData, setBlogdata] = useState([])
    // =================== Get Data from backend ========
    useEffect(() => {
        (async () => await getDataFrombackend())()

    }, [])
    const getDataFrombackend = async () => {
        const res = await fetch('/getBlogData', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()
        setBlogdata(data.data)
    }

    const deleteBlog = async (_id) => {
        const res = await axios.delete('/deleteBlog/' + _id)
        console.log(res)
        // alert("Blog has deleted")
        getDataFrombackend();
    }

    return (
        <div className='card_container'>
            {
                blogData.map((ele, ind) => {
                    return (
                        <div className="card" style={{ width: "19.63rem", height: "auto", float: 'left', margin: '.3rem' }}>
                            <ul className="list-group list-group-flush">
                                <li style={{ height: '50px' }} className="list-group-item">
                                    <i className="fa fa-user-plus" aria-hidden="true"></i>&nbsp;
                                    {ele.name}</li>
                                <li style={{ height: '90px' }} className="list-group-item">
                                    <i class="fa fa-map-signs" aria-hidden="true"></i>&nbsp;
                                    {ele.email}</li>
                                <li style={{ height: '70px' }} className="list-group-item">
                                    <i className="fa fa-map-pin" aria-hidden="true"></i>&nbsp;
                                    {ele.address}</li>

                            </ul>

                            <img src={ele.image} className="card-img blog_card" alt="..." />
                            <div className="card-body">
                                <h5 style={{ height: '50px' }} className="card-title"> {ele.title}</h5>

                                <p className="card-text description"
                                    style={{ height: '100px' }}
                                >{ele.description}</p>
                                <button type='button'

                                    className='btn btn-success' >
                                    <i class="fa fa-edit" aria-hidden="true"></i>
                                </button>&nbsp;&nbsp;
                                <button type='button' className='btn btn-danger' >
                                    <i class="fa fa-trash"
                                        onClick={() => deleteBlog(ele._id)}
                                        aria-hidden="true"></i>
                                </button>
                            </div>


                        </div>
                    )
                })
            }
        </div >
    )
}

export default Allblogs