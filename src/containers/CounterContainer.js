import React from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import Counter from '../components/Counter';
import { decrease, increase, setDiff } from '../modules/counter';

function CounterContainer() {
  // useSelector는 리덕스 스토어의 상재를 조회하는 Hook
  // state값은 store.getState() 함수 호출시의 결과와 동일

  let renderCount = 0;

  // const { number, diff } = useSelector((state) => {
  //   renderCount++;
  //   console.log(renderCount);
  //   return {
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   };
  // });

  // const { number, diff } = useSelector((state) => {
  //   renderCount++;
  //   console.log(renderCount);
  //   return {
  //     number: state.counter.number,
  //     diff: state.counter.diff,
  //   };
  // }, shallowEqual);

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
