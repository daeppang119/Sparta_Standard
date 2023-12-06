import React from "react";

const boxStyle = {
  width: "100px",
  height: "100px",
  backgroundColor: "#4e93ed",
  color: "white",

  // 가운데 정렬 3종세트
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

function Box2({ initCount }) {
  console.log("Box2가 렌더링되었습니다.");
  return (
    <div style={boxStyle}>
      <button onClick={initCount}>초기화</button>
      <div>Box2</div>
    </div>
  );
}

export default React.memo(Box2);
