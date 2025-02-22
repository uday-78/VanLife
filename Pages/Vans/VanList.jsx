// import React ,{useState ,useEffect} from "react";
// import Van from "../components/van";

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

export default function VanList() {
  const [originalVans, setOriginalVans] = useState([]);
  const [filterVans, setFilterVans] = useState([]);
  const [selectedFilter, setSelectedFilter] = useState(""); // Track the selected filter

  useEffect(() => {
    async function getVanList() {
      try {
        const response = await fetch("/api/vans");
        const data = await response.json();
        console.log(data.vans);
        setOriginalVans(data.vans);
        setFilterVans(data.vans);
      } catch (error) {
        console.error("Failed to fetch vans", error);
      }
    }

    getVanList();
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
                  onClick={() => filterType(type)}
                  className={`FilterButton px-2 py-2 rounded-sm transition ${
                    selectedFilter === type
                      ? "bg-black text-white" // Selected: Black background, White text
                      : "bg-[#FFEAD0] text-black" // Default: Light background, Black text
                  }`}
                >
                  {type}
                </button>
              ))}
            </div>
            <p
              onClick={() => {
                setFilterVans(originalVans);
                setSelectedFilter(""); // Reset selected filter
              }}
              className="clearBtn bg-red-600 text-white px-1.5 py-1.5 rounded-sm cursor-pointer"
            >
              Clear Filters
            </p>
          </div>
        </div>

        <div className="VanListContainer p-3 grid grid-cols-2 gap-4">
          {filterVans.map((van) => (
            <Van key={van.id} {...van} />
          ))}
        </div>
      </div>
    </div>
  );
}
