import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import Notification from './components/UI/Notification';
import { initCartData, sendCartData } from './store/cart-actions';
// import { uiActions } from './store/ui-slice';


let isInitial = true;

function App() {
  const dispatch = useDispatch();
  const ui = useSelector(state => state.ui);
  const cart = useSelector(state => state.cart);

  useEffect(() => {
    dispatch(initCartData());
  }, [dispatch])

  useEffect(() => {
    if (isInitial) {
      isInitial = false;
      return;
    } 
    dispatch(sendCartData(cart));
  }, [cart, dispatch]);

  // useEffect(() => {
  //   const fetchCartData = async () => {

  //     if (isInitial) {
  //       isInitial = false;
  //       return;
  //     }

  //     dispatch(uiActions.changeNotificationDetail({ status: 'fetching', title: 'fetchting', message: 'Start fetching data...'}));

  //     const res = await fetch('https://react-http-4add5-default-rtdb.firebaseio.com/cart.json', {
  //       method: 'PUT',
  //       body: JSON.stringify(cart)
  //     });

  //     if (!res.ok) {
  //       console.log('error');
  //       throw new Error('unexpected happened..');
  //     }
  //     console.group('fetch res');
  //     console.log(res);
  //     console.groupEnd();

  //     dispatch(uiActions.changeNotificationDetail({ status: 'success', title: 'success', message: 'Success fetching data!' }));
  //   }

  //   fetchCartData()
  //     .then(console.log('완료'))
  //     .catch((error) => {
  //       dispatch(uiActions.changeNotificationDetail({ status: 'error', title: 'error', message: 'Error occured..' }))
  //     });
  // }, [cart, dispatch]);
  

  return (
    <>
      {ui.notificationDetail && <Notification status={ui.notificationDetail.status} title={ui.notificationDetail.title} message={ui.notificationDetail.message}/>}
      <Layout>
        <Cart />
        <Products />
      </Layout>
    </>
  );
}

export default App;
