import React from "react";
import { Flex, Image } from "antd";
import "../pageStyles/SubCourses.css";

import catB from "../../assets/car_1.png";

function CategoryB() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left">
          <Image preview={false} src={catB} alt="cat. B" />
        </div>
        <div className="right">
          <p>
            Автошкола «Перспектива» в городе Минске проводит обучение водителей
            на категорию «В» с вождением на автомобилях с механической и
            автоматической коробкой передач.
          </p>
          <p>
            В программу подготовки на данную категорию входит теоретическая и
            практическая часть. Длительность обучения составляет от 3,5 месяцев.
            Занятия проводятся в удобное для вас время.
          </p>
          <div className="benefits">
            <div className="benefitsItem">Оплата в 4 этапа</div>
            <div className="benefitsItem">
              Бесплатные пересдачи зачетов по теории
            </div>
            <div className="benefitsItem">Обучение по маршрутам ГАИ</div>
          </div>
        </div>
      </Flex>
    </section>
  );
}

export default CategoryB;
