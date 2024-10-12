import { Outlet } from "react-router-dom";
import Sidebar from "../../utilities/Sidebar";
import Navbar from "../../utilities/Navbar";

const LearnLayout = () => {
  return (
    <>
      <Navbar />
      <div className="flex">
        <Sidebar />
        <div className="ml-96  p-4 flex-grow ">
          <Outlet />
        </div>
      </div>
    </>
  );
};
export default LearnLayout;
