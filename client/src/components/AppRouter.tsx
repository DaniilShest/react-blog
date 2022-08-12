import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'
import { NotFound } from '../pages/NotFound'
import { privateRoutes, publicRoutes } from '../router'

export const AppRouter: FC = () => {

    const isAuth = true

    return (
        <Routes>
            {
                isAuth
                    ?

                    privateRoutes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={< route.component />} />
                    ))
                    :
                    publicRoutes.map(route => (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={< route.component />} />
                    ))
            }

            <Route path='*' element={< NotFound />} />
        </Routes>
    )
}
