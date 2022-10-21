import './CreateModal.css';

export function CreateModal() {
    return (
        <div className="create-modal">
            <div className="create-modal__form-wrapper">
                <h2 className="create-modal__title">Создать</h2>
                <input type="text" className="create-modal__input" />
                <button className="create-modal__submit-btn">
                    Создать
                </button>
            </div>
        </div>
    )
}