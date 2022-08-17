import { Button, Form, Input, message, Row } from 'antd';
import React, { FC } from 'react'
import { Link } from 'react-router-dom';
import { RouteNames } from '../router';

export const RegisterForm: FC = () => {
    const onFinish = (values: any) => {
        message.loading({ content: 'Loading...', key: '1' });
        setTimeout(() => {
            message.error({ content: 'Неправильный логин или пароль', key: '1', duration: 3 });
            console.log(values)
        }, 1000);
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <div className="form">
            <div className="form__wrapper">
                <Form
                    name="basic"
                    className='form__body'
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Логин"
                        name="username"
                        rules={[{ required: true, message: 'Пожалуйста введите логин!' }]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item
                        label="Пароль"
                        name="password"
                        rules={[{ required: true, message: 'Пожалуйста введите пароль!' }]}
                    >
                        <Input.Password />
                    </Form.Item>

                    <Form.Item >
                        <Row justify='space-between' align='middle'>
                            <Button type="primary" htmlType="submit">
                                Зарегестрироваться
                            </Button>
                            <Link to={RouteNames.LOGIN}> Уже есть аккаунт? Войти!</Link>
                        </Row>
                    </Form.Item>
                </Form>
            </div>
        </div>
    );
}
