import { useContext } from 'react';
import { Routes, Navigate, Route } from "react-router-dom";
import { Context } from "..";
import { authRoutes, AuthRouteType, publicRoutes } from "../routes";
import { SHOP_ROUTE } from '../shared/utils/const';

export function AppRouter() {
    const { user } = useContext(Context);

    return (
        <Routes>
            {user.isAuth && authRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            {publicRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            <Route path="/*" element={<Navigate replace={true} to={SHOP_ROUTE} />} />
        </Routes>
    )
}