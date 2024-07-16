import React from "react";
import { useAppDispatch } from "../../redux/hook";
import { addQurey } from "../../redux/Features/productSlice";

// interface AllProductHeaderProps {
//   setQuery: (query: string | { sort: string } | "") => void;
// }

const AllProductHeader = () => {
  const dispatch = useAppDispatch();
  const sorthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    dispatch(addQurey({ sort })); // setQuery should accept an object with a sort key
    console.log(sort);
  };

  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.trim();
    if (searchValue) {
      dispatch(addQurey(searchValue));
    } else {
      dispatch(addQurey("")); // Clear the filter if searchValue is empty
    }
  };

  return (
    <div className="w-full">
      <div className="ml-10 lg:flex md:flex md:justify-center lg:justify-center m-auto lg:pt-16 pb-16 pt-10">
        <div className="">
          <button onClick={() => dispatch(addQurey(""))} className="btn w-72">
            Clear filter
          </button>
          <div className="form-control lg:mr-20 lg:ml-96 mt-10 md:mr-20 mr-32">
            <div className="input-group">
              <input
                onChange={getSearchValue}
                type="text"
                placeholder="Search…"
                className="input input-bordered lg:w-[400px] w-72 p-2"
              />
            </div>
          </div>
        </div>
        <div className="input-group lg:mr-0 mr-1 md:mr-4 mt-5">
          <select
            onChange={sorthandler}
            name="sort"
            className="select select-bordered lg:w-96 lg:ml-24 navbar-end w-72"
          >
            <option selected>Default sorting</option>
            <option>Sort by price: low to high</option>
            <option>Sort by price: high to low</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllProductHeader;
