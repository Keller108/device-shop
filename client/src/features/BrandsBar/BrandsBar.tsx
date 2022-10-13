import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import { shopingContext } from '../../processes/ShopingProcess';
import './BrandsBar.css';

export const BrandsBar = observer(() => {
    const { brandsBarStore } = useContext(shopingContext);

    useEffect(() => {
        brandsBarStore.fetchBrands();
    }, [])

    return (
        <ul className="brands-bar">
            {brandsBarStore.brands?.map((item: DefaultEntityType) => <li
                onClick={() => brandsBarStore.setSelectedBrand(item)}
                key={item.name}
                className={brandsBarStore.selectedBrand === item
                    ? 'brands-bar__item brands-bar__item_active'
                        : 'brands-bar__item'}>
                    {item.name}
                </li>
            )}
        </ul>
    )
});