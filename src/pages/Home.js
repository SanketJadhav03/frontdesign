import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const Home = () => {
  const {bookTitle} = useParams();
    const [books,setBooks] = useState([]);
    useEffect(()=>{
        loadBooks();
    },[]);
    const loadBooks =async()=>{
      if(bookTitle===undefined){
        const result = await axios.get("http://localhost:8080/api/books"); 
        setBooks(result.data);
      }else{
        const result = await axios.get(`http://localhost:8080/api/books/name/${bookTitle}`); 
        setBooks(result.data);
      }
    }
    const deleteData =async(bookId,authorId)=>{
      if(window.confirm("Are you sure want to delete?")){
      await axios.delete(`http://localhost:8080/api/books/${bookId}`)
      await axios.delete(`http://localhost:8080/api/author/${authorId}`)
      toast.success("Record deleted successfully!");
      loadBooks();
      }else{
        toast.error("You denied your request!");
      }
    }
  return (
    <div className='container'>
      <div className='py-4'>
      <Link className='btn btn-warning mb-2 shadow' to={"/addBook"}>Add Book</Link>
        <table className='table border shadow p-2'>
            <thead>
                <tr>
                    <th className='col'>Sr No</th>
                    <th className='col'>Book Name</th>
                    <th className='col'>Author FirstName</th>
                    <th className='col'>Author LastName</th>
                    <th className='col'>Author Language</th>
                    <th className='col text-center'>Action</th>
                </tr>
            </thead>
            <tbody>
            {books.map((book,index)=>(

            <tr key={index}>
            <td >{index+1}</td>
            <td>{book.bookTitle}</td>
            <td>{book.author.authorFirstName}</td>
            <td>{book.author.authorLastName}</td>
            <td>{book.author.authorLanguage}</td>
            <td className='d-flex justify-content-between'>
              <Link className='btn btn-outline-success' to={`/editBook/${book.bookId}`}>Edit Book</Link>
              <Link className='btn btn-outline-success' to={`/editAuthor/${book.author.authorId}`}>Edit Author</Link>
              <button className='btn btn-danger' onClick={()=>deleteData(book.bookId,book.author.authorId)}>Delete</button>
            </td>
            </tr>
            ))}

                
            </tbody>
        </table>
      </div>
    </div>
  )
}

export default Home
