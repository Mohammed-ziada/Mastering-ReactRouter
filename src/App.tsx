import { RouterProvider } from "react-router-dom";

import routes from "./routes";

interface Iprops {}
const App = ({}: Iprops) => {
  return (
    <>
      <RouterProvider router={routes} />
    </>
  );
};
export default App;
