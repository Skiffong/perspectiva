import React from "react";
import { Tabs, Card } from "antd";
import "./pageStyles/Prices.css";
import data from "../../public/data.jsx";

function Prices() {
  return (
    <div>
      <h2 className="pricesTitle">Актуальные цены и текущие наборы</h2>
      <Tabs
        centered
        type="card"
        items={data.map((item) => {
          return {
            key: item.id,
            label: item.category,
            children: (
              <div>
                <Card
                  className="priceCard"
                  title={item.category}
                  bordered={false}
                >
                  <div className="cardLeft">
                    <img
                      className="cardImg"
                      alt={item.category}
                      src={item.img}
                    />
                  </div>
                  <div className="cardRight">
                    <p>Цена текущего набора: {item.price}</p>
                    <p>Старт обучения: {item.date}</p>
                    <p>Количество оставшихся мест: {item.count}</p>
                  </div>
                </Card>
              </div>
            ),
          };
        })}
      />
    </div>
  );
}

export default Prices;
