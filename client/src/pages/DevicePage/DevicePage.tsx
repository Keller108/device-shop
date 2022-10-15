import './DevicePage.css';
import IMG_TEMPLATE from '../../shared/assets/img/picture-template.jpg';

export function DevicePage() {
    return (
        <div className="device-page">
            <main className="device-page__main">
                <div className="device-page__preview-block">
                    <img src={IMG_TEMPLATE} alt="" className="device-page__preview-img" />
                </div>
                <div className="device-page__details-block">
                    <h2 className="device-page__title">Заголовок</h2>
                    <h3 className="device-page__price">Цена</h3>
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
}