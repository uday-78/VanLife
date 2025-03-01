import { NavLink, Outlet, useLocation } from "react-router-dom";

// export default function HostLayout() {
//   const activeStyle = {
//     fontWeight: "bold",
//     textDecoration: "underline",
//     color: "red",
//   };
//   return (
//     // <div className="HostLayoutContainer space-x-3 p-4">
//     //     <NavLink to="/host">DashBoard</NavLink>
//     //     <NavLink to="/host/income">Income</NavLink>
//     //     <NavLink to="/host/reviews">Reviews</NavLink>
//     //     <Outlet />
//     // </div>

//     <>
//       <nav className="space-x-4 m-3 p-3">
//         <NavLink
//           to="/host"
//           style={({ isActive }) => (isActive ? activeStyle : null)}
//         >
//           Dashboard
//         </NavLink>

//         <NavLink
//           to="/host/income"
//           style={({ isActive }) => (isActive ? activeStyle : null)}
//         >
//           Income
//         </NavLink>

//         <NavLink
//           to="/host/reviews"
//           style={({ isActive }) => (isActive ? activeStyle : null)}
//         >
//           Reviews
//         </NavLink>
//       </nav>
//       <Outlet />
//     </>
//   );
// }



export default function HostLayout() {
  const activeClass = "font-bold underline text-red-500"; // Define a CSS class for active styles

  return (
    <>
      <nav className="space-x-4 m-3 p-3">
        <NavLink
          to="/host"
          end
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Dashboard
        </NavLink>


         <NavLink
          to="vans"
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Vans
        </NavLink>

        <NavLink
          to="income"
          end
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Income
        </NavLink>


        <NavLink
          to="reviews"
          end
          className={({ isActive }) => (isActive ? activeClass : "")}
        >
          Reviews
        </NavLink>
      </nav>
      <Outlet />
    </>
  );
}