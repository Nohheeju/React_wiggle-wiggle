import React from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import NBItem from "../components/NBItem";

// Import React icons
import { IoCaretForwardCircle } from "react-icons/io5";
import { IoIosArrowForward } from "react-icons/io";
import { FaPlus } from "react-icons/fa";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import required modules
import { Autoplay, Pagination, Navigation } from "swiper/modules";

const ProductMain = () => {
  const navigate = useNavigate();
  const goToDetailLiving7 = () => {
    navigate(`/Living/7`, {
      state: {
        id: 7,
        title: "손톱깎이 세트 - Smile We Love",
        price: 16000,
        img: "https://wiggle-wiggle.com/web/product/big/202402/07879be57d651d707fd7c7f11bbc2adc.jpg",
        choose: ["Smile We Love", "Smile We Love Pink"],
      },
    });
  };

  return (
    <div className="ProductMain">
      <img
        className="slogan"
        src={process.env.PUBLIC_URL + "/Images/slogan_w_shadow.png"}
        alt="slogan"
      />
      <section className="ShortcutMenu">
        <Link className="Shortcut" to="/Digital">
          <p>
            <IoCaretForwardCircle />
            DIGITAL
          </p>
          <img
            src={process.env.PUBLIC_URL + "images/DIGITAL_thumbnail.jpg"}
            alt="thumbnail img"
          />
        </Link>
        <Link className="Shortcut" to="/Living">
          <p>
            <IoCaretForwardCircle />
            LIVING
          </p>
          <img
            src={process.env.PUBLIC_URL + "images/LIVING_thumbnail.gif"}
            alt="thumbnail img"
          />
        </Link>
        <Link className="Shortcut" to="/Fashion">
          <p>
            <IoCaretForwardCircle />
            FASHION
          </p>
          <img
            src={process.env.PUBLIC_URL + "images/FASHION_thumbnail.jpg"}
            alt="thumbnail img"
          />
        </Link>
      </section>
      <section className="BestSlide">
        <Swiper
          className="mySwiper"
          loop={true}
          centeredSlides={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          modules={[Autoplay, Pagination, Navigation]}
        >
          <SwiperSlide className="Slide">
            <img
              src={process.env.PUBLIC_URL + "/Images/BestSeller-img1.png"}
              alt="slide img"
            />
            <div className="textBox">
              <div className="title">
                <h3>BEST SELLER</h3>
                <h4>PLAYLIST</h4>
              </div>
              <div className="item">
                <h5>손톱깎이 세트 - Smile We Love</h5>
                <h4>16,000원</h4>
              </div>
              <div className="text">
                <p>
                  미니 백을 열면 펼쳐지는 손톱깎이 세트! 여행 갈 때도
                  사무실에서도 집에서도 하나씩은 꼭 필요한 구성으로만 알차게
                  사용해 보세요
                </p>
                <button onClick={goToDetailLiving7}>
                  BUY NOW
                  <IoIosArrowForward />
                </button>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="NBItem-inner">
        <div className="title">
          <h3>NEW ITEM</h3>
          <h5>반복되는 일상이 지루할 때 분위기 전환!</h5>
          <button className="moreBtn">
            <FaPlus size={12} />
            더보기
          </button>
        </div>
        <Swiper className="mySwiper" spaceBetween={30} slidesPerView={5}>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/newItem-img1.png"]}
              item="키즈 욕실슬리퍼(210) - Rainbow Smile"
              price="16,700원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/newItem-img2.png"]}
              item="마스킹 테이프"
              price="4,000원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/newItem-img3.png"]}
              item="리유저블 쇼퍼백(M) - Pizza Time"
              price="12,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/newItem-img4.png"]}
              item="키즈 로브 - Don't Panic"
              price="54,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/newItem-img5.png"]}
              item="[주문제작] 갤럭시Z플립 투명케이스"
              price="17,200원"
            />
          </SwiperSlide>
        </Swiper>
      </section>
      <section className="min-banner">
        <div className="textBox">
          <h3>WIGGLEWIGGLE ZIP</h3>
          <h5>
            블랙 하우스의 문을 여는 순간,
            <br />
            세상 모든 컬러가 쏟아집니다.
          </h5>
          <button className="moreBtn">+ VIEW MORE</button>
        </div>
      </section>
      <section className="NBItem-inner">
        <div className="title">
          <h3>BEST ITEM</h3>
          <h5>위글위글에서 놓치면 아쉬울 아이템이 가득!</h5>
          <button className="moreBtn">
            <FaPlus size={12} />
            더보기
          </button>
        </div>
        <Swiper className="mySwiper" spaceBetween={30} slidesPerView={5}>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/bestItem-img1.png"]}
              item="욕실 슬리퍼 - Forest"
              price="18,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/bestItem-img2.png"]}
              item="리유저블 쇼퍼백(S/M/L) - Hound Tooth Check"
              price="10,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/bestItem-img3.png"]}
              item="리유저블 쇼퍼백(S/M/L) - Teddy Bear"
              price="10,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/bestItem-img4.png"]}
              item="라운지 로브 - Don't Panic"
              price="99,900원"
            />
          </SwiperSlide>
          <SwiperSlide className="Slide">
            <NBItem
              imagesUrl={["/images/bestItem-img5.png"]}
              item="말랑 무선마우스 & 하트 마우스패드 SET - Wiggle Heart"
              price="23,500원"
            />
          </SwiperSlide>
        </Swiper>
      </section>
    </div>
  );
};

export default ProductMain;
