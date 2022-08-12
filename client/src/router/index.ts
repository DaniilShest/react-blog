import React from "react";
import { Home } from "../pages/Home";
import { Login } from "../pages/Login";
import { Registration } from "../pages/Registration";

export interface IRoute {
    path: string,
    component: React.ComponentType,
    exact?: boolean
}

export enum RouteNames {
    HOME = '/',
    LOGIN = '/login',
    REGISTRATION = '/registration'
}

export const publicRoutes: IRoute[] = [
    { path: RouteNames.HOME, component: Home },
    { path: RouteNames.LOGIN, component: Login },
    { path: RouteNames.REGISTRATION, component: Registration }
]

export const privateRoutes: IRoute[] = [
    { path: RouteNames.HOME, component: Home },
    { path: RouteNames.LOGIN, component: Login },
    { path: RouteNames.REGISTRATION, component: Registration }
]