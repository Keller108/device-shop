import { observer } from 'mobx-react-lite';
import { useContext, useEffect } from 'react';
import { shopingContext } from '../../../../processes/ShopingProcess';
import { DefaultEntityType, DeviceEntityType } from '../../store/DeviceStore';
import { DeviceItem } from '../DeviceItem/DeviceItem';
import './DeviceList.css';
import { DeviceTempate } from '../DeviceTempate/DeviceTempate';

type DeviceListProps = {
    type: any;
    brand: any;
}

export const DeviceList = observer((type: any, brand: any) => {
    const { deviceStore } = useContext(shopingContext);

    function fetchDevices(typeId?: number, brandId?: number) {
        // if (typeId && brandId) {
        //     deviceStore.getDevices(typeId, brandId);
        // }
        // if (typeId && !brandId) {
        //     deviceStore.getDevices(typeId);
        // }
        // if (!typeId && brandId) {
        //     deviceStore.getDevices(brandId);
        // }
        // if (!typeId && !brandId) {
        //     deviceStore.getDevices();
        // }

        deviceStore.getDevices(typeId, brandId);
    }

    fetchDevices(type.id, brand.id);

    // useEffect(() => {
    //     fetchDevices();
    // }, [])

    return (
        <ul className="device-list">
            { deviceStore.devices ? deviceStore.devices.map((device: DeviceEntityType) => {
                let deviceConfig = {
                    id: device.id,
                    img: device.img,
                    name: device.name,
                    price: device.price
                };
                return <DeviceItem key={device.name} config={deviceConfig} />
            }) :  <DeviceTempate />}
        </ul>
    )
});