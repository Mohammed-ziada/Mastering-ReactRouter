import { useLocation } from "react-router-dom";

const Login = () => {
  const location = useLocation();
  console.log(location);

  return (
    <div>
      <h2 className="text-center mb-3">Login to Contribute</h2>
      <form className="space-y-3 max-w-sm mx-auto">
        <input type="text" name="" id="" />
      </form>
    </div>
  );
};
export default Login;
