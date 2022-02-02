import { GeekProvider } from "../../context/GeekProvider";
import { AppUI } from "./AppUI";

const App = () => {
  return (
    <GeekProvider>
      <AppUI/>
    </GeekProvider>
  );
};

export { App };