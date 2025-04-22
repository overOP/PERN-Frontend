import React from 'react'
import { useState, useEffect } from "react";
import axios from "axios";

const ImgApi = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    useEffect(() => {
        fetchUsers();
    }, []);

    const fetchUsers = async () => {
        try {
            setLoading(true);
            const response = await axios.get("http://localhost:3000/post/imgApi");
            const alldata = (response.data.data);
            setUsers(alldata);
        } catch (error) {
            setError(error);
            console.log("Error fetching data:", error);
        } finally {
            setLoading(false);
        }
    }
  return (
    <div className="bg-[#a6a3d9]  min-h-screen p-8 text-[#3d3d3d] font-sans">
    <div className=' flex flex-col items-center justify-center'>
      <ul>
      {
       loading && <p className='text-blue-500'>Data is loading</p>
      }
      {
        error && <p className='text-red-500'>{error.message}</p>
      }
      {
        users.map((users, index) => (
          <div key={index} className='flex flex-col items-center justify-center'>
            <li>{users.id}</li>
            <li>{users.email}</li>
          </div>
        ))
      }
      </ul>
    </div>
    </div>
  )
}

export default ImgApi
