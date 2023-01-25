import { cartActions } from "./cart-slice";
import { uiActions } from "./ui-slice";

export const initCartData = () => {
    return async (dispatch) => {
        const fetchData = async () => {
            const res = await fetch('https://react-http-4add5-default-rtdb.firebaseio.com/cart.json');
            if (!res.ok) {
                throw new Error('Could not fetch Data');
            }
            const body = await res.json(); 
            return body;
        }
        try {
            const cart = await fetchData();
            console.log(cart);
            dispatch(cartActions.initCart({ 
                items: cart.items || [], 
                totalQuantity: cart.totalQuantity 
            }));
        } catch (error) {
            console.log(error)
            dispatch(uiActions.changeNotificationDetail({ status: 'error', title: 'error', message: 'Fetch Error occured..' }));
        }
    }
}

export const sendCartData = (cart) => {
    return (dispatch) => {
      dispatch(uiActions.changeNotificationDetail({ status: 'fetching', title: 'fetchting', message: 'Start fetching data...'}));

      const fetchData = async () => {
        const res = await fetch('https://react-http-4add5-default-rtdb.firebaseio.com/cart.json', {
            method: 'PUT',
            body: JSON.stringify(cart)
        });

        if (!res.ok) {
            console.log('error');
            throw new Error('unexpected happened..');
        }
        console.group('fetch res');
        console.log(res);
        console.groupEnd();
      }

      try {
        fetchData();
      } catch (error) {
        dispatch(uiActions.changeNotificationDetail({ status: 'error', title: 'error', message: 'Error occured..' }))
      }
      
      dispatch(uiActions.changeNotificationDetail({ status: 'success', title: 'success', message: 'Success fetching data!' }));
    }
}