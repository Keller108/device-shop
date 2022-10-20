import './AdminPanel.css';

export function AdminPanel() {
    return (
        <div className="admin-panel">
            <div className="admin-panel__main">
                <button className="admin-panel__add-btn">
                    Добавить тип
                </button>
                <button className="admin-panel__add-btn">
                    Добавить бренд
                </button>
                <button className="admin-panel__add-btn">
                    Добавить устройство
                </button>
            </div>
        </div>
    )
}