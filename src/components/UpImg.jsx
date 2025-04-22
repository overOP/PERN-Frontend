import React from 'react';
import {useForm} from 'react-hook-form';
import Input from './Input';

const UpImg = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();

    const create = async (data) => {
      try {
        const response = await fetch('http://localhost:3000/users/create', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(data),
        });
        const dataResponse = await response.json();
        console.log(dataResponse);
      } catch (error) {
        console.error('Error:', error);
      }
    }

  return (
    <div className="bg-[#a6a3d9] min-h-screen p-8 text-[#3d3d3d] font-sans">
      <div className="flex flex-col items-center justify-center">
        <form 
          className="flex flex-col border border-gray-300 p-4 gap-4" 
          action="/upload" // This is the endpoint where the form data will be sent
          method="post"  // HTTP method to use for the request
          encType="multipart/form-data" // This is important for file uploads
          onSubmit={handleSubmit((data) => create(data))}
        >
          <input type="file" name="file" className="mb-2 " />
          <Input
              type="text"
              placeholder="title"
              {...register('title', {
                required: 'title is required',
              })}
            />
            {errors.title && <span className="text-red-500">{errors?.title.message}</span>} 
            <Input
              type="text"
              placeholder="descrptione"
              {...register('descrptione', {
                required: 'descrption is required',
              })}
            />
            {errors.descrptione && <span className="text-red-500">{errors?.descrptione.message}</span>} 
          <button 
            type="submit" 
            className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
          >
            Upload
          </button>
        </form>
      </div>
    </div>
  );
}

export default UpImg;
