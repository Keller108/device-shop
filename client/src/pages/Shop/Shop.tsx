import { useContext } from 'react';
import { Context } from '../../app/App';
import { DeviceEntityType } from '../../entities/Device/store/DeviceStore';
import { TypeBar } from '../../features/TypeBar';
import './Shop.css';

export function Shop() {
    const { deviceStore } = useContext(Context);

    return (
        <div className="shop">
            <div className="shop__content-wrapper">
                <div className="shop__aside">
                    <TypeBar />
                </div>
                <main className="shop__main">
                    <h1 className="shop__title">Samsung</h1>
                    <ul className="shop__devices">
                        {deviceStore._devices.map((device: DeviceEntityType) => <li 
                            className="shop__device-item">
                                <img src={device.img} alt={device.name} className="shop__device-img"/>
                                <div className="shop__device-text-wrap">
                                    <p className="shop__device-name">{device.name}</p>
                                    <h3 className="shop__device-price">{device.price}</h3>
                                </div>
                                
                            </li>)}
                    </ul>
                </main>
            </div>
        </div>
    )
}