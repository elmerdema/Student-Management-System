import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';


function Student() {
    const[student,setStudent]=useState([]);
    useEffect (()=>{

          axios.get('http://localhost:8081/')
          .then(res=>setStudent(res.data))
          .catch(err=>console.log(err));

    })
    return (
        <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
            <div className='w-50 bg-white-rounded p-3'>
            <div className="button-left">
            <Link to="/create" className="btn btn-success justify" style={{float: 'left'}}>Add+</Link>
            </div>
            <table className="table">
               <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th colspan="2">Action</th>
                    </tr>
                
                    {student.map((data,i)=>(
                        <tr>    
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                            <td><button className="btn btn-primary">Add</button></td>
                            <td><button className="btn btn-danger ms-2">Delete</button></td>
                        </tr>
                    ))}
                
                </thead> 
            </table>
            </div>
        </div>    
    )
}
export default Student;