import { toJS } from 'mobx';
import { useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { DeviceList } from '../../entities/Device/ui/DeviceList/DeviceList';
import { BrandsBar } from '../../features/BrandsBar';
import { TypeBar } from '../../features/TypeBar';
import { shopingContext } from '../../processes/ShopingProcess';
import { userContext } from '../../processes/UserProcess';
import { SHOP_ROUTE } from '../../shared/utils/routes';
import './Shop.css';

export function Shop() {
    // const { userStore } = useContext(userContext);
    // const { typesBarStore, brandsBarStore } = useContext(shopingContext);

    const navigate = useNavigate();

    // const tokenCheck = () => {
        
    // };

    // const signOut = () => {
    //     localStorage.removeItem('jwt');
    //     userStore.setIsAuth(false);
    //     navigate(SHOP_ROUTE);
    // };
    
    return (
        <div className="shop">
            <div className="shop__content-wrapper">
                <div className="shop__aside">
                    <TypeBar />
                </div>
                <main className="shop__main">
                    <BrandsBar />
                    <DeviceList/>
                </main>
            </div>
        </div>
    )
}