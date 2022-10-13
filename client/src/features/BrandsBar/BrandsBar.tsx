import { useContext, useEffect, useState } from 'react';
import { Context } from '../../app/App';
import { DefaultEntityType } from '../../entities/Device/store/DeviceStore';
import { getBrands } from './api/brandsApi';
import './BrandsBar.css';

export function BrandsBar() {
    const [brands, setBrands] = useState([]);
    const { deviceStore } = useContext(Context);

    useEffect(() => {
        getBrands()
            .then((result) => {
                setBrands(result);
            })
            .catch(err => console.log(err));
    }, [])
    
    return (
        <ul className="brands-bar">
            {brands.map((item: DefaultEntityType) => <li 
                key={item.id}
                className="brands-bar__item">{item.name}</li>)}
        </ul>
    )
}