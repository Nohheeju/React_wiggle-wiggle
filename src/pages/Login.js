import React from "react";
import { useNavigate } from "react-router";

import { BsChatFill } from "react-icons/bs";
import { BsPersonFill } from "react-icons/bs";
import { IoLockOpen } from "react-icons/io5";

const Login = ({ setAuthentication }) => {
  const navigate = useNavigate();

  const LoginUser = (event) => {
    event.preventDefault();
    console.log("로그인");
    setAuthentication(true);
    navigate("/");
  };

  return (
    <div className="Login">
      <div className="Login-inner">
        <div className="Login-textBox">
          <h3>LOGIN</h3>
          <h4>
            <strong>카카오 간편 회원가입</strong>하면
            <br />
            <strong>3,000원 할인 쿠폰</strong> 즉시 지급!
          </h4>
          <p>*플친 쿠폰은 ID당 1회 지급</p>
          <button className="Login-kakako">
            <BsChatFill size={20} />
            카카오계정 로그인
          </button>
        </div>
        <p className="OR">OR</p>
        <form onSubmit={(event) => LoginUser(event)} className="Login-input">
          <div className="Login-IDBox">
            <BsPersonFill size={25} />
            <input type="text" id="Login-ID" placeholder="ID" />
          </div>
          <br />
          <div className="Login-PWBox">
            <IoLockOpen size={25} />
            <input type="password" id="Login-PW" placeholder="PW" />
          </div>
          <br />
          <input type="checkbox" />
          <label htmlFor="checkbox">아이디 저장</label>
          <br />
          <button type="submit" className="Login-btn">
            로그인
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
