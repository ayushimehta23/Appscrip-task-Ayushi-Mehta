import TotalItemsCount from '../app/components/TotalItemsCount/TotalItemsCount';
import ProductCard from '../app/components/ProductCard/ProductCard';
import styles from '../../public/styles/Home.module.css';
import RecommendedDropdown from './components/RecommendedDropDown/RecommendedDropDown';
import Filter from './components/Filter/Filter';

interface Product {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export default async function Home() {
  // Fetch data from the mock API
  const res = await fetch('https://fakestoreapi.com/products');
  const products: Product[] = await res.json();

  return (
    <div className={styles.container}>
      <div className={styles.headerSection}>
        <div className={styles.headerLeft}>
          <TotalItemsCount count={products.length} />
          <Filter />
        </div>
        <div className={styles.headerRight}>
          <RecommendedDropdown />
        </div>
      </div>
      <section className={styles.productList}>
        {products.map(product => (
          <ProductCard
            key={product.id}
            id={product.id}
            title={product.title}
            description={product.description}
            price={product.price}
            image={product.image}
          />
        ))}
      </section>
    </div>
  );
}
