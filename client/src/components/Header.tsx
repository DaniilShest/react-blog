import { UserOutlined } from '@ant-design/icons'
import React, { FC } from 'react'
import { Link } from 'react-router-dom'
import { Logo } from './Logo'
import { SearchInput } from './UI/SearchInput'
import { WritePost } from './UI/WritePost'
import { RouteNames } from '../router'

export const Header: FC = () => {
    return (
        <header className="header">
            <div className="header__wrapper">
                <Logo />
                <div className="header__container">
                    <div className="header__actions">
                        <SearchInput />
                        <WritePost />
                    </div>
                </div>
                <div className="login">
                    <Link to={RouteNames.LOGIN} className='login__link'>
                        <UserOutlined />
                        <span>Войти</span>
                    </Link>
                </div>
            </div >
        </header >
    )
}
