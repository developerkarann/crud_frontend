import React, { useState, useEffect } from 'react'
// import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import EmailIcon from '@mui/icons-material/Email';
import WorkIcon from '@mui/icons-material/Work';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Card } from '@mui/material';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {server} from '../server'

import { useParams, Link, useNavigate } from "react-router-dom"

export default function Detail() {

    const [getUserData, setUserData] = useState([])

    console.log(getUserData)

    const navigate = useNavigate();

    const { id } = useParams("");
    // console.log(id)

    const getData = async () => {

        // const response = await fetch(`http://localhost:8000/api/getuser/${id}`, {
        // const response = await fetch(`https://crudapp-ml3l.onrender.com/api/getuser/${id}`, {
        const response = await fetch(`${server}/api/getuser/${id}`, {
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
        // const res2 = await fetch(`http://localhost:8000/api/deleteuser/${id}`,{
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
            toast.success('Data updated', {
                position: "top-right",
                autoClose: 3000,
            });
            console.log("User deleted")
            navigate('/');
        }
    }

    return (
        <>
            <ToastContainer />
            <div className='container mt-3'>
                <h1>Welcome {getUserData.name}</h1>
                <Card sx={{ maxWidth: 600 }}>
                    <CardContent>
                        <div className='add_btn'>
                            <Link to={`/edit/${getUserData._id}`} className='btn btn-primary'><EditIcon></EditIcon></Link>
                            <button style={{marginLeft: "10px"}} onClick={() => deleteUser(getUserData._id)} className='btn btn-danger'><DeleteIcon></DeleteIcon></button>
                        </div>
                        <div className='row'>
                            <div className='left_view col-lg-6 col-md-6 col-12' >
                                <img src="data:image/png;base64,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" alt='profile' style={{ width: 50 }} />
                                <h3>Name: <span> {getUserData.name} </span></h3>
                                <h3>Age: <span> {getUserData.age}</span></h3>
                                <p> <EmailIcon /> Email: <span>{getUserData.email}</span></p>
                                <p> <WorkIcon /> Occupation: <span>{getUserData.work}</span></p>
                            </div>
                            <div className='right_view col-lg-6 col-md-6 col-12'>

                                <p className='mt-5'><AddIcCallIcon />Mobile: <span>+91 {getUserData.mobile}</span></p>
                                <p className='mt-3'><LocationOnIcon />Location: <span>{getUserData.add}</span></p>
                                <p className='mt3'>Description: <span>{getUserData.desc}</span></p>
                            </div>
                        </div>
                    </CardContent>
                </Card>

            </div>
        </>
    )
}
