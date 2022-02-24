import './App.css';
import KeyFrame from './components/KeyFrame';
import CounterContainer from './containers/CounterContainer';
import TodoContainer from './containers/TodosContainer';

function App() {
  return (
    <div>
      <CounterContainer />
      <hr />
      <TodoContainer />
      <KeyFrame />
    </div>
  );
}

export default App;
