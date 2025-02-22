 import react from "react";
 import { Link } from "react-router";
 import img2 from "../assets/images/image2.png"

export default function About(){
    return (
      <div className="container">
        <div>
          <div>
            <img src={img2} alt="" />
          </div>

          <div className="m-3 p-2 space-y-5">
            <h1 className="text-2xl font-bold">
              Don’t squeeze in a sedan when you could relax in a van.
            </h1>
            <p className="text-sm">
              Our mission is to enliven your road trip with the perfect travel
              van rental. Our vans are recertified before each trip to ensure
              your travel plans can go off without a hitch. (Hitch costs extra
              😉)
              <br />
              <br /> Our team is full of vanlife enthusiasts who know firsthand
              the magic of touring the world on 4 wheels.
            </p>
          </div>

          <div>
            <div className="bg-[#FFCC8D] font-bold m-3 p-4 w-[400px] h-[158px] rounded-md">
              <div className="mb-6">
                <p>Your destination is waiting</p>
                <p>Your van is ready</p>
              </div>
                <Link className="bg-black text-white px-2 py-2 rounded-lg" to="vans">Explore our vans</Link>
            </div>
          </div>
        </div>
      </div>
    );
}



