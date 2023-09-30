import React, { useEffect, useState } from 'react'
import axios from 'axios';


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
            <button className="btn btn-success justify" style={{float: 'left'}}>Add+</button>
            </div>
            <table className="table">
               <thead>
                    <tr>
                    <th>Name</th>
                    <th>Email</th>
                    </tr>
                
                    {student.map((data,i)=>(
                        <tr>    
                            <td>{data.Name}</td>
                            <td>{data.Email}</td>
                        </tr>
                    ))}
                
                </thead> 
            </table>
            </div>
        </div>    
    )
}
export default Student;