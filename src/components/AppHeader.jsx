import React, { useState, useEffect } from "react";
import {
  Layout,
  Button,
  Form,
  Input,
  Radio,
  Col,
  Row,
  Space,
  InputNumber,
  ConfigProvider,
  Modal,
  message,
} from "antd";
import { createStyles } from "antd-style";
import { PhoneOutlined } from "@ant-design/icons";
import "./appStyles/AppHeader.css";

const SubmitButton = ({ form, children }) => {
  const [submittable, setSubmittable] = React.useState(false);

  // Watch all values
  const values = Form.useWatch([], form);
  useEffect(() => {
    form
      .validateFields({
        validateOnly: true,
      })
      .then(() => setSubmittable(true))
      .catch(() => setSubmittable(false));
  }, [form, values]);
  return (
    <Button type="primary" htmlType="submit" disabled={!submittable}>
      {children}
    </Button>
  );
};

const useStyle = createStyles(({ prefixCls, css }) => ({
  linearGradientButton: css`
    &.${prefixCls}-btn-primary:not([disabled]):not(
        .${prefixCls}-btn-dangerous
      ) {
      border-width: 0;

      > span {
        position: relative;
      }

      &::before {
        content: "";
        background: linear-gradient(135deg, #fed502, #fefd97);
        position: absolute;
        inset: 0;
        opacity: 1;
        transition: all 0.3s;
        border-radius: inherit;
      }

      &:hover::before {
        opacity: 0;
      }
    }
  `,
}));

export default function AppHeader() {
  //контроль размера окна
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    const handleResize = (event) => {
      setWidth(event.target.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  //обработчик формы
  const [form] = Form.useForm();
  const onFinish = () => {
    message.success("Submit success!");
    form.resetFields();
  };
  const onFinishFailed = () => {
    message.error("Submit failed!");
  };

  //стили для градиента кнопки
  const { styles } = useStyle();

  //контроль состояния модалки
  const [loading, setLoading] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleSend = () => {
    setIsModalOpen(false);
  };
  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setIsModalOpen(false);
      form.resetFields();
      onFinish();
    }, 1500);
  };

  return (
    <Layout.Header className="headerStyle">
      {width > 770 ? (
        <Form
          className={width > 1000 ? "formStyle" : "formStyle formSizeWide"}
          form={form}
          name="validateOnly"
          layout="vertical"
          autoComplete="off"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Row justify="space-between" align="middle">
            <Col flex="auto">
              <Form.Item
                name="name"
                label="Имя"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <Input />
              </Form.Item>
              <Form.Item
                name="phone"
                label="Номер телефона:"
                rules={[
                  {
                    required: true,
                    message: "",
                  },
                ]}
              >
                <InputNumber controls={false} style={{ width: "100%" }} />
              </Form.Item>
            </Col>
            <Col felx="100px">
              <Form.Item label="Связаться по:">
                <Radio.Group>
                  <Radio value="Телеграм"> Телеграм </Radio>
                  <Radio value="Вайбер"> Вайбер </Radio>
                  <Radio value="Звонку">Звонку</Radio>
                </Radio.Group>
              </Form.Item>
            </Col>
            <Col flex="80px">
              <Form.Item>
                <Space>
                  <SubmitButton form={form}>Отправить</SubmitButton>
                </Space>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      ) : (
        <div style={{ margin: "0 0 0 30px" }}>
          <ConfigProvider
            button={{
              className: styles.linearGradientButton,
            }}
          >
            <Space>
              <Button
                onClick={showModal}
                style={{ color: "#130e0a" }}
                type="primary"
                size="large"
                icon={<PhoneOutlined />}
              >
                Оставить заявку
              </Button>
            </Space>
          </ConfigProvider>
          <Modal
            footer={[]}
            title="Оставить заявку"
            open={isModalOpen}
            onCancel={handleSend}
          >
            <Form
              className="formStyle formSizeMobile"
              form={form}
              name="validateOnly"
              layout="vertical"
              autoComplete="off"
            >
              <Row justify="space-between" align="middle">
                <Col flex="auto">
                  <Form.Item
                    name="name"
                    label="Имя"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <Input />
                  </Form.Item>
                  <Form.Item
                    name="phone"
                    label="Номер телефона:"
                    rules={[
                      {
                        required: true,
                        message: "",
                      },
                    ]}
                  >
                    <InputNumber controls={false} style={{ width: "100%" }} />
                  </Form.Item>
                </Col>
                <Col felx="100px">
                  <Form.Item label="Связаться по:">
                    <Radio.Group>
                      <Radio value="Телеграм"> Телеграм </Radio>
                      <Radio value="Вайбер"> Вайбер </Radio>
                      <Radio value="Звонку">Звонку</Radio>
                    </Radio.Group>
                  </Form.Item>
                </Col>
                <Col flex="80px">
                  <Form.Item>
                    <Button
                      form={form}
                      key="submit"
                      type="primary"
                      loading={loading}
                      onClick={handleOk}
                    >
                      Отправить
                    </Button>
                  </Form.Item>
                </Col>
              </Row>
            </Form>
          </Modal>
        </div>
      )}
    </Layout.Header>
  );
}
