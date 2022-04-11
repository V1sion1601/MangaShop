import React, { useState } from "react";
//Dummy Data
import { itemsDataReleased } from "../utils/dummyData";
//Components
import Item from "./Item";
import Error from "./Error";
const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  let foundResult = [];
  search === ""
    ? (foundResult = itemsDataReleased)
    : (foundResult = itemsDataReleased.filter((data) =>
        data.name.includes(search)
      ));
  return (
    <div className="flex flex-col justify-start items-start w-full py-4">
      <input
        placeholder="Find your search..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-4 px-4 rounded-lg outline-none"
      />
      <div className="h-full grid grid-cols-4 gap-6 w-full pt-6">
        {foundResult.length > 0 ? (
          foundResult.map((book) => (
            <Item
              key={book?.id}
              id={book?.id}
              name={book?.name}
              status={book?.status}
              price={book?.price}
              imgSrc={book?.imgSrc}
            />
          ))
        ) : (
          <Error msg={"Sorry, seems like you type it wrong"} />
        )}
      </div>
    </div>
  );
};

export default Search;
