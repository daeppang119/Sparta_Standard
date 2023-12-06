// import React, { useCallback, useState } from "react";
// import Box1 from "./components/Box1";
// import Box2 from "./components/Box2";
// import Box3 from "./components/Box3";

// const appStyle = {
//   width: "20rem",
//   margin: "0 auto",
// };

// const boxesStyle = {
//   display: "flex",
//   marginTop: "10px",
// };

// function App() {
//   console.log("App 컴포넌트가 렌더링되었습니다!");

//   const [count, setCount] = useState(0);

//   // 1을 증가시키는 함수
//   const onPlusButtonClickHandler = () => {
//     setCount(count + 1);
//   };

//   // 1을 감소시키는 함수
//   const onMinusButtonClickHandler = () => {
//     setCount(count - 1);
//   };

//   // count를 초기화해주는 함수
//   const initCount = useCallback(() => {
//     setCount(0);
//   }, []);

//   return (
//     <div style={appStyle}>
//       <h3>카운트 예제입니다!</h3>
//       <p>현재 카운트 : {count}</p>
//       <button onClick={onPlusButtonClickHandler}>+</button>
//       <button onClick={onMinusButtonClickHandler}>-</button>
//       <div style={boxesStyle}>
//         <Box1 />
//         <Box2 initCount={initCount} />
//         <Box3 />
//       </div>
//       {/* <button onClick={initCount}>초기화</button> */}
//     </div>
//   );
// }

// export default App;

// =============================================================

// import React, { useEffect, useState } from "react";
// import axios from "axios";

// export default function App() {
//   // 1. state가 필요해요.
//   // 2. response.data를 state에 담아야 해요.
//   // 3. state가 완성됐을 테니, state.map으로
//   const [list, setList] = useState([]);
//   const [isLoding, setIsLoding] = useState(false);
//   const [isError, setIsError] = useState("");

//   // useEffect(() => {
//   //   axios
//   //     .get("https://jsonplaceholder.typicode.com/todos")
//   //     .then((response) => {
//   //       console.log(response.data);
//   //       setList(response.data);
//   //       // 여기 추가
//   //     })
//   //     .catch((error) => {
//   //       console.log("오류");
//   //       console.log(error);
//   //     });
//   // }, []);

//   useEffect(() => {
//     const fetchData = async () => {
//       // setIsError(""); // 서버에서 가져오기위해서 랜더링 될때 초기값을 가져와야한다.
//       // setList([]);
//       try {
//         setIsLoding(true); // 로딩
//         const response = await axios.get(
//           "https://jsonplaceholder.typicode.com/todos"
//         );
//         setIsLoding(false); // 로딩
//         setList(response.data);
//       } catch (error) {
//         console.log("오류");
//         setIsError(error.message);
//       }
//     };
//     fetchData();
//   }, []);

//   // list consol로 확인
//   useEffect(() => {
//     console.log(list);
//   }, [list]);

//   return (
//     <div>
//       <h1>{isError || "List"}</h1>
//       {/* 에러메세지 */}
//       {/* {isError ? <div>{isError}</div> : ""} */}
//       {/* response.data를 ul과 li태그 이용해서 뿌리기 */}
//       <ul>
//         {list.map((item) => {
//           return <li key={item.id}>{item.title}</li>;
//         })}
//       </ul>
//       {/* loding */}
//       {!isLoding ? (
//         ""
//       ) : (
//         <div
//           style={{
//             width: "100px",
//             height: "100px",
//             background:
//               'url("https://media.tenor.com/8XDuSXYfdqsAAAAd/춘식-춘식이.gif")',
//             backgroundPosition: "center",
//             backgroundSize: "cover",
//           }}
//         ></div>
//       )}
//     </div>
//   );
// }

// ============================================================

import React, { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [posts, setPosts] = useState([]);
  const [isError, setIsError] = useState("");
  const [isLoding, setIsLoding] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoding(true);
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setIsLoding(false);
        setPosts(response.data);
      } catch (error) {
        console.log(error);
        setIsError(error.message);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {isError ? <div>{isError}</div> : <h1>Posts</h1>}
      {posts.map((post) => (
        <div key={post.id}>
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ))}
      {isLoding ? (
        <div
          style={{
            width: "100px",
            height: "100px",
            background:
              'url("https://media.tenor.com/8XDuSXYfdqsAAAAd/춘식-춘식이.gif")',
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
      ) : null}
    </div>
  );
}

export default App;
