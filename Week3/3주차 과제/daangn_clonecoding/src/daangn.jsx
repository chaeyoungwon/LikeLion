import react from "react";
import img1 from "./images/1.jpeg";
import img2 from "./images/2.jpeg";
import img3 from "./images/3.jpeg";
import img4 from "./images/4.jpeg";
import img5 from "./images/5.jpeg";
import img6 from "./images/6.jpeg";
import img7 from "./images/7.jpeg";
import img8 from "./images/8.jpeg";
import img9 from "./images/9.jpeg";
import img10 from "./images/10.jpeg";
import logo from "./images/logo.jpeg";
import headerimg from "./images/header-image.png";
import bannerimg from "./images/banner-icon.png";

import "./daangn.css";

function Daangn() {
  return (
    <>
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
      <main>
        <div className="banner">
          <div className="banner-detail">
            <div>
              <p className="banner-title">우리 동네에서 찾는</p>
              <p className="banner-title">당근 알바</p>
              <p className="banner-subtitle">걸어서 10분 거리의</p>
              <p className="banner-subtitle">동네 알바들 여기 다 있어요.</p>
              <button className="uploadbtn">공고 올리기</button>
            </div>
            <img src={headerimg} className="header-img" />
          </div>
        </div>

        <div className="upload-container">
          <h2 className="container-title">인기 당근알바</h2>
          <div className="post-container">
            <div className="post">
              <img src={img1} alt="img1" className="upload-img" />
              <div className="postInfo">
                <span className="title">
                  익산 서동축제 아르바이트 구합니다.
                </span>
                <span className="subtitle">
                  풍선 &middot; 전라북도 익산시 동산동
                </span>
                <span className="price">시급 15,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img2} alt="img2" className="upload-img" />
              <div className="postInfo">
                <span className="title">
                  익산역 팝업스토어 1달 단기 알바하실분
                </span>
                <span className="subtitle">
                  퍼니랜드 &middot; 전라북도 익산시 창인동1가
                </span>
                <span className="price">시급 10,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img4} alt="img4" className="upload-img" />
              <div className="postInfo">
                <span className="title">삼성전자 어린이날 행사</span>
                <span className="subtitle">
                  M&F promotion &middot; 충청남도 아산시 배방읍
                </span>
                <span className="price">시급 10,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img3} alt="img3" className="upload-img" />
              <div className="postInfo">
                <span className="title">현장에서 일하실분 구합니다~</span>
                <span className="subtitle"> 강원특별자치도 원주시 학성동</span>
                <span className="price">일급 160,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img5} alt="img5" className="upload-img" />
              <div className="postInfo">
                <span className="title">삼성전자 어린이날 행사</span>
                <span className="subtitle">
                  M&F promotion &middot; 충청남도 아산시 배방읍
                </span>
                <span className="price">시급 10,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img6} alt="img6" className="upload-img" />
              <div className="postInfo">
                <span className="title">간단한 엑셀, 서류 작업 오전 3시간</span>
                <span className="subtitle"> 서울특별시 구로구 구로동</span>
                <span className="price">시급 10,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img7} alt="img7" className="upload-img" />
              <div className="postInfo">
                <span className="title">
                  아르바이트 장소 단순 포장알바 급구합니다 :)
                </span>
                <span className="subtitle">
                  요거마마 &middot; 경기도 화성시 영천동
                </span>
                <span className="price">시급 10,000</span>
              </div>
            </div>
            <div className="post">
              <img src={img8} alt="img8" className="upload-img" />
              <div className="postInfo">
                <span className="title">판넬시공자 급하게구합니다</span>
                <span className="subtitle">경상북도 경주시 안강읍</span>
                <span className="price">월급 4,000,000</span>
              </div>
            </div>

            <div className="post">
              <img src={img9} alt="img9" className="upload-img" />
              <div className="postInfo">
                <span className="title">
                  안전 질서 진행 요원 알바. 내용필독
                </span>
                <span className="subtitle">
                  이룸경호기획 ・ 전라북도 전주시 덕진구 덕진동1가
                </span>
                <span className="price">일급 80,000</span>
              </div>
            </div>

            <div className="post">
              <img src={img10} alt="img10" className="upload-img" />
              <div className="postInfo">
                <span className="title">치와와 방문 펫시터를 모십니다!</span>
                <span className="subtitle">서울특별시 구로구 항동</span>
                <span className="price">시급 15,000</span>
              </div>
            </div>
          </div>
        </div>

        <div className="banner2">
          <div className="info">
            <img src={bannerimg} className="banner-img2" />
            <div className="banner-info2">
              <div className="banner-title2">
                대규모 채용이 필요하다면 <br />
                당근알바 기업용 서비스에 대해 알아보세요!
              </div>
            </div>
          </div>
          <div className="buttonbox">
            <button className="freebtn">7일 무료 체험</button>
            <button className="contactbtn">1:1 문의</button>
          </div>
        </div>
      </main>
    </>
  );
}
export default Daangn;
