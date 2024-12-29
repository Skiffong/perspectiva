import React from "react";
import { Flex, Image, Divider, List } from "antd";
import "../pageStyles/SubCourses.css";

import catCE from "../../assets/car_4.jpg";

const teoretical = [
  "Устройство и эксплуатация составов транспортных средств (УиЭСТС)",
  "Основы управления составов транспортных средств и безопасность движения (ОУСТСиБД)",
  "Оказание медицинской помощии",
];

const practical = [
  "Тема 1: Приемы управления составом транспортных средств  (обучение на автодроме)",
  "Тема 2: Управление составом транспортных средств  по дорогам вне населенных пунктов",
  "Тема 3: Управление составом транспортных средств  по улицам населенных пунктов ",
  "Тема 4: Совершенствование навыков управления составом транспортных средств ",
];

function CategoryCE() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left catC">
          <Image preview={false} src={catCE} alt="cat. CE" />
        </div>
        <div className="right">
          <p>
            Категория “СЕ” позволяет управлять тяжелым грузовым транспортным
            средством, вес которого больше 3,5 тонн в сцепке имеет прицеп более
            750 кг.
          </p>
          <p>
            Водитель автобуса также может получить категорию “DЕ”, если автобус
            находится в связке с тяжелым прицепом, а вместимость автобуса при
            этом больше 8 человек.
          </p>

          <div className="benefits">
            <div className="benefitsItem wide">
              Теоретический курс переподготовки с категории "C" на "CE"
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

export default CategoryCE;
