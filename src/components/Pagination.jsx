import React, { useState } from "react";
import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";

const Pagination = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5; // Change this to the total number of pages

  const goToPage = (page) => {
    setCurrentPage(page);
  };

  const goToPrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const goToNextPage = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages));
  };

  return (
    <div className="pagination text-[20px] text-[#AFAFAF] font-semibold mx-0">
      <button className="pagination-arrow" onClick={goToPrevPage}>
        <FaArrowLeft />
      </button>

      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index + 1}
          className={`pagination-button ${
            currentPage === index + 1 ? "active" : ""
          }`}
          onClick={() => goToPage(index + 1)}
        >
          {index + 1}
        </button>
      ))}

      <button
        className="pagination-arrow text-[#6C759D]"
        onClick={goToNextPage}
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Pagination;
