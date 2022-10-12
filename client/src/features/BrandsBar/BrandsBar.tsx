import { useContext } from 'react';
import { Context } from '../../app/App';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import './BrandsBar.css';

export function BrandsBar() {
    const { deviceStore } = useContext(Context);
    
    return (
        <ul className="brands-bar">
            {deviceStore.brands.map((item: DefaultEntityType) => <li className="brands-bar__item">{item.name}</li>)}
        </ul>
    )
}