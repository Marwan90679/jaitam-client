import React, { useEffect, useState } from "react";
import Loading from "../../Pages/Loading/Loading";
const SearchBar = ({setData}) => {
    const [searchParams,setSearchParams]=useState("")
      const [sortOption, setSortOption] = useState("");
    const [loading,setLoading]=useState(true)
    useEffect(()=>{
        fetch(`https://jaitam-backend.vercel.app/availableCars?searchParams=${searchParams}&sort=${sortOption}`)
        .then(res=>res.json())
        .then(data=>{
            setData(data)
            setLoading(false)
        })
    },[searchParams,setData,sortOption])

if(loading)return <Loading></Loading>
  return (
    <div className=" flex items-center justify-center gap-4 w-3/4 mx-auto flex-col lg:flex-row">
      <div className="flex justify-center">
        <label className="input">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <circle cx="11" cy="11" r="8"></circle>
              <path d="m21 21-4.3-4.3"></path>
            </g>
          </svg>
          <input onChange={(e)=>setSearchParams(e.target.value)} type="search" className="w-70" placeholder="Search cars ( model , location ...)" />
        </label>
      </div> 
      <div className="flex justify-center my-3 px-4">
        <form className="filter flex flex-wrap justify-center gap-3">
          <button
            type="button"
            className="btn btn-square"
            onClick={() => setSortOption("")}
          >
            ×
          </button>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "high"}
              onClick={() => setSortOption("high")}
              readOnly
            />
            <span className="ml-2">Price High</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "low"}
              onClick={() => setSortOption("low")}
              readOnly
            />
            <span className="ml-2">Price Low</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "new"}
              onClick={() => setSortOption("new")}
              readOnly
            />
            <span className="ml-2">Newest</span>
          </label>

          <label className="btn whitespace-nowrap">
            <input
              type="radio"
              name="sort"
              checked={sortOption === "old"}
              onClick={() => setSortOption("old")}
              readOnly
            />
            <span className="ml-2">Oldest</span>
          </label>
        </form>
      </div>   
    </div>
  );
};

export default SearchBar;
