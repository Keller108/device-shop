import { AdminPanelPage } from "./pages/AdminPanelPage/AdminPanelPage";
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { BasketPage } from "./pages/BasketPage/BasketPage";
import { DevicePage } from "./pages/DevicePage/DevicePage";
import { Shop } from "./pages/Shop/Shop";
import { ADMIN_ROUTE,
    BASKET_ROUTE,
    DEVICE_ROUTE,
    LOGIN_ROUTE,
    REGISTRATION_ROUTE,
    SHOP_ROUTE
} from "./shared/utils/routes";

export type AuthRouteType = {
    path: string;
    Component: any;
}

export const authRoutes: AuthRouteType[] = [
    {
        path: ADMIN_ROUTE,
        Component: AdminPanelPage
    },
    {
        path: BASKET_ROUTE,
        Component: BasketPage
    }
];

export const publicRoutes: AuthRouteType[] = [
    {
        path: SHOP_ROUTE,
        Component: Shop
    },
    {
        path: LOGIN_ROUTE,
        Component: AuthPage
    },
    {
        path: REGISTRATION_ROUTE,
        Component: AuthPage
    },
    // {
    //     path: DEVICE_ROUTE + '/:id',
    //     Component: DevicePage
    // }
];