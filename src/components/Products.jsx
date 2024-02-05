
import { getProducts } from '@/utils/getProducts';
import ProductCard from './ProductCard';

const Products = async() => {
  const products = await getProducts();

  return (
    <div className="grid sm:grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 bg-fuchsia-50">
      {
        products.map((product, idx) => (
          <ProductCard key={idx} product={product}></ProductCard>
        )
        )
      }
      </div>
  )
};

export default Products;

