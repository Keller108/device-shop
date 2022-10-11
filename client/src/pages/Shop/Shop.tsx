import { useContext } from 'react';
import { Context } from '../..';
import DeviceStore, { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import './Shop.css';

export function Shop() {
    const { deviceStore } = useContext(Context);

    return (
        <div className="shop">
            <div className="shop__content-wrapper">
                <aside className="type-bar">
                    {deviceStore._types.map((item: DefaultEntityType) => <li className="type-bar__item">{item.name}</li> )}
                </aside>
            </div>
        </div>
    )
}