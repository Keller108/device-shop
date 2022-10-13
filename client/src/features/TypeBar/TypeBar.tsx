import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';
import { useContext, useEffect, useState } from 'react';
import { Context } from '../../app/App';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import { getTypes } from './api/typesApi';
import './TypeBar.css';

export const TypeBar = observer(() => {
    const [types, setTypes] = useState([]);
    const { deviceStore } = useContext(Context);
    let selectedType = toJS(deviceStore.selectedType.name);

    useEffect(() => {
        getTypes()
            .then((result) => {
                setTypes(result);
            })
            .catch(err => console.log(err));
    }, [])

    return (
        <aside className="type-bar">
            <h2 className="type-bar__title">Категории:</h2>
            <ul className="type-bar__list">
                {types?.map((item: DefaultEntityType) => <li
                    onClick={() => {
                        deviceStore.setSelectedType(item);
                    }}
                    className={selectedType === item.name
                            ? 'type-bar__list-item type-bar__list-item_active'
                                : 'type-bar__list-item'}
                    key={item.name}>
                        <p className={"type-bar__list-item-text"}>{item.name}</p>
                    </li>)}
            </ul>
        </aside>
    )
})