import React from "react";

function Coom2() {
  return (
    <div className="board">
      <h2>게시판</h2>
      <table border="1">
        <thead>
          <tr>
            <th>글번호</th>
            <th>제목</th>
            <th>작성자</th>
            <th>날짜</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>첫 번째 글</td>
            <td>사용자1</td>
            <td>2023-12-01</td>
          </tr>
          <tr>
            <td>2</td>
            <td>두 번째 글</td>
            <td>사용자2</td>
            <td>2023-12-02</td>
          </tr>
          <tr>
            <td>3</td>
            <td>세 번째 글</td>
            <td>사용자3</td>
            <td>2023-12-03</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Coom2;
