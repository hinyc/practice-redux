import { createStore } from 'redux';
//* store를 생성하는 함수

//* 리덕스에서 관리할 상태 정의

const initialState = {
  counter: 0,
  text: '',
  list: [],
};

//* 액션 타입 정의
//! 액션 타입은 주로 대문자로 작성
const INCREASE = 'INCREASE';
const DECREASE = 'DECREASE';
const CHANGE_TEXT = 'CHANGE_TEXT';
const ADD_TO_LIST = 'ADD_TO_LIST';

//* 액션 생성함수 정의
//!주로 camelCase로 작성
//반환값 객체
const increase = () => ({
  type: INCREASE, //type값 필수
});

const decrease = () => ({
  type: DECREASE,
});

const changeText = (text) => ({
  type: CHANGE_TEXT,
  text, // 액션내부객체에는 type외에 추가적 필드를 마음대로 추가가능.
});

const addToList = (item) => ({
  type: ADD_TO_LIST,
  item,
});

//* 리듀서 만들기
// 액션 생성함수를 통해 만들어진 객체를 참조하여 새로운 상태를 만드는 함수
//! 불변성을 꼭 지켜야 한다.!

function reducer(state = initialState, action) {
  switch (action.type) {
    case INCREASE:
      return {
        ...state,
        counter: state.counter + 1,
      };
    //초기 상태에서 counter만 변경된 새로운 객체 반환.
    case DECREASE:
      return {
        ...state,
        counter: state.counter - 1,
      };
    case CHANGE_TEXT:
      return {
        ...state,
        text: action.text,
      };
    case ADD_TO_LIST:
      return {
        ...state,
        list: state.list.concat(action.item),
      };
    default:
      return state;
  }
}

//* store만들기
const store = createStore(reducer);

console.log(store.getState()); // 현재 store상태 조회;

const listener = () => {
  const state = store.getState();
  console.log(state);
};

const unsubscribe = store.subscribe(listener);
// 구독 해지를 원할 경우 unsubscribe() 호출
console.log(store);

store.dispatch(increase());
store.dispatch(decrease());
store.dispatch(changeText('배우자리덕스'));
store.dispatch(changeText('잘된다'));
store.dispatch(addToList('라면'));
store.dispatch(addToList('계란'));
