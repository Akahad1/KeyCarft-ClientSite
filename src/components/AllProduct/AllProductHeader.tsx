const AllProductHeader = () => {
  const sorthandler = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const sort = event.target.value;

    console.log(sort);
  };
  const getSearchValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = event.target.value;
    console.log(searchValue);
  };
  return (
    <div className="w-full">
      <div className="lg:flex lg:justify-center  m-auto lg:pt-32 pb-32  pt-10">
        <div>
          <div className="form-control  lg:mr-20 lg:ml-96 md:mr-20 mr-32">
            <div className="input-group navbar-center">
              <input
                onChange={getSearchValue}
                type="text"
                placeholder="Search…"
                className="input input-bordered md:w-96  lg:w-[400px]  p-2"
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
              </button> */}
            </div>
          </div>
        </div>
        <div className="input-group lg:mr-0 mr-1 md:mr-4">
          <select
            onChange={sorthandler}
            name="sort"
            className="select select-bordered  md:w-44 lg:w-96 lg:ml-24 navbar-end w-32"
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
