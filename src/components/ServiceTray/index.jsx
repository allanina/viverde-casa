/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import Slider from "react-slick";
import "./styles.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PlanAndDecor from "../../assets/planejar-decorar.png";
import Paint from "../../assets/pintura.png";
import Build from "../../assets/construir.png";
import Renovate from "../../assets/reformar.png";
import Repair from "../../assets/pequenos-reparos.png";
import Electrical from "../../assets/servicos-eletricos.png";

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "flex" }}
      onClick={onClick}
    />
  );
}

function ServiceTray() {
  const settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="services-row">
      <Slider {...settings}>
        <div className="services-row-card">
          <a className="card-clicavel" id="planejar-decorar">
            <img
              className="services-image"
              src={PlanAndDecor}
              alt="planejar ou decorar"
            />
            <p>Planejar ou decorar</p>
          </a>
        </div>

        <div className="services-row-card">
          <a className="card-clicavel" id="pintura">
            <img className="services-image" src={Paint} alt="pintura" />
            <p>Pintura</p>
          </a>
        </div>

        <div className="services-row-card">
          <a className="card-clicavel" id="construr">
            <img className="services-image" src={Build} alt="construir" />
            <p>Construir</p>
          </a>
        </div>

        <div className="services-row-card">
          <a className="card-clicavel" id="reformar">
            <img className="services-image" src={Renovate} alt="reformar" />
            <p>Reformar</p>
          </a>
        </div>

        <div className="services-row-card">
          <a className="card-clicavel" id="pequenos-reparos">
            <img
              className="services-image"
              src={Repair}
              alt="pequenos reparos"
            />
            <p>Pequenos Reparos</p>
          </a>
        </div>

        <div className="services-row-card">
          <a className="card-clicavel" id="servicos-eletricos">
            <img
              className="services-image"
              src={Electrical}
              alt="serviços elétricos e automação"
            />
            <p>Serviços Elétricos e Automação</p>
          </a>
        </div>
      </Slider>
    </div>
  );
}

export default ServiceTray;
