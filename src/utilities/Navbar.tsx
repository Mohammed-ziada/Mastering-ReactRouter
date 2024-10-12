import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
interface Iprops {}
const Navbar = ({}: Iprops) => {
  return (
    <nav className="bg-[#1f242e] p-3 flex justify-between items-center">
      <div className="logo">
        <Link to="/">
          <img src={logo} alt="logo" className="w-16 " />
        </Link>
      </div>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about-us">About</NavLink>
        </li>
        <li>
          <NavLink to="/contact">Contact</NavLink>
        </li>
        <li>
          <NavLink to="/learn">Learn</NavLink>
        </li>
        <li>
          <NavLink to="/contribute">Contribute</NavLink>
        </li>
        <li>
          <button className="border-t-cyan-700 bg-cyan-900 ps-3 pe-3 p-1  rounded-xl hover:bg-transparent hover:border-cyan-900 hover:border  ">
            <Link to="/login"> Login</Link>
          </button>
        </li>
      </ul>
    </nav>
  );
};
export default Navbar;
