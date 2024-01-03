import React, { useEffect, useState } from 'react';
import axios from 'axios';

const CreateBlog = () => {
    // =================== edit Data ===============
    const [id, setID] = useState()

    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [image, setUrl] = useState();
    const [title, setTitle] = useState();
    const [address, setAddress] = useState();
    const [description, setDescription] = useState();

    const [getBdata, setBdata] = useState();
    const [postData, setPostData] = useState()
    const [completeData, setCompletData] = useState()


    // =================== Get Data from backend ========
    useEffect(() => {
        (async () => await getDataFrombackend())()

    }, []);

    const getDataFrombackend = async () => {
        const res = await fetch('/getBlogData', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        });

        const data = await res.json()
        setBdata(data.data)

    }

    // ================== Post Data into Database =======


    const submitBlog = async (e) => {
        e.preventDefault();

        const res = await fetch('/createBlog', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, email, image, title, address, description })
        });

        const data = await res.json();
        setPostData(data.data)

        if (res.status === 422 || !data) {
            alert("Issue rise in blog creation try again")
        } else {


            alert("Blog created successfully")
        }
        setCompletData([postData, ...getBdata])

        setName('')
        setEmail('')
        setUrl('')
        setTitle('')
        setAddress('')
        setDescription('')
        getDataFrombackend();
    }

    // ======================== Update Blog Data =======

    const updateBlog = async () => {
        const res = await axios.put('/updateBlog/' + id, {
            name: name, email: email, image: image, title: title,
            address: address, description: description
        });
        const data = await res.json();
        console.log(data)
        alert("Data Updated successFully")
        setName('')
        setEmail('')
        setUrl('')
        setTitle('')
        setAddress('')
        setDescription('')
        getDataFrombackend();
    }


    return (
        <div className='createBlog_container'>
            <form class="row g-3 needs-validation" novalidate>
                <div class="col-md-4">
                    <label for="validationCustom01" class="form-label">Name</label>
                    <input
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        type="text" class="form-control" id="validationCustom01" required />
                    <div class="valid-feedback" >
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Email</label>
                    <input
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        type="email" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Image Url</label>
                    <input
                        value={image}
                        onChange={(e) => setUrl(e.target.value)}
                        type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Blog Title</label>
                    <input

                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>
                <div class="col-md-4">
                    <label for="validationCustom02" class="form-label">Blogging Address</label>
                    <input
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        type="text" class="form-control" id="validationCustom02" required />
                    <div class="valid-feedback">
                        Looks good!
                    </div>
                </div>

                <div class="mb-3">
                    <label for="validationTextarea" class="form-label">Tell Us About Your Blog</label>
                    <textarea class="form-control"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        id="validationTextarea" placeholder="Required example textarea" required></textarea>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary" type="submit"
                        onClick={submitBlog}
                    >Create New Blog</button>

                    &nbsp;&nbsp;
                    <button class="btn btn-primary" type="submit"
                        onClick={() => updateBlog()}
                    >Update Blog</button>
                </div>
            </form>
        </div>
    )
}

export default CreateBlog;