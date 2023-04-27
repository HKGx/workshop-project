import "./App.css";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  return (
    <main>
      <span>Count: {count}</span>
      <button>Increment</button>
      <button>Decrement</button>
    </main>
  );
}

export default App;
