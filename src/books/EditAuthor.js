import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditAuthor = () => {
  let navigate = useNavigate();
  const [author,setAuthor] = useState({});
 const id =useParams();
  useEffect(()=>{
    getAuthor();
  },[]);
  const getAuthor = async()=>{
    const response = await axios.get(`http://localhost:8080/api/author/${id.id}`);
    setAuthor(response.data);
  }
  const handleData = (e)=>{
    
      setAuthor({...author,[e.target.name]:e.target.value});

  }
  const submitData =async()=>{
    if(author.authorFirstName==""){

      toast.error("Your are not allowed to save now!");
    }else{
      await axios.put(`http://localhost:8080/api/author/${id.id}`,author);
      navigate("/");
    }
  }
  return (
    <div className='fluid-container m-1'>
      <div className='card shadow'  >
        <div className='card-header'>
          <h2>Add Book</h2>
        </div>
        <div className='card-body fw-bold w'>
        <div className='row'>
          <div className='col-3 col-sm-12 col-lg-3  '>
            Enter the author first Name
            <input type='text' name='authorFirstName' value={author.authorFirstName}  onChange={handleData} placeholder='Enter the first name' className='form-control fw-bold mt-2'/>
          </div>
          <div className='col-3 col-sm-12 col-lg-3 '>
            Enter the author last name
            <input type='text' name='authorLastName' value={author.authorLastName} onChange={handleData} placeholder='Enter the last name'  className='form-control fw-bold mt-2'/>
          </div>
          <div className='col-3 col-sm-12 col-lg-3 '>
            Enter the author language
            <input type='text' name="authorLanguage" value={author.authorLanguage} onChange={handleData} placeholder='Enter the author language' className='form-control fw-bold mt-2'/>
          </div>
          
          <div className='col-12 mt-2 text-end' >
            <button type='button'  className='btn btn-success m-2' onClick={submitData}>
            Update
            </button>
            <button type='button'  className='btn btn-outline-success' onClick={()=>{navigate("/")}}>
            Cancel
            </button>
          </div>
        </div>
        </div>
      </div>
    </div>
  )
}

export default EditAuthor
