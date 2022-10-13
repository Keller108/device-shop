import { DeviceEntityType } from '../store/DeviceStore';
import './DeviceItem.css';

export function DeviceItem(config: DeviceEntityType) {
    return (
        <li className="device-item">
            <img src={config.img} alt={config.name} className="device-item__img"/>
            <div className="device-item__text-wrap">
                <p className="device-item__name">{config.name}</p>
                <h3 className="device-item__price">{config.price}</h3>
            </div>
        </li>
    )
}