import ProductItem from './ProductItem';
import classes from './Products.module.css';


const DUMMY_PRODUCTS = [
  {
    id: 'g1',
    title: 'Fire book',
    price: 6,
    description: 'This is a first product - amazing!'
  },
  {
    id: 'g2',
    title: 'Ice book',
    price: 7,
    description: 'This is a second product - fantasic!'
  }
]

const Products = (props) => {

  const productList = DUMMY_PRODUCTS.map(prod => {

    return (
      <ProductItem
        title={prod.title}
        price={prod.price}
        description={prod.description}
        key={prod.id}
        id={prod.id}
      />
    )
  });

  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>  
        {productList}
      </ul>
    </section>
  );
};

export default Products;
