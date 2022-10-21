import './AdminPanel.css';

export function AdminPanel() {
    return (
        <div className="admin-panel">
            <h1 className="admin-panel__heading">
                Выберите действие
            </h1>
            <button onClick={() => 1} className="admin-panel__add-btn">
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
}