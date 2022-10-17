import { observer } from 'mobx-react-lite';
import { useContext } from 'react';
import { Routes, Navigate, Route } from "react-router-dom";
import { DevicePage } from '../pages/DevicePage/DevicePage';
import { userContext } from '../processes/UserProcess';
import { authRoutes, AuthRouteType, publicRoutes } from "../routes";
import { DEVICE_ROUTE, SHOP_ROUTE } from '../shared/utils/routes';

export const AppRouter = observer(() => {
    const { userStore } = useContext(userContext);

    return (
        <Routes>
            {userStore.isAuth && authRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            {publicRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            <Route path={`${DEVICE_ROUTE}/:id`} element={<DevicePage />} />
            <Route path="/*" element={<Navigate to={SHOP_ROUTE} />}/>
        </Routes>
    )
});