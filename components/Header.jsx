import { Link ,NavLink } from "react-router-dom";

export default function Header(){
    const activeClass = `font-bold text-xl underline text-orange-500`;

    return (
      // <header className="flex w-full bg-[#FFF7ED] p-9 justify-between">
      //   <Link className="text-2xl font-extrabold" to="/">
      //     #VANLIFE
      //   </Link>
      //   <nav className="space-x-3">
      //     <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/vans">
      //       Vans
      //     </NavLink>
      //     <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/host">
      //       Hosts
      //     </NavLink>
      //     <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/about">
      //       About
      //     </NavLink>
      //   </nav>
      // </header>

      <header className="flex bg-[#FFF7ED] p-4 justify-between items-center">
        <Link className="text-xl font-extrabold" to="/">
          #VANLIFE
        </Link>

        {/* <nav className="flex space-x-3 items-center">
          <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/vans">
            Vans
          </NavLink>
          <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/host">
            Hosts
          </NavLink>
          <NavLink className="nav-link text-[#4D4D4D] text-xl" to="/about">
            About
          </NavLink>
        </nav> */}

        <NavLink
          to="/vans"
          className={({ isActive }) => (isActive ? activeClass : null)}
        >
          Vans
        </NavLink>

        <NavLink
          to="/host"
          className={({ isActive }) => (isActive ? activeClass : null)}
        >
          Hosts
        </NavLink>

        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? activeClass : null)}
        >
          About
        </NavLink>
      </header>
    );
}