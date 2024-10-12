import { useLocation } from "react-router-dom";

interface Iprops {}
const Home = ({}: Iprops) => {
  const location = useLocation();
  console.log(location);
  return (
    <main>
      <div className="hone text-center bg-black">hello home </div>
    </main>
  );
};

export default Home;
