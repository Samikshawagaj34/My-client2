import axios from 'axios';
import React, { useEffect, useState } from 'react';
import toast, { Toaster } from 'react-hot-toast';
import { useParams } from 'react-router';


function Edit() {
    const [student,setStudents]=useState({
        id: "",
        name: "",
        age: ""
    });

    const {userId} = useParams();

    const editStudent = async ()=>{
        try {
        const response = await axios.put(`http://localhost:5002/students/${userId}`, {
            
            name: student.name,
            age: student.age
        });

        if(response.data.success){
            
            toast.success(response.data.message);
        }else{
            toast.error(response.data.message);
        }
    } catch (error) {
        toast.error(e.response.data.message);
    }
       
    };

    const loadStudent = async()=>{
       try{

        const response = await axios.get(`http://localhost:5002/students/${userId}`);
        setStudents(response.data.data);
       }
       catch(error){
        toast.error(error.response.data.message);
       }
    };

    useEffect(() => {
        if(userId){
        loadStudent();}
    },[userId]);




  return (
    <div>
        <h1 className='text-center text-5xl my-4'>Edit  Student </h1>
        <div className='w-1/2 mx-auto shadow-md rounded-md border-2 border-gray-200 bg-white'>
            <input type='text' placeholder='Enter ID' value={student.id}
            onChange={(e)=>setStudents({...student,id:e.target.value})}
            
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4' disabled/>

            <input type='text' placeholder='Enter Name' value={student.name} 
            onChange={(e)=>setStudents({...student,name:e.target.value})}
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4'/>

            <input type='text' placeholder='Enter Age' value={student.age} 
            onChange={(e)=>setStudents({...student,age:e.target.value})}
            className='block mx-auto text-2xl w-96 py-2 px-5 border-2 border-gray-200 rounded-md my-4'/>

            <button className='bg-blue-500 text-white text-2xl py-2 px-5 rounded-md my-4 block mx-auto cursor-pointer' onClick={editStudent}>Edit Student</button>
        </div>
        <Toaster/>
    </div>
  )
}

export default Edit;