//* 액션 타입선언
const ADD_TODO = 'todos/ADD_TODO';
const TOGGLE_TODD = 'todos/TOGGLE_TODD';

//* 액션 생성함수 선언
let nextId = 1; //데이터에서 사용할 고유 id
export const addTodo = (text) => ({
  type: ADD_TODO,
  todo: {
    id: nextId++,
    text,
  },
});

export const toggleTodo = (id) => ({
  type: TOGGLE_TODD,
  id,
});

//* 초기 상태 선언
// 초기상태가 꼭 객체일 필요가 없다.
const initialState = [];

//* reducer 선언
export default function todos(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return state.concat(action.todo);
    case TOGGLE_TODD:
      return state.map((todo) =>
        todo.id === action.id //
          ? { ...todo, done: !todo.done }
          : todo
      );
    default:
      return state;
  }
}
