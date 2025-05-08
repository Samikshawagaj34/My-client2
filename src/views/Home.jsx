import axios from 'axios';

import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import AddUserIcon from './../assets/add-user (1).png';
import StudentCard from './../components/StudentCard';

function Home() {
  const [students, setStudents] = useState([
]);

  const loadStudents = async() =>{
    const response = await axios.get("http://localhost:5002/students");
    setStudents(response.data.data);
  };

  useEffect(() => {
    loadStudents();
 },[]);






  return (
    <div>
      <h1 className='text-center text-5xl mt-5  '>All Students data</h1>
      <div>{students.map((studObj, i)=>{

        const { id, name, age } = studObj;

        return <StudentCard key={i} id={id} name={name} age={age} loadStudents={loadStudents}/>;
        })}
        </div>
        <Link to='/add'>
        <img src={AddUserIcon} alt='add user' className='h-[50px] fixed bottom-5 right-5 cursor-pointer'/>
        </Link>
    </div>
  )
}

export default Home