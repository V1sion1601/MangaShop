import React from "react";
import Item from "./Item";
//Components
const DisplayItems = ({ cateId, arrData }) => {
  const categoryId = parseInt(cateId);
  let arrResult = [];
  cateId
    ? (arrResult = arrData.filter((data) => data.cateId === categoryId))
    : (arrResult = arrData);

  return (
    <div className="grid grid-cols-4 gap-4">
      {arrResult.map((book) => (
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
  );
};

export default DisplayItems;
