import React, { useState, useEffect, useMemo, useRef } from "react";
import Item from "./Item";
import { useNavigate } from "react-router-dom";
//Components
import ReactPaginate from "react-paginate";

const DisplayItems = ({ cateId, arrData }) => {
  const categoryId = parseInt(cateId);
  let arrResult = useMemo(() => [], []);

  cateId
    ? (arrResult = arrData.filter((data) => data.cateId === categoryId))
    : (arrResult = arrData);
  const itemsPerPage = 4;
  const [currentItems, setCurrentItems] = useState(arrResult);
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  const handlePageClick = (event) => {
    const newOffset =
      (parseInt(event.selected) * itemsPerPage) % arrResult.length;
    localStorage.setItem("currentPage", parseInt(event.selected));

    setItemOffset(newOffset);

    // navigate(`/shop/${categoryId}`);
  };

  useEffect(() => {
    let endOffset = itemOffset + itemsPerPage;

    if (arrResult.slice(itemOffset, endOffset).length > 0) {
      setCurrentItems(arrResult.slice(itemOffset, endOffset));
    } else {
      setCurrentItems(arrResult.slice(0, itemsPerPage));
    }

    setPageCount(Math.ceil(arrResult.length / itemsPerPage));
  }, [itemOffset, itemsPerPage, arrResult]);
  return (
    <div>
      <div className="grid grid-cols-4 gap-4">
        {currentItems.map((book) => (
          <div>
            <Item
              key={book?.id}
              id={book?.id}
              name={book?.name}
              status={book?.status}
              price={book?.price}
              imgSrc={book?.imgSrc}
            />
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center space-x-1 py-6">
        {pageCount > 1 && (
          <ReactPaginate
            breakLabel="..."
            nextLabel="Sau"
            previousClassName="flex items-center px-4 py-2 text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
            nextClassName="px-4 py-2 font-bold text-gray-500 bg-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
            containerClassName="inline flex flex-row gap-3"
            pageClassName="px-4 py-2 text-gray-700 bg-gray-200 cursor-pointer rounded-md hover:bg-indigo-400 hover:text-white"
            onPageChange={handlePageClick}
            pageRangeDisplayed={5}
            pageCount={pageCount}
            initialPage={parseInt(localStorage.getItem("currentPage"))}
            previousLabel="Trước"
            renderOnZeroPageCount={null}
            activeClassName="bg-indigo-300"
          />
        )}
      </div>
    </div>
  );
};

export default DisplayItems;
