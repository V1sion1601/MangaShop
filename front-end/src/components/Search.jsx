import React, { useState } from "react";
//Dummy Data
import { itemsDataReleased } from "../utils/dummyData";
//Components
import Item from "./Item";
import Error from "./Error";
import { useEffect } from "react";
const Search = () => {
  const [search, setSearch] = useState("");
  console.log(search);
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await itemsDataReleased();
        setProductList(response);
        console.log(productList);
      } catch (error) {
        console.log("Failed to fetch product list: ", error);
      }
    };
    fetchProductList();
  }, []);
  let foundResult = [];
  search === ""
    ? (foundResult = productList)
    : (foundResult = productList.filter((data) =>
        data.Name.toLowerCase().includes(search.toLowerCase())
      ));
  console.log(foundResult);
  return (
    <div className="flex flex-col justify-start items-start w-full py-4">
      <input
        placeholder="Nhập để tìm kiếm..."
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full py-4 px-4 rounded-lg outline-none"
      />
      {foundResult.length > 0 ? (
        <>
          <div className="h-full grid grid-cols-4 gap-6 w-full pt-6">
            {foundResult.map((book) => (
              <Item
                key={book?.ID}
                ID={book?.ID}
                Name={book?.Name}
                status={book?.quantity}
                price={book?.price}
                image={book?.image}
              />
            ))}
          </div>
        </>
      ) : (
        <>
          <div className="w-full flex flex-col items-center justify-center">
            <Error msg={"Không có kết quả, mời bạn nhập lại"} />
          </div>
        </>
      )}
    </div>
  );
};

export default Search;
