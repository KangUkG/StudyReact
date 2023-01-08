const redux = require('redux') 

// code는 위에서 아래로 진행 
const counterReducer = (state = { counter: 0 }, action) => {
    if (action.type === 'increment') {
        return {
            counter: state.counter + 1
        }
    } else if (action.type === 'decrement') {
        return {
            counter: state.counter - 1
        }
    }
    return {
        counter: state.counter
    }
}

const store = redux.legacy_createStore(counterReducer)

const counterSubscriber = () => {
    const latestCount = store.getState();
    console.log(latestCount);
}

store.subscribe(counterSubscriber);

/**
 *  여기까지 알아서 진행이 완료되었으면 counter = 0으로, store, subscribe, subscriber가 정의됨.
 * 저장소 = counterRudcer함수를 근거로 동작한다 -> 저장소는 subscriber를 subscribe 한다. 
 *  여기까지가 관계 설정 및 기본값 설정
 */


store.dispatch({type: 'increment'})
store.dispatch({type: 'decrement'})

// 여기까지가 action을 설정해주고 dispatch 함수로 trigger 했다.

