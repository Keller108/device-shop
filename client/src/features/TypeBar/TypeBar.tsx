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
                {typesBarStore.types?.map((type: DefaultEntityType) => <li
                    onClick={() => typesBarStore.setSelectedType(type)}
                    className={typesBarStore.selectedType === type
                            ? 'type-bar__list-item type-bar__list-item_active'
                                : 'type-bar__list-item'}
                    key={type.name}>
                        <p className={"type-bar__list-item-text"}>{type.name}</p>
                    </li>)}
            </ul>
        </aside>
    )
});