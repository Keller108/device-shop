import { useContext } from 'react';
import { Context } from '../..';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import './TypeBar.css';

export function TypeBar() {
    const { deviceStore } = useContext(Context);
    return (
        <aside className="type-bar">
            <h2 className="type-bar__title">Категории:</h2>
            <ul className="type-bar__list">
                {deviceStore._types.map((item: DefaultEntityType) => <li className="type-bar__list-item"
                    key={item.name}>
                        <p className="type-bar__list-item-text">{item.name}</p>
                    </li>)}
            </ul>
        </aside>
    )
}