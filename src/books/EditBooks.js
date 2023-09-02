import axios from 'axios';
import React, {  useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';


const EditBooks = () => {
  let navigate = useNavigate();
  const id = useParams();
  const [bookData,setBookData] = useState({
    author:{
      authorFirstName:"",
      authorLastName:"",
      authorLanguage:"",
    },
    bookTitle:""
  });
  useEffect(()=>{

    getData();  
  },[]);
  const getData = async()=>{

    const response =await axios.get(`http://localhost:8080/api/books/${id.id}`)
    setBookData(response.data);
    console.log(response.data);
  }
    const handleData = (e)=>{
      if(e.target.name==="bookTitle"){
        setBookData({...bookData,[e.target.name]:e.target.value});
    }else{
      setBookData({...bookData,author:{...bookData.author,[e.target.name]:e.target.value}});
    }
  }
  const submitData =async()=>{
    if(bookData.author.authorFirstName==""){

      toast.error("Your are not allowed to save now!");
    }else{
      await axios.put(`http://localhost:8080/api/books/${id.id}`,bookData);
      navigate("/");
    }
  }
  return (
    <div className='fluid-container m-1'>
      <div className='card shadow'  >
        <div className='card-header'>
          <h2>Update Book</h2>
        </div>
        <div className='card-body fw-bold w'>
        <div className='row'>
          
          <div className='col-3 col-sm-12 col-lg-3 '>
          Book Title
            <input type='text' value={bookData.bookTitle} name="bookTitle" onChange={handleData} placeholder='Enter the author language' className='form-control fw-bold mt-2'/>
          
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

export default EditBooks
