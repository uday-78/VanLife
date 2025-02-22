
import { useOutletContext } from "react-router";

export default function HostVanDetail_Pricing() {
  const hostVanDetail = useOutletContext();
  const vanPricing = hostVanDetail?.price
  return <span className="text-3xl">{`$${vanPricing}`}<span className="text-sm">{`/day`}</span></span>
}
