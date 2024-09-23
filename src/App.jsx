import { Routes, Route } from 'react-router-dom';
import Home from './routes/Home/Home.jsx';
import Navigation from './routes/Navigation/Navigation.jsx';
import Shop from './routes/Shop/Shop.jsx';
import Authentication from './routes/Authentication/Authentication.jsx';
import Checkout from './routes/Checkout/Checkout.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Navigation />}>
          <Route index element={<Home />} />
          <Route path={'shop/*'} element={<Shop />} />
          <Route path={'auth'} element={<Authentication />} />
          <Route path={'checkout'} element={<Checkout />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
