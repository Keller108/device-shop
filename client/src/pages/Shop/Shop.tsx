import { DeviceList } from '../../entities/Device/ui/DeviceList';
import { BrandsBar } from '../../features/BrandsBar';
import { TypeBar } from '../../features/TypeBar';
import './Shop.css';

export function Shop() {
    return (
        <div className="shop">
            <div className="shop__content-wrapper">
                <div className="shop__aside">
                    <TypeBar />
                </div>
                <main className="shop__main">
                    <BrandsBar />
                    <DeviceList />    
                </main>
            </div>
        </div>
    )
}