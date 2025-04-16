import React from 'react'

const Input = ({type, className, ...data}) => {
  return (
    <>
    <input 
    type={type} 
    {...data}
    className= {`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
    </>
  )
}

export default Input
// import React from 'react'

// const Input = ({type, placeholder, className, onChange, value,}) => {
//   return (
//     <>
//     <input 
//     type={type} 
//     placeholder={placeholder}
//     required
//     value={value}
//     onChange={onChange}
//     className= {`w-full p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 ${className}`} />
//     </>
//   )
// }

// export default Input
