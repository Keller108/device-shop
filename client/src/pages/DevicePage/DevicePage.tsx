import './DevicePage.css';
import IMG_TEMPLATE from '../../shared/assets/img/picture-template.jpg';
import { useContext, useEffect, useState } from 'react';
import { shopingContext } from '../../processes/ShopingProcess';
import { toJS } from 'mobx';
import { observer } from 'mobx-react-lite';

export const DevicePage = observer(() => {
    const { deviceStore } = useContext(shopingContext);
    const [device, setDevice] = useState(deviceStore.selectedDevice);

    useEffect(() => {
        setDevice(deviceStore.selectedDevice);
    }, [])

    return (
        <div className="device-page">
            <main className="device-page__main">
                <div className="device-page__preview-block">
                    <img src={IMG_TEMPLATE} alt="" className="device-page__preview-img" />
                </div>
                <div className="device-page__details-block">
                    {//@ts-ignore
                        <h2 className="device-page__title">{device.name}</h2>}
                    {//@ts-ignore
                        <h3 className="device-page__price">{device.price}</h3>
                    }
                    <div className="device-page__info-block">
                        <p className="device-page__text">
                            Цвет:
                        </p>
                        <p className="device-page__text">
                            Вес:
                        </p>
                    </div>
                    <div className="device-page__action-block">
                        <button className="device-page__add-to-cart-btn">
                            Добавить в корзину
                        </button>
                    </div>
                </div>
            </main>
        </div>
    )
});