import React from "react";
// SCSS
import "./teamInfo.scss";

const about = () => (
  <div className="team__info flex-center">
    <div>
      <h4 className="font20 weight800">Little About Us</h4>
      <p className="font12 weight500">
       <b>Visi</b> : Menyediakan produk yang yang berkualitas tinggi namun dengan harga yang terjangkau yang bersaing Serta memberikan pelayanan terhadap konsumen yang memuaskan.
       <br></br>
       <b>Misi</b> : 
       <ul>
        <li>Memuaskan konsumen.</li>
        <li>Menjadi perusahan yang terdepan di bidangnya.</li>
        <li>Memperluas lapangan kerja untuk masyarakat sekitar tempat produksi</li>

        </ul>
      </p>
      <p className="font12 weight500">Reminz</p>
    </div>
  </div>
);

export default about;
