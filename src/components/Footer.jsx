const Footer = () => {
  return (
    <>
    <footer className="bg-gray-900 text-white p-4 text-center">
      <p>&copy; {new Date().getFullYear() // Get the current year
      } PERN by Pradeep Chaudhary</p>
    </footer>
    </>
  )
}

export default Footer
