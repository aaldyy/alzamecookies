import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
// Components
import TeamBox from './teamBox';
import TeamInfo from "./teamInfo";
import Title from "../ui-components/title/title";
// Assets
import Person01 from "../../assets/about/megawati.jpg";
import Person02 from "../../assets/about/megawati1.jpg";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="TENTANG KAMI" />
      <p className="font12">
      Jenis Usaha yang kami kelola bergerak di bidang makanan yaitu cookies, donuts, dan cakes. Kami
      memilih usaha di bidang makanan karena disesuaikan dengan peminat<br></br>
      dan modal yang kami miliki serta faktor-faktor lain yang menjadi pendukung pengembangan
      usaha ini.
      </p>
      <Row>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person01} name="MEGAWATI" job="OWNER" />
        </Col>
        <Col md={12} lg={4}>
          <TeamBox avatar={Person02} name="RENALDI AL AMIN" job="CEO" />
        </Col>
        <Col md={12} lg={4}>
          <TeamInfo />
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
