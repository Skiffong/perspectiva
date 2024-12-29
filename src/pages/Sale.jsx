import React from "react";

import { Row, Col } from "antd";

import "./pageStyles/Sale.css";

function Sale() {
  return (
    <section className="sale">
      <h1 className="saleTitle">Акционные предложения</h1>
      <Row gutter={[0, 20]}>
        <Col className="saleItem" span={20}>
          Приведи друга и получи скидку 30р, чем больше друзей, тем больше
          скидка
        </Col>
        <Col className="saleItem" span={20}>
          Каждый выпускник получает скидку 30р на последующий курс в нашей
          автошколе
        </Col>
        <Col className="saleItem" span={20}>
          У нас можно преобрести подарочный сертификат на все услуги автошколы
        </Col>
        <Col className="saleItem" span={20}>
          Любую нашу услугу можно оплатить в рассрочку
        </Col>
      </Row>
    </section>
  );
}

export default Sale;
