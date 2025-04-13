import React from 'react'

const From = () => {
  return (
    <>
        <div className="min-h-screen bg-green-100 flex items-center justify-center p-4">
  <form className="bg-white p-6 rounded-2xl shadow-md w-full max-w-md lg:max-w-2xl space-y-4">
    <h2 className="text-2xl font-bold text-gray-800">Contact Us</h2>

<div className='lg:grid lg:grid-cols-2 lg:gap-4'>
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">First Name <span className="text-green-600">*</span></label>
      <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
    </div>


    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Last Name <span className="text-green-600">*</span></label>
      <input type="text" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
    </div>
</div>

    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Email Address <span className="text-green-600">*</span></label>
      <input type="email" className="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400" />
    </div>


    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Query Type <span className="text-green-600">*</span></label>
      <div className="space-y-2 lg:grid lg:grid-cols-2 lg:gap-4">
        <label className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 cursor-pointer">
          <input type="radio" name="query" className="form-radio text-green-500" />
          <span>General Enquiry</span>
        </label>
        <label className="flex items-center space-x-2 border border-gray-300 rounded-md p-2 cursor-pointer">
          <input type="radio" name="query" className="form-radio text-green-500" />
          <span>Support Request</span>
        </label>
      </div>
    </div>


    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">Message <span class="text-green-600">*</span></label>
      <textarea rows="5" class="w-full border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-green-400"></textarea>
    </div>


    <div className="flex items-start space-x-2">
      <input type="checkbox" className="mt-1 form-checkbox text-green-500" />
      <label className="text-sm text-gray-700">I consent to being contacted by the team <span class="text-green-600">*</span></label>
    </div>


    <button type="submit" className="w-full bg-green-600 text-white font-medium py-2 rounded-md hover:bg-green-700 transition">
      Submit
    </button>
  </form>
</div>
    </>
  )
}

export default From
