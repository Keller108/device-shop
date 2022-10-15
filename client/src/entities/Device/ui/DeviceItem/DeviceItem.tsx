import './DeviceItem.css';
import IMG_TEMPLATE from '../../../../shared/assets/img/picture-template.jpg';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../../shared/utils/routes';

type DeviceItemProps = {
    config: {
        id: number,
        img: string,
        name: string,
        price: number
    }
}

export function DeviceItem({ config }: DeviceItemProps) {
    const navigate = useNavigate();
    return (
        <li onClick={() => navigate(`${DEVICE_ROUTE}/${config.id}`)} className="device-item">
            <img src={IMG_TEMPLATE} alt={config.name} className="device-item__img"/>
            <div className="device-item__text-wrap">
                <p className="device-item__name">{config.name}</p>
                <h3 className="device-item__price">{config.price}</h3>
            </div>
        </li>
    )
}