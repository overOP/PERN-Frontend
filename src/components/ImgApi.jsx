import React from 'react'
import usefetch from '../hook/usefetch'

const ImgApi = () => {
  const [posts, loading, error] = usefetch("http://localhost:3000/post");
  console.log(posts);

  return (
    <div className="bg-[#a6a3d9] min-h-screen p-8 text-[#3d3d3d] font-sans">
      <div className='flex flex-col items-center justify-center'>
        <ul>
          {loading && <p className='text-blue-500'>Data is loading</p>}
          {error && <p className='text-red-500'>{error.message}</p>}
          {posts.map((post, index) => (
            <div key={index} className='flex text-white items-center justify-center border-2 border-blue-500 rounded-lg p-3 m-2'>
              <li>{post.id}</li>
              <li>{post.title}</li>
              <li>{post.content}</li>
              <li>
                {post.image && post.image.length > 0 ? (
                  <div className="flex flex-wrap">
                    {post.image.map((img, idx) => (
                      <img key={idx} src={`http://localhost:3000/${img}`} className="w-20 h-20 m-2" alt={post.title} />
                    ))}
                  </div>
                ) : (
                  <p>No Image Available</p>
                )}
              </li>
            </div>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default ImgApi

