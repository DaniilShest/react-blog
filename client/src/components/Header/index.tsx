import { Layout, Menu, Row } from 'antd'
import React, { FC } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { RouteNames } from '../../router'
import styles from './header.module.css'

export const Header: FC = () => {

    const isAuth = false
    const navigate = useNavigate()

    const authLinks = [
        { path: RouteNames.REGISTRATION, title: 'Регистарция' },
        { path: RouteNames.LOGIN, title: 'Войти' }
    ]
    const notAuthLinks = [
        { path: RouteNames.REGISTRATION, title: 'Username' },
        { path: RouteNames.LOGIN, title: 'Выйти' }
    ]

    return (
        <Layout.Header className={styles.header}>
            <div className="container">
                <Row justify='space-between'>
                    <Link className={styles.logo} to={RouteNames.HOME}>React-blog</Link>
                    {isAuth
                        ?
                        <Menu
                            theme="dark"
                            selectable={false}
                            mode="horizontal"
                            className={styles.menu}
                            items={
                                notAuthLinks.map(e => (
                                    {
                                        key: e.path,
                                        label: e.title,
                                        onClick: () => navigate(e.path),
                                        className: styles.link
                                    }
                                ))
                            }
                        />
                        :
                        <Menu
                            theme="dark"
                            selectable={false}
                            mode="horizontal"
                            className={styles.menu}
                            items={
                                authLinks.map(e => (
                                    {
                                        key: e.path,
                                        label: e.title,
                                        onClick: () => navigate(e.path),
                                        className: styles.link
                                    }
                                ))
                            }
                        />}

                </Row>
            </div>
        </Layout.Header>
    )
}
