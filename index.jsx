import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes , Route ,Link} from "react-router";
import Home from "./Pages/Home";
import About from "./Pages/About";


const root = ReactDOM.createRoot(document.getElementById("root"));





function App() {
 return (
   <BrowserRouter>
     <header className="flex w-full bg-[#FFF7ED] p-9 justify-between">
       <Link className="text-2xl font-extrabold" to="/">
         #VANLIFE
       </Link>
       <nav className="space-x-3">
         <Link className="text-[#4D4D4D] text-xl" to="/about">Vans</Link>
         <Link className="text-[#4D4D4D] text-xl" to="/about">About</Link>
       </nav>
     </header>

     <Routes>
       <Route path="/" element={<Home />} />
       <Route path="/About" element={<About />} />
     </Routes>
   </BrowserRouter>
 );

}




root.render(<App/>);