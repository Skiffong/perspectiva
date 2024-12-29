import React from "react";

import { Flex, Image, Divider, List } from "antd";
import "../pageStyles/SubCourses.css";

import catA from "../../assets/car_2.png";

const data = [
  "Прямая езда с переключением скоростей от высшей к низшей и наоборот",
  "Повороты и развороты малого радиуса («змейка и восьмерка»)",
  "Колейная доска — маневры на малой скорости",
  "Скоростное маневрирование",
  "Торможение и остановка на второй скорости",
  "На экзамен приходят в наколенниках, налокотниках, шлеме и перчатках.",
];

function CategoryA() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left">
          <Image preview={false} src={catA} alt="cat. A" />
        </div>
        <div className="right">
          <p>
            Для каждого человека мотоцикл несет в себе свой особый смысл. Для
            одних – это просто транспорт без всякой эмоциональной окраски, для
            других – это спорт, третьи ищут в этом способ абстрагироваться и
            расслабиться, а для многих – это образ жизни.
          </p>
          <p>
            И хотя каждый вкладывает в езду на мото свой смысл, всех
            двухколесных объединяет одно – любовь к мотоциклам.
          </p>

          <div className="benefits">
            <div className="benefitsItem wide">
              Переподготовка занимает всего 18 часов
            </div>
            <div className="benefitsItem">Консультационное занятие</div>
            <div className="benefitsItem">Практические занятия на площадке</div>
            <div className="benefitsItem">Внутренний экзамен</div>
          </div>
          <p>
            После этого идет экзамен в МРЭО ГАИ. Экзамен состоит только из
            практики, теорию сдавать не нужно (Постановление МВД РБ № 280 от
            2.10.2017).
          </p>
        </div>
      </Flex>
      <div>
        <Divider orientation="center" style={{ borderColor: "#fefd97" }}>
          <h2 className="subCategorySubTitle">КАК ПРОХОДИТ ЭКЗАМЕН</h2>
        </Divider>
        <List
          bordered
          dataSource={data}
          renderItem={(item) => (
            <List.Item className="subCategoryListItem">
              <p>{item}</p>
            </List.Item>
          )}
        />
      </div>
    </section>
  );
}

export default CategoryA;
