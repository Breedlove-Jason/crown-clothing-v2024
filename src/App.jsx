import Home from "./routes/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.jsx";
import Shop from "./routes/Shop/Shop.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={"shop"} element={<Shop />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
