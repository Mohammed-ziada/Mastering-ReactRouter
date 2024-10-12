import { NavLink } from "react-router-dom";

interface Iprops {}
const Sidebar = ({}: Iprops) => {
  return (
    <aside className="fixed  left-0 h-full w-1/5 ps-0 p-5 bg-[#23272f] text-white transition-transform transform">
      <div className="sidebar ">
        <ul>
          <li>
            <NavLink to="/learn" end>
              Quik Start
            </NavLink>
          </li>
          <li>
            <NavLink to="/learn/featured">Featured</NavLink>
          </li>
          <li>
            <NavLink to="/learn/ThinkinIngReact">Thinking In React</NavLink>
          </li>
        </ul>
      </div>
    </aside>
  );
};
export default Sidebar;
