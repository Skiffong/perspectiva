import React from "react";
import { Flex, Image, Divider, List } from "antd";
import "../pageStyles/SubCourses.css";

import catC from "../../assets/car_3.jpeg";

const teoretical = [
  "Устройство и эксплуатация автомобилей категории С (УиЭА)",
  "Основы управления транспортным средством и безопасность движения (ОУТСиБД)",
  "Оказание медицинской помощии",
];

const practical = [
  "Тема 1: Приемы управления автомобилем (обучение на автодроме)",
  "Тема 2: Маневрирование",
  "Тема 3: Управление автомобилем по дорогам вне населенных пунктов",
  "Тема 4: Управление автомобилем по улицам населенных пунктов ",
  "Тема 5: Совершенствование навыков управления автомобилем",
];

function CategoryC() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left catC">
          <Image preview={false} src={catC} alt="cat. C" />
        </div>
        <div className="right">
          <p>
            Категория «С» предоставляет возможность сесть за руль, грузового
            автомобиля с разрешенной максимальной массой более 3,5 тонн.
          </p>
          <p>
            Правила дорожного движения меняются ежегодно, вносятся уточнения,
            дополнения, новые пункты правил, добавляются новые знаки. Во многом
            это обусловлено тем, что прогресс на месте не стоит.
          </p>

          <div className="benefits">
            <div className="benefitsItem wide">
              Теоретический курс переподготовки с категории "В" на "С"
            </div>
            <div className="benefitsItem">Консультационное занятие</div>
            <div className="benefitsItem">Практические занятия по вождению</div>
            <div className="benefitsItem">Внутренний экзамен</div>
          </div>
        </div>
      </Flex>
      <div>
        <Divider orientation="center" style={{ borderColor: "#fefd97" }}>
          <h2 className="subCategorySubTitle">Теоретический модуль</h2>
        </Divider>
        <List
          bordered
          dataSource={teoretical}
          renderItem={(item) => (
            <List.Item className="subCategoryListItem">
              <p>{item}</p>
            </List.Item>
          )}
        />
        <Divider orientation="center" style={{ borderColor: "#fefd97" }}>
          <h2 className="subCategorySubTitle">Практический модуль</h2>
        </Divider>
        <List
          bordered
          dataSource={practical}
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

export default CategoryC;
