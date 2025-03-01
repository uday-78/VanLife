import { Link } from "react-router-dom";
import image1 from "../assets/images/image1.png";

export default function Home() {
  return (
    <div className="container">
      <div className="flex flex-col justify-center items-center m-4 space-y-3">
        <img className="w-full" src={image1} alt="" />
        <h1 className="text-4xl font-bold">
          You got the travel plan we got the travel vans
        </h1>
        <p className="text-md text-gray-600">
          Add adventure to your life by joining the #vanlife movement. Rent the
          perfect van to make your perfect road trip
        </p>
        <Link
          className="bg-[#FF8C38] text-center rounded-lg px-3 py-2 text-white w-full"
          to="vans"
        >
          Find your van
        </Link>
      </div>
    </div>
  );
}
