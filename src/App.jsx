import "./App.css";31
import { GlobalContext } from "./context";
import { router } from "./routers";
import { RouterProvider } from "react-router-dom";

function App() {
  const user = { name: "Fauzan" };
  return (
    <div>
      <GlobalContext.Provider value={user}>
        <RouterProvider router={router} />
      </GlobalContext.Provider>
    </div>
  );
}

export default App;
