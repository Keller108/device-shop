import './DeviceItem.css';
import { useNavigate } from 'react-router-dom';
import { DEVICE_ROUTE } from '../../../../shared/utils/routes';
import { DeviceEntityType } from '../../store/DeviceStore';
import { useContext } from 'react';
import { shopingContext } from '../../../../processes/ShopingProcess';

type DeviceItemProps = {
    config: {
        id: number,
        img: string,
        name: string,
        price: number,
        device: DeviceEntityType,
    }
}

export function DeviceItem({ config }: DeviceItemProps) {
    const { deviceStore } = useContext(shopingContext);
    const navigate = useNavigate();
    return (
        <li onClick={() => {
                deviceStore.setSelectedDevice(config.device);
                navigate(`${DEVICE_ROUTE}/${config.id}`);
            }} 
            className="device-item">
            <img src={process.env.REACT_APP_API_URL + config.img} alt={config.name} className="device-item__img"/>
            <div className="device-item__text-wrap">
                <p className="device-item__name">{config.name}</p>
                <h3 className="device-item__price">{config.price}</h3>
            </div>
        </li>
    )
}