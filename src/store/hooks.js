import { useContext } from "react";
import Context from "./Context.js";

const useStore = () => {
  const [state, dispatch] = useContext(Context);
  return [state, dispatch];
};
export { useStore };
