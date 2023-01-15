import { legacy_createStore } from 'redux';
import { createSlice, configureStore } from '@reduxjs/toolkit';


const initialState = { counter: 0, toggleCount: true };

// action.type 값을 토시하나 안틀리고 똑같이 쓸 자신이 있다면 이렇게 안해도 된다.
export const INCREMENT = 'increment';

// 
const counterSlice = createSlice({
    name: 'counter',
    initialState,
    // reducers에 들어간 값을 직접 수정하는게 아니다. code작성에 용이하게 형태만 이럴뿐이지
    // 사실 아래 counterReducer처럼 새로운 객체를 생성한다. immuer ? 사용?
    reducers: {
        increment(state){
            state.counter++;
        },
        decrement(state){
            state.counter--;
        },
        increase(state, action){
            state.counter = state.counter + action.payload
        },
        toggleCounter(state){
            state.toggleCount = !state.toggleCount
        }
    }
})

const counterReducer = (state = initialState, action) => {
    if (action.type === INCREMENT) {
        return {
            counter: state.counter + action.amount,
            toggleCount: state.toggleCount
        };
    } else if (action.type === "decrement") {
        return {
            counter: state.counter - 1,
            toggleCount: state.toggleCount
        };
    } else if (action.type === "toggleCount") {
        return {
            counter: state.counter,
            toggleCount: !state.toggleCount
        }
    }

    return state;
}

// const store = legacy_createStore(counterReducer);

const store = configureStore({
    reducer: counterSlice.reducer
});

// 여러개라면? 
const store2 = configureStore({
    reducer: {
        counter: counterSlice.reducer 
        // 내가 주고싶은 key만 주고 mapping 한다.
    }
})

export const counterActions = counterSlice.actions;
export default store;



