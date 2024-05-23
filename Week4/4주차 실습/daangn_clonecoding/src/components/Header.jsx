import React from "react";
import "./Daangn.css";
import logo from "../images/logo.jpeg";

const Header = () => {
  return (
    <header>
      <ul className="header-menu">
        <a href="https://www.naver.com">
          <img src={logo} className="logo" />
        </a>
        <li>중고거래</li>
        <li>동네업체</li>
        <li>알바</li>
        <li>부동산</li>
        <li>중고차 직거래</li>
      </ul>
      <div className="header-btn">
        <input type="text" placeholder="물품이나 동네를 검색해보세요" />
        <button type="button" className="chatbtn">
          채팅하기
        </button>
      </div>
    </header>
  );
};

export default Header;
