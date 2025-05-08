import axios from 'axios';
import React, { useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';


function Add() {
    const [student,setStudents]=useState({
        id: "",
        name: "",
        age: ""
    });

    



    const addStudent = async ()=>{
        try {
        const response = await axios.post("https://my-server2.onrender.com/students", {
            id: student.id,
            name: student.name,
            age: student.age
        });

        if(response.data.success){
            setStudents({
                id: "",
                name: "",
                age: ""
            });
            toast.success(response.data.message);
        }else{
            toast.error(response.data.message);
        }
    } catch (error) {
        toast.error(e.response.data.message);
    }
       
    }


  return (
    <div>
        <h1 className='text-center text-5xl my-4'>Add New Students</h1>
        <div className='w-1/2 mx-auto shadow-md rounded-md border-2 border-gray-200 bg-white'>
            <input type='text' placeholder='Enter ID' value={student.id}
            onChange={(e)=>setStudents({...student,id:e.target.value})}
            
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4'/>

            <input type='text' placeholder='Enter Name' value={student.name} 
            onChange={(e)=>setStudents({...student,name:e.target.value})}
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4'/>

            <input type='text' placeholder='Enter Age' value={student.age} 
            onChange={(e)=>setStudents({...student,age:e.target.value})}
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4'/>

            <button className='bg-blue-500 text-white text-2xl py-2 px-5 rounded-md my-4 block mx-auto cursor-pointer' onClick={addStudent}>Add Student</button>
        </div>
        <Toaster/>
    </div>
  )
}

export default Add