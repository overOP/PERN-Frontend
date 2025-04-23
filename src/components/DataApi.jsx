import React from 'react'
import usefetch from '../hook/usefetch'

const DataApi = () => {
  const [users, loading, error] = usefetch("http://localhost:3000/users/dataApi");
  console.log(users);

  return (
    <div className="bg-[#a6a3d9] min-h-screen p-8 text-[#3d3d3d] font-sans">
      <div className='flex flex-col items-center justify-center'>
        <ul>
          {loading && <p className='text-blue-500'>Data is loading</p>}
          {error && <p className='text-red-500'>{error.message}</p>}
          {users.map((user, index) => (
            <div key={index} className='flex flex-col items-center justify-center'>
              <li>{user.id}</li>
              <li>{user.email}</li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default DataApi

