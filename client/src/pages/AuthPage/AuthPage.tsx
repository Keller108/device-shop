import { useLocation } from 'react-router-dom';
import { AuthForm } from '../../features/AuthForm';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../shared/utils/const';
import './AuthPage.css';

export function AuthPage() {
    let location = useLocation();
    let formType = location.pathname === LOGIN_ROUTE ? "auth"
        : REGISTRATION_ROUTE ? "register" : 'auth';

    return (
        <div className="auth-page">
            <AuthForm type={formType} />
        </div>
    )
}