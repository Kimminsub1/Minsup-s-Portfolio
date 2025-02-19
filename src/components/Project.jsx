import React, { useState } from "react";
import "./Project.css";

const Projects = () => {
  // 선택된 탭을 추적하는 상태
  const [activeTab, setActiveTab] = useState("Project1");
  const [imageIndex, setImageIndex] = useState(0); // 현재 슬라이드 인덱스

  // 프로젝트별 이미지 배열
  const projectImages = {
    Project1: [
      "img/project_usinsa.png",
      "img/usinsa_login.png",
      "img/usinsa_product.png",
      "img/usinsa_signup.png",
      "img/usinsa_userinfo.png",
    ],
    Project2: [
      "img/project_kiosk.png",
      "img/kiosk_product.png",
      "img/kiosk_product_detail.png",
      "img/kiosk_cart.png",
      "img/kiosk_order.png",
    ],
    Project3: [
      "img/project_sagwasangjum.png",
      "img/sagwasangjum_product.png",
      "img/sagwasangjum_product_detail.png",
      "img/sagwasangjum_product_category.png",
    ],
    Project4: [
      "img/kokeetea.png",
    ],
  };

  // 현재 선택된 프로젝트의 이미지 배열 가져오기
  const images = projectImages[activeTab];

  // 이전 이미지 보기
  const prevImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // 다음 이미지 보기
  const nextImage = () => {
    setImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="projects-container">
      <h2>My Projects</h2>
      {/* 탭 메뉴 */}
      <div className="projects-sidebar">
        <button
          className={activeTab === "Project1" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project1");
            setImageIndex(0);
          }}
        >
          Usinsa
        </button>
        <button
          className={activeTab === "Project2" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project2");
            setImageIndex(0);
          }}
        >
          SmartPhone Kiosk
        </button>
        <button
          className={activeTab === "Project3" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project3");
            setImageIndex(0);
          }}
        >
          Sagwasangjum
        </button>
        <button
          className={activeTab === "Project4" ? "active" : ""}
          onClick={() => {
            setActiveTab("Project4");
            setImageIndex(0);
          }}
        >
          KokeeTea
        </button>
      </div>

      {/* 프로젝트 내용 */}
      <div className="projects-content">
        {images && (
          <div className="project-item">
            <div className="image-slider">
              <button className="prev-btn" onClick={prevImage}>
                {"<"}
              </button>
              <img src={images[imageIndex]} alt={`slide-${imageIndex}`} />
              <button className="next-btn" onClick={nextImage}>
                {">"}
              </button>
            </div>
            <h3>
  {activeTab === "Project1"
    ? "남성 의류 쇼핑몰 웹사이트"
    : activeTab === "Project2"
    ? "스마트폰 키오스크 시스템"
    : activeTab === "Project3"
    ? "전자제품 쇼핑몰 웹사이트"
    : "카페 주문 웹 애플리케이션"}
</h3>
<p>
  {activeTab === "Project1"
    ? "Java와 MySQL을 활용하여 개발한 남성 의류 쇼핑몰 웹사이트입니다."
    : activeTab === "Project2"
    ? "Java와 MySQL을 이용해 제작한 스마트폰 기반 키오스크 주문 시스템입니다."
    : activeTab === "Project3"
    ? "Servlet과 Apache를 사용하여 제작한 전자제품 쇼핑몰 웹사이트입니다."
    : "React와 Spring Boot를 활용한 카페 주문 웹 애플리케이션입니다."}
</p>

          </div>
        )}
      </div>
    </div>
  );
};

export default Projects;
