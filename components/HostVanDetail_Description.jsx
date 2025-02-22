import { useOutletContext } from "react-router";

export default function HostVanDetail_Description() {
  const hostVanDetail = useOutletContext();
  const vanName = hostVanDetail.name;
  const vanType = hostVanDetail.type;
  const vanDescription = hostVanDetail?.description;

  return (
    <div className="flex flex-col space-y-4 p-3">
      <span className="font-bold">
        Name: <span className="font-thin">{vanName}</span>
      </span>

      <span className="font-bold">
        Type: <span className="font-thin">{vanType}</span>
      </span>

      <span className="font-bold">
        Description: <span className="font-thin">{vanDescription}</span>
      </span>
    </div>
  );
}
