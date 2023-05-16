import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import { Link } from 'react-router-dom'

export default function Register() {

  // const navigate = useNavigate();


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


  const addInpData = async (e) => { 
    e.preventDefault();

    const { name, email, age, mobile, work, add, desc } = inpval;
    // const response = await fetch('http://localhost:8000/api/register', {
    const response = await fetch('https://crudapp-ml3l.onrender.com/api/register', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        name, email, age, mobile, work, add, desc
      })
    })

    const data = await response.json();
    console.log(response)

    if (response.status === 404 || !data) {
       alert("Error")
       console.log("Error")
    } else{
      setInp({...inpval, name: "", email: "", age: "", mobile: "", work: "", add: "", desc: ""})
      toast.success('Data Added', {
        position: "top-right",
        autoClose: 3000,
    });
      console.log("Data Added")
      // navigate('/')
    }
  }

  return (
    <>
      <div className='container'>
      <ToastContainer />
        {/* <Link to='/' >Home</Link> */}

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
              <textarea name='desc' value={inpval.desc} onChange={setData} className='form-control' cols="30" rows="5"></textarea>
            </div>
            <button type="submit" onClick={addInpData} className="btn btn-primary">Submit</button>
          </div>
        </form>
      </div>
    </>
  )
}
