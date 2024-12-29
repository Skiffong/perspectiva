import React from "react";

import { Flex, Image, Divider, List } from "antd";
import "../pageStyles/SubCourses.css";

import catD from "../../assets/car_5.png";

const fromCtoD = [
  "Длительность обучения – 2 месяца",
  "Практика вождения проводится на автобусе, работающем на дизтопливе, транспорт оснащен гидроусилителем",
  "Вождение по маршруту ГАИ",
  "Автобус на экзамен в ГАИ предоставляется БЕСПЛАТНО",
];

const fromBtoD = [
  "Длительность обучения – 2.5 месяца",
  "Переподготовка доступна с 19 лет при наличии категории 'B'",
  "Получение категории 'D' возможно по достижении 21 года и стажа вождения не менее 2 лет",
  "Возможность сдачи экзамена на категорию 'C' без дополнительного обучения ",
];

function CategoryD() {
  return (
    <section className="subCategory">
      <Flex className="subCategoryFlex">
        <div className="left catC">
          <Image preview={false} src={catD} alt="cat. D" />
        </div>
        <div className="right">
          <p>
            Категория «D» дает право управлять автобусами и автомобилями,
            предназначенными для перевозки пассажиров и имеющими более восьми
            мест, водительское место в этом случае не берется в расчет.
          </p>
          <p>
            У нас в автошколе доступно переобучение с категрии "B" на категорию
            "D". В таком случае отличным бонусом станет возможность сдачи
            практического экзамена на категорию «С» (дополнительно учиться не
            требуется). После прохождения обучения вы можете открыть категории
            «D» и «С».
          </p>
          <p>
            Так же доступен вариант переобучения с категории "C" на категорию
            "D". По окончании курсов по переподготовке школой выдается
            свидетельство установленного образца. После успешной сдачи
            практических навыков в ГАИ, Вы получаете права категории "D".
          </p>

          <div className="benefits">
            <div className="benefitsItem wide">
              Переподготовка с категории "В" на "D" или с категории "С" на "D"
            </div>
            <div className="benefitsItem">Теоретические занятия</div>
            <div className="benefitsItem">Практические занятия по вождению</div>
            <div className="benefitsItem">Внутренний экзамен</div>
          </div>
        </div>
      </Flex>
      <div>
        <Divider orientation="center" style={{ borderColor: "#fefd97" }}>
          <h2 className="subCategorySubTitle">
            Переподготовка с категории "С" на "D"
          </h2>
        </Divider>
        <List
          bordered
          dataSource={fromCtoD}
          renderItem={(item) => (
            <List.Item className="subCategoryListItem">
              <p>{item}</p>
            </List.Item>
          )}
        />
        <Divider orientation="center" style={{ borderColor: "#fefd97" }}>
          <h2 className="subCategorySubTitle">
            Переподготовка с категории "В" на "D"
          </h2>
        </Divider>
        <List
          bordered
          dataSource={fromBtoD}
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

export default CategoryD;
