import { toJS } from 'mobx';
import { useContext, useEffect } from 'react';
import { DeviceList } from '../../entities/Device/ui/DeviceList/DeviceList';
import { BrandsBar } from '../../features/BrandsBar';
import { TypeBar } from '../../features/TypeBar';
import { shopingContext } from '../../processes/ShopingProcess';
import './Shop.css';

export function Shop() {
    // const { typesBarStore, brandsBarStore } = useContext(shopingContext);
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