import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Edit() {

  // const Navigate = useNavigate()

  const [inpval, setInp] = useState({
    name: "",
    email: "",
    age: "",
    mobile: "",
    work: "",
    add: "",
    desc: ""
  })

  const setData = (e) => {
    // console.log(e.target.value)
    const { name, value } = e.target


    setInp((preval) => {
      return {
        ...preval,
        [name]: value
      }
    })
  }

  // const [getUserData, setUserData] = useState([])

  // console.log(getUserData)

  const { id } = useParams("");
  // console.log(id)

  const getData = async () => {

    // const response = await fetch(`http://localhost:8000/api/getuser/${id}`, {
    const response = await fetch(`https://crudapp-ml3l.onrender.com/api/getuser/${id}`, {
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
      setInp(data)
      console.log("Get data")
    }
  }

  useEffect(() => {
    getData();
  }, [])

  const updateUser = async (e) => {
    e.preventDefault();

    const { name, email, age, mobile, work, add, desc } = inpval
    // const res2 = await fetch(`http://localhost:8000/api/updateuser/${id}`,{
    const res2 = await fetch(`https://crudapp-ml3l.onrender.com/api/updateuser/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, work, add, desc
      })

    })

    const data2 = await res2.json();
    console.log(data2)

    if (res2.status === 422 || !data2) {
      toast.warning('Please fill the data', {
        position: "top-right",
        autoClose: 3000,
      });
    } else {
      toast.success('Data updated', {
        position: "top-right",
        autoClose: 3000,
      });

      // Navigate('/')
    }
  }


  return (
    <>
      <ToastContainer />
      <div className='container'>
        <h1>Edit</h1>
        <form className='mt-5'>
          <div className='row'>
            <div className="mb-3  col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
              <input type="text" value={inpval.name} name='name' onChange={setData} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Email</label>
              <input type="email" name='email' value={inpval.email} onChange={setData} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Age</label>
              <input type="number" name='age' value={inpval.age} onChange={setData} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Mobile</label>
              <input type="text" name='mobile' value={inpval.mobile} onChange={setData} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Work</label>
              <input type="text" name='work' value={inpval.work} onChange={setData} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 col-lg-6 col-md-6 col-12">
              <label htmlFor="exampleInputPassword1" className="form-label">Address</label>
              <input type="text" name='add' value={inpval.add} onChange={setData} className="form-control" id="exampleInputPassword1" />
            </div>
            <div className="mb-3 ">
              <label htmlFor="exampleInputPassword1" className="form-label">Description</label>
              <textarea name='desc' value={inpval.desc} onChange={setData} className='form-control' id='' cols="30" rows="5"></textarea>
            </div>
            <button type="submit" onClick={updateUser} className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
