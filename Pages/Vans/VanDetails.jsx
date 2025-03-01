import react, { useEffect, useState } from "react";
import { useParams , Link ,useLocation} from "react-router";


export default function VanDetails(){
  const { id } = useParams();
  const location = useLocation();
  const backPath = location.state?.search || "";

  //!Way 1 of getting the type from url
  // const regex = /[a-zA-z=]+/
  // const type = backPath  && backPath?.match(regex) ? backPath.match(regex)[0]?.split('=')[1] : "all";
  // console.log('The type of van is ',type);

  //! Way2 of getting the type from url
  const newURL = new URLSearchParams(backPath);
  const type = newURL?.get("type") || "all";

  console.log("The back path is ", backPath);

  const [van, setVan] = useState(null);

  useEffect(() => {
    async function getVanDetails() {
      try {
        const response = await fetch(`/api/vans/${id}`);
        const data = await response.json();
        console.log(data);

        setVan(data.vans);
      } catch (error) {
        console.error("Failed to fetch vans details", error);
      }
    }

    getVanDetails();
  }, [id]);

  const vanImage = van?.imageUrl;
  const vanType = van?.type;
  const vanName = van?.name;
  const vanRent = `$${van?.price}`;
  const vanDescription = van?.description;

  return (
    <div className="vanDetailsContainer">
      <div className="goBackContainer p-3">
        <Link to={`..${backPath}`} relative="path">
          {" "}
          &larr; <span>{`Back to ${type} vans`}</span>
        </Link>
      </div>

      <div className="p-3 m-2">
        <img className="rounded-lg" src={vanImage} alt="" />
      </div>

      <div className="p-3 m-3">
        {vanType === "simple" ? (
          <span className="text-[#ffffff] mt-2 bg-amber-600 px-2 py-1 rounded-sm">
            Simple
          </span>
        ) : vanType === "rugged" ? (
          <span className="bg-emerald-700 text-white mt-2 px-2 py-1 rounded-sm">
            Rugged
          </span>
        ) : (
          <span className="bg-black text-white mt-2 px-2 py-1 rounded-sm">
            Luxury
          </span>
        )}
      </div>

      <div className="space-y-6 p-4">
        <h2 className="font-bold text-2xl">{vanName}</h2>
        <p className="font-bold text-lg">
          {vanRent}
          <span className="font-thin">{`/day`}</span>
        </p>
        <p className="text-sm">{vanDescription}</p>
        <Link className="bg-[#FF8C38] text-center rounded-lg px-3 py-2 text-white w-full block">
          Rent this van
        </Link>
      </div>
    </div>
  );
}