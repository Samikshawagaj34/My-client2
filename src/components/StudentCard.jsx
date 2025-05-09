import axios from 'axios';
import React from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { Link } from 'react-router';
import DeleteIcon from './../assets/delete-icon.png';
import EditUserIcon from './../assets/editing.png';

function StudentCard({id, name, age, loadStudents}) {

  const deleteStudent = async()=>{
    const response = await axios.delete(`https://my-server2.onrender.com/students/${id}`);
    if(response.data.success){
      toast.success(response.data.message);
      loadStudents();
    } else{
      toast.error(response.data.message);
    }
  };


  return (
    <div className='border-2 border-gray-300 p-4 m-4 rounded-md shadow-md relative' >
    <h2>
      {id} - {name} 
    </h2>
    <p>{age}</p>

    <img src={DeleteIcon} alt="delete student" className='h-[30px] absolute top-1 right-5 cursor-pointer'
    onClick={deleteStudent} />
    
    <Link to={`/edit/${id}`}>
    <img src={EditUserIcon} alt="edit student" className='h-[25px] absolute bottom-1 right-5 cursor-pointer'/>
    </Link>
   

    <Toaster/>
    </div>
  )
}

export default StudentCard