import { Routes, Route } from 'react-router-dom';
import CategoriesPreview from '../CategoriesPreview/CategoriesPreview.jsx';
import Category from '../Category/Category.jsx';
// Styled components for Shop

function Shop() {
  return (
    <Routes>
      {/* Route for the preview of all categories */}
      <Route index element={<CategoriesPreview />} />
      {/* Route for individual category pages */}
      <Route path={':category'} element={<Category />} />
    </Routes>
  );
}

export default Shop;
