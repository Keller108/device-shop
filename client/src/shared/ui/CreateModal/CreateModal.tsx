import { observer } from 'mobx-react-lite';
import { useState } from 'react';
import { AppStore } from '../../../app/store/AppStore';
import './CreateModal.css';

type CreateModalProps = {
    store: AppStore;
    action: (type: string) => void;
}

export const CreateModal = observer(({ store, action }: CreateModalProps) => {
    const [value, setValue] = useState('');

    function createType() {
        action(value);
        store.closeModal();
    }

    return (
        <div className={store.modalIsOpen ? "create-modal create-modal_active" : "create-modal"}>
            <div className="create-modal__form-wrapper">
                <button onClick={() => store.closeModal()} className="create-modal__close-btn" />
                <h2 className="create-modal__title">Создать</h2>
                <input
                    onChange={(e) => setValue(e.target.value)}
                    value={value}
                    type="text"
                    className="create-modal__input"
                />
                <button onClick={createType} className="create-modal__submit-btn">
                    Создать
                </button>
            </div>
        </div>
    )
});