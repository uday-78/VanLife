import { useEffect, useState} from "react";
import { Link } from "react-router";




export default function HostVans() {
  const [HostVan, setHostVan] = useState([]);

  useEffect(() => {
    async function getAllHostVan() { 
      try {
        const response = await fetch("/api/host/vans");
        const data = await response.json();
        console.log(data.vans);
        setHostVan(data.vans);
      } catch (error) {
        console.error("Error fetching host vans:", error);
      }
    }
    getAllHostVan();
  }, []);

  return ( 
    <div className="flex flex-col items-center">
      {HostVan.map((van) => (
        <Link to={`${van.id}`} key={van.id} className="block mb-4">
          <div className="HostVanContainer p-3 bg-grey-200 flex gap-4 border">
            <div className="p-3">
              <img
                className="w-[100px] h-auto"
                src={van.imageUrl} 
                alt={`${van.name} picture`}
              />
            </div>
            <div>
              <p className="font-bold">{van.name}</p>
              <p className="text-gray-600">${van.price}</p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
}