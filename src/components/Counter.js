import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';
import { counterActions } from '../store/counter';

const Counter = () => {
  const count = useSelector(state => state.counter.counter);
  const toggleCount = useSelector(state => state.counter.toggleCount)
  const dispatch = useDispatch();

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };

  const increment5Handler = () => {
    dispatch(counterActions.increase(5)) // {type: ID, payload: 5} 와 같다.
  }

  const incrementHandler = () => {
    dispatch(counterActions.increment())
  }

  const decrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      {toggleCount && <div className={classes.value}>{count}</div>}
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increment5Handler}>Increment by 5</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
