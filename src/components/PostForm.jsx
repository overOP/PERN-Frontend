import React, { useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDropzone } from "react-dropzone";
import { http } from "../config/axios";

const PostForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const [selectedImages, setSelectedImages] = useState([]);
  const [cancelledImages, setCancelledImages] = useState(new Set());

  console.log(selectedImages);

  const onDrop = useCallback((acceptedFiles) => {
    const filesWithPreview = acceptedFiles.map((file) =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
      })
    );
    setSelectedImages((prev) => [...prev, ...filesWithPreview]);
  }, []);

  //dropzone
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: true,
  });

// cancel image
  const onCancelImage = (file) => {
    URL.revokeObjectURL(file.preview);
    setCancelledImages((prev) => new Set([...prev, file]));
    setSelectedImages((prev) => prev.filter((img) => img !== file));
  };

  //submit form
  const onSubmit = (data) => {
    const formData = new FormData();
    formData.append("title", data.title);
    formData.append("content", data.content);
    selectedImages
      .filter((file) => !cancelledImages.has(file))
      .forEach((file) => {
        formData.append("images", file);
      });
    senddataToApi(formData)
  };

// send data to api
  const  senddataToApi = async (formData)=> {
       try {
        const response = await http.post("/post", formData)
        console.log(response)
       } catch (error) {
          console.log(error)
       }
  }


  return (
    <div className="bg-[#a6a3d9] min-h-screen p-8 text-[#3d3d3d] font-sans">
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-lg mx-auto p-4 bg-white shadow-md rounded-lg"
    >
      {/* Title Field */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="title"
        >
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register("title", { required: "Title required" })}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post title"
        />
        {errors.title && <p className="text-red-400">{errors.title.message}</p>}
      </div>

      {/* Content Field */}
      <div className="mb-4">
        <label
          className="block text-sm font-medium text-gray-700"
          htmlFor="content"
        >
          Content
        </label>
        <textarea
          id="content"
          {...register("content")}
          className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Enter post content"
        />
      </div>

      {/*  yaha muni chai image  */}
      <div className="mb-4">
        <label className="block text-sm font-medium text-gray-700">
          Upload Images
        </label>
        <div
          {...getRootProps()}
          className={`mt-1 p-4 border-2 border-dashed rounded-md cursor-pointer ${
            isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
          }`}
        >
          <input {...getInputProps()} />
          <p className="text-sm text-gray-500">
            {isDragActive
              ? "Drop the images here..."
              : "Drag & drop images here, or click to select files"}
          </p>
        </div>
      </div>

      {selectedImages.length > 0 && (
        <div className=" grid grid-cols-5 gap-3 mt-3">
          {selectedImages.map((file, index) => (
            <div key={index} className="relative">
              <img
                className=" h-24 w-full"
                src={file.preview}
                alt={`file-${index}-preview`}
              />
              <button
                type="button"
                className="absolute right-0 top-0 p-2 bg-red-500 text-white rounded-full hover:bg-red-700"
                onClick={() => onCancelImage(file)}
              >
                x
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Submit Button */}
      <button
        type="submit"
        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700"
      >
        Submit
      </button>
    </form>
    </div>
  );
};

export default PostForm;








// import React, { useCallback, useEffect, useState } from "react";
// import { useForm } from "react-hook-form";
// import { useDropzone } from "react-dropzone";

// const PostForm = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const [selectedImages, setSelectedImages] = useState([]);
//   const [cancelledImages, setCancelledImages] = useState(new Set());

//   // Handle image drop
//   const onDrop = useCallback((acceptedFiles) => {
//     const filesWithPreview = acceptedFiles.map((file) =>
//       Object.assign(file, {
//         preview: URL.createObjectURL(file),
//       })
//     );
//     setSelectedImages((prev) => [...prev, ...filesWithPreview]);
//   }, []);

//   // Dropzone config
//   const { getRootProps, getInputProps, isDragActive } = useDropzone({
//     onDrop,
//     accept: { "image/*": [] },
//     multiple: true,
//   });

//   // Cancel image
//   const onCancelImage = (file) => {
//     URL.revokeObjectURL(file.preview);
//     setCancelledImages((prev) => new Set([...prev, file]));
//     setSelectedImages((prev) => prev.filter((img) => img !== file));
//   };

//   // Clean up previews on unmount
//   useEffect(() => {
//     return () => {
//       selectedImages.forEach((file) => URL.revokeObjectURL(file.preview));
//     };
//   }, [selectedImages]);

//   // Handle form submit
//   const onSubmit = (data) => {
//     const formData = new FormData();
//     formData.append("title", data.title);
//     formData.append("content", data.content || "");

//     selectedImages
//       .filter((file) => !cancelledImages.has(file))
//       .forEach((file) => {
//         formData.append("images", file);
//       });

//     console.log("FormData ready with:", {
//       title: data.title,
//       content: data.content,
//       files: selectedImages.filter((file) => !cancelledImages.has(file)),
//     });

//     // Submit with fetch or other logic
//   };

//   return (
//     <div className="bg-[#a6a3d9] min-h-screen p-8 text-[#3d3d3d] font-sans">
//     <form
//       onSubmit={handleSubmit(onSubmit)}
//       className="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-md"
//     >
//       {/* Title */}
//       <div className="mb-4">
//         <label htmlFor="title" className="block text-sm font-medium text-gray-700">
//           Title
//         </label>
//         <input
//           id="title"
//           type="text"
//           {...register("title", { required: "Title required" })}
//           className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           placeholder="Enter post title"
//         />
//         {errors.title && <p className="text-red-500 text-sm mt-1">{errors.title.message}</p>}
//       </div>

//       {/* Content */}
//       <div className="mb-4">
//         <label htmlFor="content" className="block text-sm font-medium text-gray-700">
//           Content
//         </label>
//         <textarea
//           id="content"
//           {...register("content")}
//           className="mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
//           rows={4}
//           placeholder="Enter post content"
//         />
//       </div>

//       {/* Image Upload */}
//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700">Upload Images</label>
//         <div
//           {...getRootProps()}
//           className={`mt-1 p-4 border-2 border-dashed rounded-md text-center cursor-pointer ${
//             isDragActive ? "border-indigo-500 bg-indigo-50" : "border-gray-300"
//           }`}
//         >
//           <input {...getInputProps()} />
//           <p className="text-sm text-gray-500">
//             {isDragActive
//               ? "Drop the images here..."
//               : "Drag & drop images here, or click to select files"}
//           </p>
//         </div>

//         {selectedImages.length > 0 && (
//           <div className="grid grid-cols-3 gap-3 mt-4">
//             {selectedImages.map((file, idx) => (
//               <div key={file.preview} className="relative group">
//                 <img
//                   src={file.preview}
//                   alt={`Preview ${idx}`}
//                   className="w-full h-32 object-cover rounded-md"
//                 />
//                 <button
//                   type="button"
//                   aria-label="Remove image"
//                   onClick={() => onCancelImage(file)}
//                   className="absolute top-1 right-1 bg-red-600 hover:bg-red-700 text-white rounded-full p-1 text-xs"
//                 >
//                   ✕
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}
//       </div>

//       {/* Submit Button */}
//       <button
//         type="submit"
//         className="w-full bg-indigo-600 text-white font-medium py-2 rounded-md hover:bg-indigo-700 transition"
//       >
//         Submit
//       </button>
//     </form>
//     </div>
//   );
// };

// export default PostForm;
