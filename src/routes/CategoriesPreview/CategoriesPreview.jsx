import { useContext } from 'react';
import { CategoriesContext } from '../../contexts/CategoriesContext.jsx';
import CategoryPreview from '@components/CategoryPreview/CategoryPreview.jsx';

function CategoriesPreview() {
  const { categoriesMap } = useContext(CategoriesContext);
  return (
    <>
      {Object.keys(categoriesMap).map((title) => {
        const products = categoriesMap[title];
        return (
          <CategoryPreview key={title} title={title} products={products} />
        );
      })}
    </>
  );
}

export default CategoriesPreview;
