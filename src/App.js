import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home/Home";
import List from "./Pages/List/List";
import Login from "./Pages/Login/Login";
import New from "./Pages/New/New";
import Single from "./Pages/Single/Single"
import { productInputs, userInputs } from "./formSource";
import "./darkstyle/dark.scss";
import { useContext } from "react";
import { DarkModeContext } from "./context/darkModeContext";

function App() {
  const { darkMode } = useContext(DarkModeContext);

  return (
    <div className={darkMode ? "app dark" : "app"}>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/login" element={<Login />} />
      <Route path="/users">
        <Route index element={<List />} />
        <Route path=":userId" element={<Single />} />
        <Route path="new" element={<New inputs={userInputs} title="Add New User" />} />
      </Route>
      {/* <Route path="/products">
        <Route index element={<List />} />
        <Route path=":productId" element={<Single />} />
        <Route path="new" element={<New inputs={productInputs} title="Add New Product" />} />
      </Route> */}
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;