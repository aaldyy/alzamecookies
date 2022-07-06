import React from "react";
import { Row, Col } from "react-flexbox-grid";
// SCSS
import "./hero.scss";
//Assets
import HeroImage from '../../assets/hero/Renaldi2.jpg';
//Components
import Button from '../ui-components/button/button';

const hero = () => (
  <div className="hero" id="hero">
    <div className="wrapper">
      <Row>
        <Col md={12} lg={6}>
          <div className="hero-info">
            <h1 className="weight800 font60">Hello!!!</h1>
            <h1 className="weight800 font60">
              Kami Adalah Toko Kue Kering <div style={{color:"#804000"}}>Ter-ENAK</div>
            </h1>
            <p className="font12">
              Alzame Cookies ialah toko kue yang didirikan sejak tahun 2015, didirikan oleh seorang ibu rumah tangga, Megawati. Toko kue Alzame Cookies terletak di Banjarbaru, Kalimantan Selatan. 
            </p>
            <Button label="SEND MESSAGE" target={"contact"} />
          </div>
        </Col>
        <Col md={12} lg={6}>
          <div className="hero-image">
            <img src={HeroImage} alt="hero" />
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default hero;
