import { useContext } from 'react';
import { AdminPanel } from '../../features/AdminPanel';
import { appContext } from '../../processes/AppProcess';
import { shopingContext } from '../../processes/ShopingProcess';
import { CreateModal } from '../../shared/ui/CreateModal';
import './AdminPanelPage.css';

export function AdminPanelPage() {
    const { appStore } = useContext(appContext);
    const { typesBarStore } = useContext(shopingContext);
    
    const createType = (type: string) => {
        typesBarStore.createType(type);
    };

    return (
        <div className="admin-panel-page">
            <AdminPanel store={appStore} />
            <CreateModal store={appStore} action={createType} />
        </div>
    )
}