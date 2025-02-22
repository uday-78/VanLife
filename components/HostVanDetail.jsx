import { Link, Outlet, useParams } from "react-router";
import { NavLink } from "react-router";
import { useEffect, useState } from "react";

export default function HostVanDetail() {
  const activeClass = `font-bold underline`;
  const { id } = useParams();
  const [hostVanDetail, setHostVanDetail] = useState({});

  useEffect(() => {
    async function getHostVanDetail() {
      const response = await fetch(`/api/host/vans/${id}`);
      const data = await response.json();
      setHostVanDetail(data.vans[0]);
      console.log(data.vans[0]);
    }

    getHostVanDetail();
  }, []);

  const vanImage = hostVanDetail?.imageUrl;
  const vanType = hostVanDetail?.type;
  const vanName = hostVanDetail?.name;
  const vanRent = `$${hostVanDetail?.price}`;
  const vanDescription = hostVanDetail?.description;

  return (
    <>
      <div className="p-2 m-3">
        <Link to=".." relative="path">
          {" "}
          &larr; <span>Back to all vans</span>
        </Link>
      </div>

      <div className="p-3">
        <div className="flex p-3 gap-4">
          <div>
            <img
              className="w-[150px] h-auto rounded-lg"
              src={vanImage}
              alt=""
            />
          </div>

          <div className="space-y-2">
            <div>
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

            <p className="font-extrabold text-2xl">{vanName}</p>

            <p className="font-bold text-lg leading-1.5">
              {vanRent}
              <span className="font-thin">{`/day`}</span>
            </p>
          </div>
        </div>

        <header className="flex space-x-4 p-3">
          <NavLink
            to="."
            end
            className={({ isActive }) => (isActive ? activeClass : null)}
          >
            Details
          </NavLink>

          <NavLink
            to="pricing"
            className={({ isActive }) => (isActive ? activeClass : null)}
          >
            Pricing
          </NavLink>

          <NavLink
            to="photo"
            className={({ isActive }) => (isActive ? activeClass : null)}
          >
            Photo
          </NavLink>
        </header>

        <Outlet context={hostVanDetail}/>
      </div>
    </>
  );
}
