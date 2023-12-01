import React, { useState } from "react";

function Coom1() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = () => {
    // 로그인 버튼 클릭 시 처리할 로직 작성
    console.log("Username:", username);
    console.log("Password:", password);
    // 여기에 로그인 처리 로직 추가
  };

  return (
    <div>
      <h2>로그인</h2>
      <div>
        <label htmlFor="username">아이디:</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsernameChange}
        />
      </div>
      <div>
        <label htmlFor="password">비밀번호:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePasswordChange}
        />
      </div>
      <button onClick={handleLogin}>로그인</button>
    </div>
  );
}

export default Coom1;
