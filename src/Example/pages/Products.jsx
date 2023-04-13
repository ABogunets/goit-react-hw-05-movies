import { ProductList } from '../components/ProductsList';
import { getProducts } from '../../fakeAPI';

export const Products = () => {
  const products = getProducts();
  return (
    <main>
      <ProductList products={products} />
    </main>
  );
};
