import { Routes, Route } from "react-router-dom";
import { authRoutes, AuthRouteType, publicRoutes } from "../routes";

export function AppRouter() {
    const isAuth = false;

    return (
        <Routes>
            {isAuth && authRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
            {publicRoutes.map(({ path, Component }: AuthRouteType) => 
                <Route key={path} path={path} element={Component()} />
            )}
        </Routes>
    )
}