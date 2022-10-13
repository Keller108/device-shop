import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Routes, Navigate, Route } from "react-router-dom";
import { authRoutes, AuthRouteType, publicRoutes } from "../routes";
import { SHOP_ROUTE } from '../shared/utils/routes';
import { Context } from './App';

export const AppRouter = observer(() => {
    const { userStore } = useContext(Context);

    return (
        <Routes>
            {userStore.isAuth && authRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            {publicRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            <Route path="/*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    )
});