# Practice-Redux

## 🤔 Redux 왜 필요한가 ?
✅ 상태관리를 한곳에서 할 수 있도록 하여 Porps drilling등의 이슈를 예방한다.
✅ 상태관련 버그 발생시 한 곳에서 확인 할 수 있어 유지보수에 유리하다. 

## Redux의 3가지 원칙
### ➊ Single source of truth
- 하나의 애플리케이션에는 하나의 store가 있어야한다.
- 여러개의 store를 만드는건 가능하지만, 권장하지않는다.
- 여러개의  store를 사용하면 개발도구를 사용하지 못한다.
### ➋ State is read-only
- 상태는 직접적으로 변경이 불가능하며 읽기만 가능, 의도치 않는 상태변경을 방지함.
- reducer를 통해 새로운 state를 생성함.
- 기존의 상태는 건들이지 않고 새로운 상태를 생성하여 업데이트하는 방법을 사용한다.
- 새로운 상태를 생성하면 개로운 객체 주소값을 가지게 된다는 의미 => 이를 통해 상태의 변경을 쉽게 감지 할 수 있다.
### ➌ Changes ar made whith pure functions
- 새로운 상태를 만드는 함수는  순수함수여야 한다!
- Reducer 함수는 이전상태와, 액션 객체를 파라미터로 받는다.
- 이전상태는 절때 건들이지않아야하며, 새로운 상태 객체를 만들어 반환한다.
## Redux Architecture
👀 **내가 이해한 redux architecture**
📌 새로운 상태가 생성될때마다 기록이되기때문에 undo , redo 구현이 간편함.

![](https://images.velog.io/images/hinyc/post/f3865b8f-0d3a-4e8d-b0ae-603f6a14c97c/image.png)
