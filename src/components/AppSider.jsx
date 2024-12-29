import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Layout, Menu, Image, Flex, Button } from "antd";
import {
  FileDoneOutlined,
  GiftOutlined,
  CarOutlined,
  SearchOutlined,
  DollarOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PhoneOutlined,
  HomeOutlined,
  InfoCircleOutlined,
} from "@ant-design/icons";
import useWindowSize from "../utils/useWindowSize";
import "./appStyles/AppSider.css";

//ФОРМИРОВАНИЕ СПИСКА МЕНЮ
const items = [
  {
    key: "1",
    icon: <HomeOutlined />,
    label: <Link to="/Home">Главная</Link>,
  },
  {
    key: "2",
    icon: <InfoCircleOutlined />,
    label: <Link to="/About">О нас</Link>,
  },

  {
    key: "3",
    icon: <FileDoneOutlined />,
    label: "Услуги",
    children: [
      {
        key: "31",
        label: <Link to="/Services:CategoryA"> Категория A </Link>,
      },
      {
        key: "32",
        label: <Link to="/Services:CategoryB"> Категория В </Link>,
      },
      {
        key: "33",
        label: <Link to="/Services:CategoryC"> Категория C </Link>,
      },
      {
        key: "34",
        label: <Link to="/Services:CategoryCE"> Категория CE </Link>,
      },
      {
        key: "35",
        label: <Link to="/Services:CategoryD"> Категория D </Link>,
      },
      {
        key: "36",
        label: <Link to="/Services:CategoryTaxi"> КПК водителей такси </Link>,
      },
      {
        key: "37",
        label: (
          <Link to="/Services:CategoryInternational">
            Международные перевозки
          </Link>
        ),
      },
    ],
  },

  {
    key: "4",
    icon: <DollarOutlined />,
    label: <Link to="/Prices">Цены и наборы </Link>,
  },

  // {
  //   key: "5",
  //   icon: <SearchOutlined />,
  //   label: <Link to="/Courses">Актуальные наборы</Link>,
  // },

  {
    key: "6",
    icon: <CarOutlined />,
    label: <Link to="/Auto">Наш автопарк</Link>,
  },

  {
    key: "7",
    icon: <GiftOutlined />,
    label: <Link to="/Sale">Акции</Link>,
  },

  {
    key: "8",
    icon: <PhoneOutlined />,
    label: <Link to="/Contacts">Контакты</Link>,
  },
];
const getLevelKeys = (items1) => {
  const key = {};
  const func = (items2, level = 1) => {
    items2.forEach((item) => {
      if (item.key) {
        key[item.key] = level;
      }
      if (item.children) {
        func(item.children, level + 1);
      }
    });
  };
  func(items1);
  return key;
};
const levelKeys = getLevelKeys(items);

//САЙДЕР
export default function AppSider({ isActive, onShow }) {
  const [stateOpenKeys, setStateOpenKeys] = useState([]);

  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find(
      (key) => stateOpenKeys.indexOf(key) === -1
    );
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey])
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };

  const [width] = useWindowSize();

  const collapseMobileSider = () => {
    if (width < 770) {
      return isActive ? null : onShow();
    }
  };

  return (
    <>
      <Layout.Sider
        className="siderStyle"
        width={width < 770 ? "100%" : "20%"}
        collapsible
        collapsed={isActive}
        trigger={null}
        breakpoint="md"
        collapsedWidth="80"
        onCollapse={() => {
          return onShow();
        }}
      >
        <Flex vertical gap="middle">
          <Button
            className={width < 770 ? "btnBurger" : "btnBurger hidden"}
            type="text"
            icon={isActive ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={onShow}
          />
          <div>
            <Image src="vite.svg" preview={false} />
          </div>
          <div>
            <Menu
              className={
                width < 770 ? "menuStyle menuStyleMobile" : "menuStyle"
              }
              mode="inline"
              defaultSelectedKeys={["1"]}
              onClick={collapseMobileSider}
              openKeys={stateOpenKeys}
              onOpenChange={onOpenChange}
              items={items}
            />
          </div>
          <div>
            <div>
              <Flex vertical gap="middle">
                <Link to="/" target="_blank">
                  <span>
                    <Image
                      className="iconStyle"
                      src="instagram.svg"
                      preview={false}
                    />
                  </span>
                  Instagram
                </Link>
                <Link to="/" target="_blank">
                  <span>
                    <Image
                      className="iconStyle"
                      src="telegram.svg"
                      preview={false}
                    />
                  </span>
                  Telegram
                </Link>
                <Link to="/" target="_blank">
                  <span>
                    <Image
                      className="iconStyle"
                      src="viber.svg"
                      preview={false}
                    />
                  </span>
                  Viber
                </Link>
              </Flex>
            </div>
          </div>
        </Flex>
      </Layout.Sider>
    </>
  );
}
