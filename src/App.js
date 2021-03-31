import { useSelector, useDispatch } from "react-redux";
import { increment } from "./actions";

function App() {
  const counter = useSelector((store) => store.counter);
  const isLogged = useSelector((store) => store.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>Counter: {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button>-</button>
      {isLogged ? <h2>Admin stuff</h2> : ""}
    </div>
  );
}

export default App;
