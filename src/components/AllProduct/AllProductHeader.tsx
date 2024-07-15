const AllProductHeader = ({ setQurey }) => {
  const sorthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;
    setQurey(sort);
    setQurey({ sort: sort });

    console.log(sort);
  };
  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;

    console.log({ searchTerm: searchValue });

    if (searchValue) {
      setQurey(searchValue);
    } else {
      setQurey("");
    }
  };
  return (
    <div className="w-full">
      <div className="ml-10  lg:flex  md:flex md:justify-center lg:justify-center  m-auto lg:pt-16 pb-16  pt-10">
        <div className="">
          <button onClick={() => setQurey("")} className="btn w-72">
            Clear filter
          </button>
          <div className="form-control  lg:mr-20 lg:ml-96 mt-10 md:mr-20 mr-32">
            <div className="input-group ">
              <input
                onChange={getSearchValue}
                type="text"
                placeholder="Search…"
                className="input input-bordered   lg:w-[400px] w-72  p-2"
              />
              {/* <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6 "
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    className=""
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>  */}
            </div>
          </div>
        </div>
        <div className="input-group lg:mr-0 mr-1 md:mr-4 mt-5">
          <select
            onChange={sorthandler}
            name="sort"
            className="select select-bordered   lg:w-96 lg:ml-24 navbar-end w-72"
          >
            <option selected>Default sorting</option>
            <option>Sort by price: low to hight </option>
            <option>Sort by price: hight to low </option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default AllProductHeader;
