import { observer } from 'mobx-react-lite';
import { AppStore } from '../../app/store/AppStore';
import './AdminPanel.css';

type AdminPanelProps = {
    store: AppStore;
}

export const AdminPanel = observer(({ store }: AdminPanelProps) => {
    return (
        <div className="admin-panel">
            <h1 className="admin-panel__heading">
                Выберите действие
            </h1>
            <button onClick={() => store.openModal()} className="admin-panel__add-btn">
                Добавить тип
            </button>
            <button className="admin-panel__add-btn">
                Добавить бренд
            </button>
            <button className="admin-panel__add-btn">
                Добавить устройство
            </button>
        </div>
    )
});