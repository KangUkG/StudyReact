import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {

  const cart = useSelector(state => state.cart);
  const cartIsOpen = useSelector(state => state.ui.isVisualize);
  const itemsInCart = cart.items.map(item => {
    return (<CartItem key={item.id} item={item}/>)
  });

  return (
    <Card className={classes.cart}>
      {
        cartIsOpen && (
          <>
            <h2>Your Shopping Cart</h2>
            <ul>
              {itemsInCart}
            </ul>
          </>
        )
      }
    </Card>
  );
};

export default Cart;
