import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext.jsx';
import ProductCard from '@components/ProductCard/ProductCard.jsx';
import './Shop.styles.scss';

function Shop() {
  const { products } = useContext(ProductsContext);
  return (
    <div className={'products-container'}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Shop;
