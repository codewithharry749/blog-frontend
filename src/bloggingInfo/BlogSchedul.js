import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ToastContainer, toast } from 'react-toastify';


const BlogSchedul = () => {

    const [ids, setID] = useState()
    const [name, setName] = useState("");
    const [date, setDate] = useState("");
    const [place, setPlace] = useState("");
    const [amount, setAmount] = useState("");

    const [employees, setUsers] = useState([])

    useEffect(() => {
        (async () => await FetchBackendData())()
    }, [])

    // ============ Get Data ===================

    const FetchBackendData = async () => {
        const res = await fetch('/getSchedule', {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
        const data = await res.json()
        setUsers(data.data)
    }

    // ============ Post Data ==================
    const createSchdule = async (e) => {

        e.preventDefault()
        const res = await fetch('/createSchedule', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name, date, place, amount })
        });

        const data = await res.json();
        console.log(data)

        if (res.status === 422 || !data) {
            // alert("Data Entry Fail")
            toast.success('"Data Entry Fail', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        } else {
            // alert("Data Entry Successfull")
            toast.success('Data Entry Successfull', {
                position: toast.POSITION.BOTTOM_RIGHT
            })
        }

        setName('')
        setDate('')
        setPlace('')
        setAmount('')
        FetchBackendData()
    }

    // ============ Edit Data ================

    const EditData = (id) => {
        setID(id)
        setName(employees[id].name)
        setDate(employees[id].date)
        setPlace(employees[id].place)
        setAmount(employees[id].amount)
    }

    // ============ Put Data ===================

    const updateData = async (e) => {
        e.preventDefault()
        const a = employees[ids]._id
        console.log(a)
        const res = await axios.put(
            "/updateSchedule/" +
            a,
            {

                name: name,
                date: date,
                place: place,
                amount: amount
            }
        );
        console.log(res);
        toast.success("Data updated successFully", {
            position: toast.POSITION.TOP_RIGHT
        })
        setName('')
        setDate('')
        setPlace('')
        setAmount('')
        FetchBackendData()

    }



    // =========== Delete Data ================

    const deleteData = async (id) => {
        const a = employees[id]._id
        const res = await axios.delete('/deleteSchedule/' + a)
        console.log(res)
        // alert("Data deleted successFully")
        toast.warn("Data deleted successFully", {
            position: toast.POSITION.BOTTOM_RIGHT
        })
        FetchBackendData();
    }

    return (
        <>
            <div className='container-fluid mt-1 ' style={{
                width: '60%',
                boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
                padding: '.7rem'
            }}>
                <div className='row'>
                    <div className='col-12' >
                        <form class="row g-3">
                            <div class="col-md-6">
                                <label for="inputEmail4" class="form-label">Name</label>
                                <input
                                    onChange={(e) => setName(e.target.value)}
                                    value={name}
                                    type="text" class="form-control is-valid"
                                    placeholder='Enter name'
                                    id="inputEmail4" />
                            </div>
                            <div class="col-md-6">
                                <label for="inputPassword4" class="form-label">date</label>
                                <input
                                    onChange={(e) => setDate(e.target.value)}
                                    value={date}
                                    type="date" class="form-control is-valid" id="inputPassword4" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress" class="form-label">place</label>
                                <input
                                    onChange={(e) => setPlace(e.target.value)}
                                    value={place}
                                    type="text" class="form-control is-valid" id="inputAddress" placeholder="vlogging place name" />
                            </div>
                            <div class="col-12">
                                <label for="inputAddress2" class="form-label">amount</label>
                                <input
                                    onChange={(e) => setAmount(e.target.value)}
                                    value={amount}
                                    type="text" class="form-control is-valid" id="inputAddress2" placeholder="spent amount" />
                            </div>

                            <div class="col-12">
                                <button type="submit" style={{ width: "48%" }} onClick={createSchdule} class="btn btn-primary">Create schedule</button>

                                &nbsp;&nbsp;
                                <button style={{ width: "48%" }} type="submit"
                                    onClick={updateData}
                                    class="btn btn-primary">Update schedule</button>
                            
                            </div>
                        </form>
                    </div>
                </div>
            </div>

            {/* =============== Table Info ========= */}
            <table className="table">
                <thead >
                    <tr>
                        <th scope="col" className='col' >Name</th>
                        <th scope="col" className='col' >Date</th>
                        <th scope="col" className='col' >place</th>
                        <th scope="col" className='col' >amount</th>
                        <th scope="col" className='col' >Actions</th>
                    </tr>
                </thead>

                {
                    employees.map((ele, ind) => {
                        return (

                            <tbody className='tbody'>

                                <tr>
                                    <td >{ele.name}</td>
                                    <td>{ele.date}</td>
                                    <td>{ele.place}</td>
                                    <td>₹ {ele.amount}</td>
                                    <td>
                                        <button type="button"
                                            onClick={() => EditData(ind)}
                                            class="btn btn-info" ><i class="fa fa-edit"
                                                title='Edit'
                                                aria-hidden="true"></i></button>&nbsp;&nbsp;

                                        <button type="button"
                                            onClick={() => deleteData(ind)}
                                            class="btn btn-danger"
                                            title='Delete'
                                        ><i class="fa fa-trash-o" aria-hidden="true"></i></button>
                                    </td>
                                </tr>


                            </tbody>

                        )
                    })
                }

            </table>
        </>
    )
}

export default BlogSchedul;