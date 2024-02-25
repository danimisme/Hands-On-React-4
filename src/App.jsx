import { useRoutes } from "react-router-dom";
import { routeList } from "./Route/routes";

import "./App.css";

const App = () => {
  const element = useRoutes(routeList);
  return element;
};

export default App;
