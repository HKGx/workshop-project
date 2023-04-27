import "./App.css";
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => setCount((prev) => prev + 1);
  const decrement = () => setCount((prev) => prev + 1);
  return (
    <div>
      <span>Count: {count}</span>
      <button onClick={increment}>Increment</button>
      <button onCLick={decrement}>Decrement</button>
    </div>
  );
}

function App() {
  return (
    <main>
      <Counter />
    </main>
  );
}

export default App;
