import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { shopingContext } from '../../../processes/ShopingProcess';
import { DeviceEntityType } from '../store/DeviceStore';
import { DeviceItem } from './DeviceItem';
import './DeviceList.css';

export const DeviceList = observer(() => {
    let deviceConfig: DeviceEntityType | {} = {};
    const { deviceStore } = useContext(shopingContext);

    useEffect(() => {
        deviceStore.getDevices();
    }, [])

    useEffect(() => {
        console.log('Девайсы с бекенда:', deviceStore.devices)
    }, [deviceStore.devices])

    return (
        <ul className="device-list__devices">
            {deviceStore.devices.map((device: DeviceEntityType) => {
                let deviceConfig = {
                    id: device.id,
                    img: device.img,
                    name: device.name,
                    price: device.price
                };
                return <DeviceItem config={deviceConfig} />
            })}
        </ul>
    )
});