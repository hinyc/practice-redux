import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상태를 조회하는 Hook
  // state값은 store.getState() 함수 호출시의 결과와 동일

  let renderCount = 0;

  //! 기본적으로 useSelector를 사용햇 리덕스 스토어의 상태를 조회하면 상태가 봐끼지 않을 경우 리렌더링되지 않는다. 여기서는 렌더링 될때마다 새로운 객체를 만들기 때문(module)에 상태가 봐끼엇는지 확인할 수없어 낭비 렌더링이 발생.
  
  // const { number, diff } = useSelector((state) => {
  //   renderCount++;
  //   console.log(renderCount);
  //   return {
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   };
  // });

  //! useSelector의 두번째 파라미터로 shallowEqual을 추가한다. 
  // const { number, diff } = useSelector((state) => {
  //   renderCount++;
  //   console.log(renderCount);
  //   return {
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   };
  // }, shallowEqual);

  //! 렌더링 최적화 1
  //! 원시데이터를 반환하여 확인한다.
  const number = useSelector((state) => {
    renderCount++;
    console.log(renderCount);
    return state.counter.number;
  });
  const diff = useSelector((state) => state.counter.diff);

  const dispatch = useDispatch();
  const onIncrease = () => dispatch(increase());
  const onDecrease = () => dispatch(decrease());
  const onSetDiff = (diff) => dispatch(setDiff(diff));

  return (
    <Counter //
      number={number}
      diff={diff}
      onIncrease={onIncrease}
      onDecrease={onDecrease}
      onSetDiff={onSetDiff}
    />
  );
}

export default CounterContainer;
