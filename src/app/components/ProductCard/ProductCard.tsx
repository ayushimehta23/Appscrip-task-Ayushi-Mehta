import styles from './ProductCard.module.css';

interface ProductCardProps {
  id: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

const ProductCard = ({ title, description, price, image }: ProductCardProps) => {
  return (

    <div className={styles.productCard}>
      <img src={image} alt={title} className={styles.productImage} />
      <h2 className={styles.productTitle}>{title}</h2>
      <p className={styles.productDescription}>{description}</p>
      <span className={styles.productPrice}>${price}</span>
    </div>
  );
};

export default ProductCard;
