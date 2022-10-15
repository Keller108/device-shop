import { useContext, useEffect } from 'react';
import { shopingContext } from '../../../../processes/ShopingProcess';
import { DefaultEntityType, DeviceEntityType } from '../../store/DeviceStore';
import { DeviceItem } from '../DeviceItem/DeviceItem';
import './DeviceList.css';
import { DeviceTempate } from '../DeviceTempate/DeviceTempate';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

type DeviceListProps = {
    type: DefaultEntityType;
    brand: DefaultEntityType;
}

export const DeviceList = observer(() => {
    const { deviceStore, typesBarStore } = useContext(shopingContext);

    useEffect(() => {
        deviceStore.getDevices();
        console.log('devices', toJS(deviceStore.devices));
    }, [])

    useEffect(() => {
        console.log('type was chenged', toJS(typesBarStore.selectedType));
        //@ts-ignore
        deviceStore.getDevices(typesBarStore.selectedType?.id ?? undefined);
    }, [typesBarStore.selectedType])

    useEffect(() => {
        console.log('devices were chenged', toJS(deviceStore.devices));
    }, [deviceStore.devices])

    // useEffect(() => {
    //     deviceStore.getDevices(type.id, brand.id);
    //     console.log('Был изменен тип');
    //     console.log('selectedType', toJS(deviceStore.selectedType));
    // }, [deviceStore.selectedType])

    return (
        <ul className="device-list">
            { deviceStore.devices ? deviceStore.devices.map((device: DeviceEntityType) => {
                    let deviceConfig = {
                        id: device.id,
                        img: device.img,
                        name: device.name,
                        price: device.price
                    };
                    return <DeviceItem key={device.name} config={deviceConfig} />;
                }) : <DeviceTempate />
            }
        </ul>
    )
});