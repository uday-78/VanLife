import { useOutletContext } from "react-router-dom";

export default function HostVanDetail_Photos() {
  const hostVanDetail = useOutletContext();
  const vanImage = hostVanDetail?.imageUrl;
  return (
    <div>
      <img className="w-[100px] h-auto rounded-lg" src={vanImage} alt="" />
    </div>
  );
}
