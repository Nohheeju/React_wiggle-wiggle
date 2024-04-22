import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="Footer">
      <div className="Footer-desktop">
        <div className="Footer-top">
          {/* 아이콘을 감싸는 요소를 만들고 isOpen 상태에 따라 클래스를 조건부로 추가 */}
          <div
            className={`icon-container ${isOpen ? "open" : ""}`}
            onClick={toggleAccordion}
          >
            위글위글 정보
            <IoIosArrowDown className="icon" />
          </div>
          <ul className="Footer-info">
            <li>개인정보처리방침</li>
            <li>이용약관</li>
            <li>이용안내</li>
            <li>제휴문의</li>
          </ul>
        </div>
        <div className={`Footer-content ${isOpen ? "open" : ""}`}>
          <div className="Footer-middle">
            <ul className="Footer-info-address">
              <li>
                Corporate Name. 주식회사 아트쉐어 | Owner. 모성현 Business |
                License. 201-86-38817
              </li>
              <li>
                E-commerce Registration. 2022-서울강남-02241 | Phone.
                1533-8266(Korean only) | Contact Mail. biz_as@artshare.kr
              </li>
              <li>
                Address 서울특별시 강남구 테헤란로44길 8 (역삼동) 4층 | Personal
                Information Manager 오정현 (privacy_as@artshare.kr)
              </li>
            </ul>
            <div className="Footer-info-CS">
              <p>CS Center</p>
              <ul>
                <li>1533 - 8266</li>
                <li>9:30AM - 17:00PM (Lunch 12:00 - 13:00)</li>
                <li>Sat/Sun/Holiday CLOSED</li>
              </ul>
            </div>
          </div>
          <div className="Footer-bottom">
            <p>© ARTSHARE CO., LTD. ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
