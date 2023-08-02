import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, addTodo, removeLastTodo } from './toolkitRedux/toolkitSlice';
import './App.css';


const addAsyncTodo = () => {
  return async dispatch => {
    setTimeout(() => {
      dispatch(addTodo('ASYNC TODO'))
    }, 2000)
  }
}


function App() {
  const count = useSelector(state => state.toolkit.count)
  const todos = useSelector(state => state.toolkit.todos)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1 style={styles.h1}>Счетчик {count}</h1>
      <button style={styles.btn} onClick={() => dispatch(increment())}>Инкремент</button>
      <button style={styles.btn} onClick={() => dispatch(decrement())}>Декремент</button>
      <button style={styles.btn} onClick={() => dispatch(removeLastTodo())}>Удалить послдений ТУДУ</button>
      <button style={styles.btn} onClick={() => dispatch(addTodo(prompt()))}>Добавить ТУДУ</button>
      <button style={styles.btn} onClick={() => dispatch(addAsyncTodo())}>Добавить АСИНК ТУДУ</button>

      <ul>
        {todos.map(todo => <li style={styles.item} key={todo}>{todo}</li>)}
      </ul>
    </div>
  );
}

export default App;
