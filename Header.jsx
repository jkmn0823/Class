import React from "react";
import "./Header.css"

function Header() {
  return (
    <div className="Header">
      <div className="Title">
        <h2>재고 관리 체계</h2>
        <h4>{new Date().toDateString()}</h4>
      </div>
      <div className="titlebtn">
        <button className="button1">로그인</button>
      </div>

    </div>
  )
};
export default Header;
