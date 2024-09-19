import Home from "./routes/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navigation from "./routes/Navigation/Navigation.jsx";
import Shop from "./routes/Shop/Shop.jsx";
import SignIn from "./routes/SignIn/SignIn.jsx";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={"shop"} element={<Shop />} />
          <Route path={"sign-in"} element={<SignIn />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
