import React from 'react'
import { Link } from 'react-router'

const Contact = () => {
  return (
    <div className="bg-[#a6a3d9]  min-h-screen p-8 text-[#3d3d3d] font-sans">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-[#2f1c1c]">Contact</h1>
        <p className="text-lg">
          You can contact me by sending an email to <a href="mailto:pern@pern.com" className="text-blue-500">cgpradeepop@gmail.com</a>
        </p>
        <p className="text-lg">
          Or you can follow me on social media:
        </p>
        <ul className="list-none mb-8">
          <li className="mb-2">
            <a href="https://www.linkedin.com/in/pradeep-chaudhary-0a49b331a/" className="text-blue-500 hover:underline">Linkedin</a>
          </li>
          <li className="mb-2">
            <a href="https://github.com/overOP" className="text-blue-500 hover:underline">GitHub</a>
          </li>
        </ul>
        <p className="text-lg">
          Or you can go back to the <Link to="/" className="text-blue-500 hover:underline">home page</Link>
        </p>
      </div>
    </div>
  )
}

export default Contact
