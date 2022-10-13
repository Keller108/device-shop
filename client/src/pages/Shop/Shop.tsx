import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { DeviceList } from '../../entities/Device/ui/DeviceList/DeviceList';
import { BrandsBar } from '../../features/BrandsBar';
import { TypeBar } from '../../features/TypeBar';
import { shopingContext } from '../../processes/ShopingProcess';
import './Shop.css';

export const Shop = observer(() => {
    const { typesBarStore, brandsBarStore } = useContext(shopingContext);
    return (
        <div className="shop">
            <div className="shop__content-wrapper">
                <div className="shop__aside">
                    <TypeBar />
                </div>
                <main className="shop__main">
                    <BrandsBar />
                    <DeviceList 
                        type={typesBarStore.selectedType}
                        brand={brandsBarStore.selectedBrand}
                    />    
                </main>
            </div>
        </div>
    )
});