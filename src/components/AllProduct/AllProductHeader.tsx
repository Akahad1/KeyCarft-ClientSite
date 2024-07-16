import React from "react";

interface AllProductHeaderProps {
  setQuery: (query: string | { sort: string } | "") => void;
}

const AllProductHeader: React.FC<AllProductHeaderProps> = ({ setQuery }) => {
  const sorthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    setQuery({ sort }); // setQuery should accept an object with a sort key
    console.log(sort);
  };

  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value.trim();
    if (searchValue) {
      setQuery(searchValue); // setQuery should accept a string for search queries
    } else {
      setQuery(""); // Clear the filter if searchValue is empty
    }
  };

  return (
    <div className="w-full">
      <div className="ml-10 lg:flex md:flex md:justify-center lg:justify-center m-auto lg:pt-16 pb-16 pt-10">
        <div className="">
          <button onClick={() => setQuery("")} className="btn w-72">
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
