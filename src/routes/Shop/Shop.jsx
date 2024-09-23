import './Shop.styles.scss';
import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.jsx';
import Category from '../Category/Category.jsx';

function Shop() {
  return (
    <Routes>
      <Route index element={<CategoriesPreview />} />
      <Route path={':category'} element={<Category />} />
    </Routes>
  );
}

export default Shop;
