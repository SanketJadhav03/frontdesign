import axios from 'axios';
import React, {  useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const AddBooks = () => {
  let navigate = useNavigate();
  const [bookData,setBookData] = useState({
    author:{
      authorFirstName:"",
      authorLastName:"",
      authorLanguage:"",
    },
    bookTitle:""
  });
 
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
      const result = await axios.post("http://localhost:8080/api/books",bookData);
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
            <input type='text' name='authorFirstName' value={bookData.author.authorFirstName}  onChange={handleData} placeholder='Enter the first name' className='form-control fw-bold mt-2'/>
          </div>
          <div className='col-3 col-sm-12 col-lg-3 '>
            Enter the author last name
            <input type='text' name='authorLastName' value={bookData.author.authorLastName} onChange={handleData} placeholder='Enter the last name'  className='form-control fw-bold mt-2'/>
          </div>
          <div className='col-3 col-sm-12 col-lg-3 '>
            Enter the author language
            <input type='text' name="authorLanguage" value={bookData.author.authorLanguage} onChange={handleData} placeholder='Enter the author language' className='form-control fw-bold mt-2'/>
          </div>
          <div className='col-3 col-sm-12 col-lg-3 '>
          Book Title
            <input type='text' name="bookTitle" value={bookData.bookTitle} onChange={handleData} placeholder='Enter the author language' className='form-control fw-bold mt-2'/>
          
          </div>
          <div className='col-12 mt-2 text-end' >
            <button type='button'  className='btn btn-success m-2' onClick={submitData}>
            Save
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

export default AddBooks
