import { Link } from "react-router";


export default function Van({id,imageUrl,name,price,type}){
    return (
      <div className="container">
        <Link to={`/vans/${id}`}>
          <div className="imageContainer">
            <img src={imageUrl} alt="Van Picture" />
          </div>
          <div className="vanDetailsContainer space-x-2">
            <span className="font-bold mb-2">{name}</span>
            <span className="font-bold text-lg">
              {`$${price}`}
              <span className="font-thin text-sm">{`/day`}</span>
            </span>
          </div>

          <div className="mb-3">
            {type === "simple" ? (
              <span className="text-[#ffffff] mt-2 bg-amber-600 px-2 py-1 rounded-sm">
                Simple
              </span>
            ) : type === "rugged" ? (
              <span className="bg-emerald-700 text-white mt-2 px-2 py-1 rounded-sm">
                Rugged
              </span>
            ) : (
              <span className="bg-black text-white mt-2 px-2 py-1 rounded-sm">
                Luxury
              </span>
            )}
          </div>
        </Link>
      </div>
    );
} 