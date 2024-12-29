import React from "react";

import { Flex, Image } from "antd";
import "../pageStyles/SubCourses.css";

import catTaxi from "../../assets/car_6.png";

function CategoryTaxi() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left">
          <Image preview={false} src={catTaxi} alt="cat. Taxi" />
        </div>
        <div className="right">
          <p>
            Автошкола «Перспектива» в городе Минске оказывает услуги повышения
            квалификации для водителей такси категории «В».
          </p>
          <p>
            В программу курса входит теоретическая и практическая часть.
            Длительность обучения составляет 1 неделю. Занятия проводятся в
            удобное для вас время: утро, вечер, выходные.
          </p>
          <div className="benefits">
            <div className="benefitsItem">Всего 1 неделя</div>
            <div className="benefitsItem">Теория и практика</div>
            <div className="benefitsItem">Удобное время</div>
          </div>
        </div>
      </Flex>
    </section>
  );
}

export default CategoryTaxi;
