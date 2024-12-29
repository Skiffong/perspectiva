import React from "react";
import { Link } from "react-router-dom";
import useWindowSize from "../utils/useWindowSize";

import { Row, Col, Typography, Card } from "antd";

import "./pageStyles/Home.css";
import catA from "../assets/avto_card_catA.png";
import catB from "../assets/avto_card_catB.png";
import catC from "../assets/avto_card_catC.png";
import catCE from "../assets/avto_card_catCE.png";
import catCE1 from "../assets/avto_card_catCE_1.png";
import catD from "../assets/avto_card_catD.png";
import catTaxi from "../assets/avto_card_catTaxi.png";

const { Meta } = Card;
const row1 = [
  {
    title: "Категория «В»",
    description: "легковые автомобили с МКПП и АКПП",
    img: catB,
    alt: "cat. B",
    linkTo: "/Services:CategoryB",
    sizeSmall: "8",
    sizeBig: "24",
    id: 1,
  },
  {
    title: "Категория «С»",
    description: "грузовые автомобили грузоподьемностью свыше 3,5 тонн",
    img: catC,
    alt: "cat. C",
    linkTo: "/Services:CategoryC",
    sizeSmall: "8",
    sizeBig: "24",
    id: 2,
  },
  {
    title: "Категория «CE»",
    description:
      "грузовые автомобили грузоподьемностью свыше 3.5тонны сцепленные с прицепом грузоподьемностью свыше 750 кг",
    img: catCE,
    alt: "cat. CE",
    linkTo: "/Services:CategoryCE",
    sizeSmall: "8",
    sizeBig: "24",
    id: 3,
  },
];

const row2 = [
  {
    title: "Категория «A»",
    description: "Мотоциклы",
    img: catA,
    alt: "cat. A",
    linkTo: "/Services:CategoryA",
    sizeSmall: "6",
    sizeBig: "24",
    id: 1,
  },
  {
    title: "Категория «D»",
    description: "Автобусы",
    img: catD,
    alt: "cat. D",
    linkTo: "/Services:CategoryD",
    sizeSmall: "6",
    sizeBig: "24",
    id: 2,
  },
  {
    title: "Категория «B»",
    description: "повышение квалификации для водителей такси",
    img: catTaxi,
    alt: "cat. Taxi",
    linkTo: "/Services:CategoryTaxi",
    sizeSmall: "6",
    sizeBig: "24",
    id: 3,
  },
  {
    title: "Международный водитель",
    description: "Курсы водителей международных перевозок",
    img: catCE1,
    alt: "cat. CE",
    linkTo: "/Services:CategoryInternational",
    sizeSmall: "6",
    sizeBig: "24",
    id: 4,
  },
];

function Home() {
  const [width] = useWindowSize();
  return (
    <section className="home">
      <Row className="top">
        <Col span={24}>
          <Typography.Title> Автошкола «Перспектива» </Typography.Title>
          <p>— это коллектив опытных и позитивных специалистов.</p>
          <p>
            В автошколе осуществляется подготовка водителей транспортных средств
            следующих категорий:
          </p>
        </Col>
      </Row>

      <Row>
        {row1.map((item) => {
          return (
            <Col
              span={width > 770 ? item.sizeSmall : item.sizeBig}
              key={item.id}
            >
              <Link to={item.linkTo}>
                <Card
                  className="card"
                  hoverable
                  cover={
                    <img className="cardImg" alt={item.alt} src={item.img} />
                  }
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>

      <Row>
        {row2.map((item) => {
          return (
            <Col
              span={width > 770 ? item.sizeSmall : item.sizeBig}
              key={item.id}
            >
              <Link to={item.linkTo}>
                <Card
                  className="card"
                  hoverable
                  cover={
                    <img className="cardImg" alt={item.alt} src={item.img} />
                  }
                >
                  <Meta title={item.title} description={item.description} />
                </Card>
              </Link>
            </Col>
          );
        })}
      </Row>
    </section>
  );
}

export default Home;
