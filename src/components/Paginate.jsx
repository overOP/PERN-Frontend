import React, { useState } from "react";
import ReactPaginate from "react-paginate";

const Paginate = () => {
  const items = Array.from(
    {
      length: 100,
    },
    (_, index) => `item ${index + 1} `
  );
  const itemsPerPage = 10;

  const [currentPage, setCurrentPage] = useState(0);
    
  const offset = currentPage * itemsPerPage;
  const currentItems = items.slice(offset, offset + itemsPerPage);//it is used to get a part of an array
  //slice() method returns selected elements in an array, as a new array
  const pageCount = Math.ceil(items.length / itemsPerPage);
  //ceil() method rounds a number up to its nearest integer
  const handlePageClick = ({ selected: selectedPage }) => {
    setCurrentPage(selectedPage);
  }
  return (
    <>
      <div className="bg-[#a6a3d9] min-h-screen p-8  font-sans text-white">
      <ul className="flex flex-wrap items-center justify-center border-2 border-blue-500 rounded-lg p-3 m-2">
        {
            currentItems.map((item, index) => (
                <li key={index} className="m-2">{item}</li>
            ))
        }
      </ul>
        <ReactPaginate
            pageCount={pageCount}
            onPageChange={handlePageClick}
            previousLabel={"<"}
            nextLabel={">"}
            containerClassName="pagination"
            activeClassName="active"
            pageRangeDisplayed={5}
            marginPagesDisplayed={2}
            className="flex items-center justify-center gap-4 m-4 border-2 border-blue-500 rounded-lg p-3 "
        />
      </div>
    </>
  );
};

export default Paginate;
