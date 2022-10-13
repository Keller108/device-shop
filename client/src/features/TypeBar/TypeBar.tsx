import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import { shopingContext } from '../../processes/ShopingProcess';
import './TypeBar.css';

export const TypeBar = observer(() => {
    const { typesBarStore } = useContext(shopingContext);

    useEffect(() => {
        typesBarStore.fetchTypes();
    }, [])

    return (
        <aside className="type-bar">
            <h2 className="type-bar__title">Категории:</h2>
            <ul className="type-bar__list">
                {typesBarStore.types?.map((item: DefaultEntityType) => <li
                    onClick={() => typesBarStore.setSelectedType(item)}
                    className={typesBarStore.selectedType === item
                            ? 'type-bar__list-item type-bar__list-item_active'
                                : 'type-bar__list-item'}
                    key={item.name}>
                        <p className={"type-bar__list-item-text"}>{item.name}</p>
                    </li>)}
            </ul>
        </aside>
    )
});