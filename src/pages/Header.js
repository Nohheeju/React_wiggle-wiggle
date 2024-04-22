import React from "react";
import { Link, useNavigate } from "react-router-dom";

import { BiSearch } from "react-icons/bi";

const Header = ({ setAuthentication, authentication }) => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate("/Login");
  };
  const ChangeLogin = () => {
    setAuthentication(true);
    navigate("/");
  };

  const search = (event) => {
    if (event.key === "Enter") event.preventDefault();
    let keyword = event.target.value;
    console.log("keyword", keyword);
    navigate(`ProductAll/?q=${keyword}`);
  };

  return (
    <div className="Header">
      <div className="banner">
        <p>카카오톡 채널 추가 시 3,000원 쿠폰 즉시 발급</p>
      </div>
      <nav className="Header-nav">
        <div className="left">
          <div className="Logo">
            <Link to="/"></Link>
          </div>
          <ul>
            <li>
              <Link to="/ProductAll">ALL</Link>
            </li>
            <li>
              <Link to="/Digital">DIGITAL</Link>
            </li>
            <li>
              <Link to="/Living">LIVING</Link>
            </li>
            <li>
              <Link to="/Fashion">FASHION</Link>
            </li>
          </ul>
        </div>
        <div className="right">
          <div className="LoginBtn">
            <Link
              to="/Login"
              onClick={authentication == true ? ChangeLogin : goToLogin}
            >
              {authentication == true ? "로그아웃" : "로그인"}
            </Link>
          </div>
          <form className="Search">
            <input
              type="text"
              className="login-link"
              placeholder="SEARCH"
              onKeyPress={(event) => search(event)}
            />
            <BiSearch size={20} />
          </form>
        </div>
      </nav>
    </div>
  );
};

export default Header;
