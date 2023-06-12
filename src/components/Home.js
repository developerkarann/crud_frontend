import React, { useEffect, useState } from 'react'
import RemoveRedEyeIcon from '@mui/icons-material/RemoveRedEye';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../server'


export default function Home() {

    const [getUserData, setUserData] = useState([])
    // console.log(getUserData)

    const getData = async (e) => {

        // const response = await fetch('http://localhost:8000/api/getdata', {
        // const response = await fetch('https://crudapp-ml3l.onrender.com/api/getdata', {
        const response = await fetch(`${server}/api/getdata`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        })

        const data = await response.json();
        // console.log(response)

        if (response.status === 404 || !data) {
            console.log("Error")
        } else {
            setUserData(data)
            console.log("Get data")
        }
    }


    useEffect(() => {
        getData();
    }, [])

    const deleteUser = async (id) => {
        // const res2 = await fetch(`http://localhost:8000/api/deleteuser/${id}`, {
        const res2 = await fetch(`https://crudapp-ml3l.onrender.com/api/deleteuser/${id}`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
        })
        const deleteData = await res2.json()
        console.log(deleteData)

        if (res2.status === 422 || !deleteData) {
            console.log("Error")
        } else {
            console.log("User deleted")
            toast.success('Data Deleted', {
                position: "top-right",
                autoClose: 3000,
            });
            getData();
        }
    }
    return (
        <>
            <ToastContainer />
            <div className='mt5'>
                <div className='container'>
                    <div className='add_btn mt-2 mb-2'>
                        <Link className='btn btn-primary' to="/register" >Add Data</Link>
                    </div>
                    <table className="table">
                        <thead>
                            <tr className='table-dark'>
                                <th scope="col">Id</th>
                                <th scope="col">Username</th>
                                <th scope="col">Email</th>
                                <th scope="col">Job Role</th>
                                <th scope="col">Number</th>
                                <th scope="col"></th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                getUserData.map((element, id) => {
                                    return (
                                        <>
                                            <tr>
                                                <th scope="row">{id + 1}</th>
                                                <td>{element.name}</td>
                                                <td>{element.email}</td>
                                                <td>{element.work}</td>
                                                <td>{element.mobile}</td>
                                                <td className='d-flex justify-content-between icons'>
                                                    <Link to={`view/${element._id}`} className='btn btn-success'><RemoveRedEyeIcon></RemoveRedEyeIcon></Link>
                                                    <Link to={`edit/${element._id}`} className='btn btn-primary'><EditIcon></EditIcon></Link>
                                                    <button onClick={() => deleteUser(element._id)} className='btn btn-danger'><DeleteIcon></DeleteIcon></button>
                                                </td>
                                            </tr>
                                        </>
                                    )
                                })
                            }

                        </tbody>
                    </table>
                </div>
            </div>


        </>
    )
}
