import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import { shopingContext } from '../../processes/ShopingProcess';
import './BrandsBar.css';

export const BrandsBar = observer(() => {
    const { brandsBarStore, deviceStore, typesBarStore } = useContext(shopingContext);

    useEffect(() => {
        brandsBarStore.fetchBrands();
    }, [])

    useEffect(() => {
        //@ts-ignore
        deviceStore.getDevices(typesBarStore.selectedType.id ?? undefined, brandsBarStore.selectedBrand.id ?? undefined)
    }, [brandsBarStore.selectedBrand])

    return (
        <ul className="brands-bar">
            {brandsBarStore.brands?.map((brand: DefaultEntityType) => <li
                onClick={() => brandsBarStore.setSelectedBrand(brand)}
                key={brand.name}
                className={brandsBarStore.selectedBrand === brand
                    ? 'brands-bar__item brands-bar__item_active'
                        : 'brands-bar__item'}>
                    {brand.name}
                </li>
            )}
        </ul>
    )
});