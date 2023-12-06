import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function handleClick() {
    // 첫 번째 상태 업데이트
    setCount(count + 1);
    console.log(count); // 이 시점에서 상태는 아직 업데이트되지 않았습니다.

    // 두 번째 상태 업데이트
    setCount(count + 1);
    console.log(count); // 이 시점에서도 상태는 아직 업데이트되지 않았습니다.
  }

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={handleClick}>Increase</button>
    </div>
  );
}

export default App;
