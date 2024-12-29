import React from "react";
import { Carousel } from "antd";
import "./pageStyles/Auto.css";

import car1 from "../assets/car_1.png";
import car2 from "../assets/car_2.png";
import car3 from "../assets/car_3.jpeg";
import car4 from "../assets/car_4.jpg";
import car5 from "../assets/car_5.png";
import car6 from "../assets/car_6.png";

const cars = [car1, car2, car3, car4, car5, car6];

function Auto() {
  return (
    <Carousel className="autoCarousel" effect="fade" autoplay arrows>
      {cars.map((car, id) => {
        return (
          <div key={id}>
            <p
              className="autoContent"
              style={{ backgroundImage: `url(${car})` }}
            ></p>
          </div>
        );
      })}
    </Carousel>
  );
}

export default Auto;
