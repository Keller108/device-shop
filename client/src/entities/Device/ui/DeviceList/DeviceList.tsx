import { useContext, useEffect } from 'react';
import { shopingContext } from '../../../../processes/ShopingProcess';
import { DeviceEntityType } from '../../store/DeviceStore';
import { DeviceItem } from '../DeviceItem/DeviceItem';
import './DeviceList.css';
import { DeviceTempate } from '../DeviceTempate/DeviceTempate';
import { observer } from 'mobx-react-lite';

export const DeviceList = observer(() => {
    const { deviceStore, typesBarStore } = useContext(shopingContext);

    useEffect(() => {
        deviceStore.getDevices();
    }, [])

    useEffect(() => {
        //@ts-ignore
        deviceStore.getDevices(typesBarStore.selectedType?.id ?? undefined);
    }, [typesBarStore.selectedType])

    const selectDevice = (device: DeviceEntityType) => {
        deviceStore.setSelectedDevice(device);
    };

    return (
        <ul className="device-list">
            { deviceStore.devices ? deviceStore.devices.map((device: DeviceEntityType) => {
                    let deviceConfig = {
                        id: device.id,
                        img: device.img,
                        name: device.name,
                        price: device.price,
                        device: device
                    };
                    return <DeviceItem key={device.name} config={deviceConfig} />;
                }) : <DeviceTempate />
            }
        </ul>
    )
});