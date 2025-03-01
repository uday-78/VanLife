// import React ,{useState ,useEffect} from "react";
// import Van from "../../components/van"

// export default function VanList(){

//    const[originalVans ,setOriginalVans] = useState([]);
//    const[filterVans ,setFilterVans] = useState([]);
//    const[IsSelected ,setIsSelected] = useState(false);

//     useEffect(()=>{

//       async function getVanList(){
//         try {
//           const response = await fetch("/api/vans");
//           const data = await response.json();
//           console.log(data.vans);

//           setOriginalVans(data.vans);
//           setFilterVans(data.vans);
//         } catch (error) {

//         }
//       }

//       getVanList();
//     },[])

//     const filterType = (givenType) =>{
//       const filteredVans = originalVans.filter(van => van.type.toLowerCase() === givenType.toLowerCase());
//       setFilterVans(filteredVans);
//     }

//     return (
//       <div className="container bg-[#FFF7ED]">
//         <div className="VanContainer">
//           <div className="FilterContainer">
//             <div className="p-4">
//               <h2 className="font-bold text-3xl">Explore our van options</h2>
//             </div>
//             <div className="flex justify-between p-4 items-center">
//               <div className="space-x-2">
//                 <button onClick={() => {
//                   filterType('Simple')
//                   setIsSelected(!IsSelected);
//                   }} className={`FilterButton px-2 py-2 bg-[#FFEAD0] rounded-sm ${IsSelected ? 'bg-red-400' : ''}`}>Simple</button>
//                 <button onClick={() => {
//                   filterType('Rugged')
//                   setIsSelected(!IsSelected);
//                 }} className={`FilterButton px-2 py-2 bg-[#FFEAD0] rounded-sm ${IsSelected ? 'bg-red-400' : ''}`}>Rugged</button>
//                 <button onClick={() => {
//                   filterType('Luxury')
//                   setIsSelected(!IsSelected)
//                 }} className={`FilterButton px-2 py-2 bg-[#FFEAD0] rounded-sm ${IsSelected ? 'bg-red-400' : ''}`}>Luxury</button>
//               </div>
//               <p onClick={()=>{
//                setFilterVans(originalVans)

//               }} className="clearBtn bg-red-600 text-white px-1.5 py-1.5 rounded-sm">Clear Filters</p>
//             </div>
//           </div>

//           <div className="VanListContainer p-3 grid grid-cols-2 gap-4">
//             {
//              filterVans.map((van)=>(
//               <Van key={van.id} {...van}/>
//              ))
//             }
//           </div>
//         </div>
//       </div>
//     );
// }

import React, { useState, useEffect } from "react";
import Van from "../../components/van";
import { Link, NavLink, useSearchParams } from "react-router-dom"; // Fixed import
import Skeleton from "../../components/Skeleton";
import { getVans } from "../../api";

export default function VanList() {
  const [originalVans, setOriginalVans] = useState([]);
  const [filterVans, setFilterVans] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(""); // Track the selected filter
  const [IsLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null); // Error state

  const [searchParams, setSearchParams] = useSearchParams();

  const typeFilter = searchParams.get("type");

  const displayVan =
    typeFilter && filterVans
      ? filterVans.filter(
          (van) => van.type.toLowerCase() === typeFilter.toLowerCase()
        )
      : originalVans || [];

  const activeClass = "px-2 py-2 rounded-sm transition bg-black text-white";
  const defaultClass =
    "px-2 py-2 rounded-sm transition bg-[#FFEAD0] text-black";

  useEffect(() => {
    async function loadVans() {
      setIsLoading(true); // Set loading to true when starting
      try {
        const data = await getVans();
        setOriginalVans(data || []); // Ensure we set an empty array if data is null
        setFilterVans(data || []);
      } catch (err) {
        setError(err);
        console.error("Error fetching vans:", err);
      } finally {
        setIsLoading(false);
      }
    }

    loadVans();
  }, []);

  const filterType = (givenType) => {
    if (selectedFilter === givenType) {
      // If the same filter is clicked again, reset
      setSelectedFilter("");
      setFilterVans(originalVans);
    } else {
      // Otherwise, apply the filter
      const filteredVans = originalVans.filter(
        (van) => van.type.toLowerCase() === givenType.toLowerCase()
      );
      setFilterVans(filteredVans);
      setSelectedFilter(givenType);
    }
  };

  function genNewSearchParamsString(key, value) {
    const sp = new URLSearchParams(searchParams);
    if (value === null) {
      sp.delete(key);
    } else {
      sp.set(key, value);
    }

    return `?${sp.toString()}`;
  }

  function handleFilterChange(key, value) {
    setSearchParams((prevParams) => {
      if (value === null) prevParams.delete(key);
      else prevParams.set(key, value);

      return prevParams;
    });
  }

  // Show skeleton loader while loading
  if (IsLoading) return <Skeleton />;

  // Show error message if there's an error
  if (error) {
    console.log("Getting error", error);
    return (
      <div className="container p-8 bg-[#FFF7ED]">
        <h2 className="text-2xl font-bold mb-4">Error Loading Vans</h2>
        <p className="text-red-600 font-bold text-xl mb-4">
          {error.message || "An unknown error occurred"}
          {error.status ? ` (Status: ${error.status})` : ""}
        </p>
        <button
          onClick={() => window.location.reload()}
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="container bg-[#FFF7ED]">
      <div className="VanContainer">
        <div className="FilterContainer">
          <div className="p-4">
            <h2 className="font-bold text-3xl">Explore our van options</h2>
          </div>
          <div className="flex justify-between p-4 items-center">
            <div className="space-x-2">
              {["Simple", "Rugged", "Luxury"].map((type) => (
                <button
                  key={type}
                  onClick={() => handleFilterChange("type", `${type}`)}
                  className={typeFilter === type ? activeClass : defaultClass}
                >
                  {type}
                </button>
              ))}
            </div>

            {typeFilter ? (
              <button
                onClick={() => handleFilterChange("type", null)}
                className="clearBtn bg-red-600 text-white px-1.5 py-1.5 rounded-sm cursor-pointer"
              >
                Clear Filters
              </button>
            ) : null}
          </div>
        </div>

        <div className="VanListContainer p-3 grid grid-cols-2 gap-4">
          {displayVan.map((van) => (
            <Van key={van.id} {...van} />
          ))}
        </div>
      </div>
    </div>
  );
}
