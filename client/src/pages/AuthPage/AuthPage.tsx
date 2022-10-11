import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { AuthForm } from '../../features/AuthForm';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../../shared/utils/const';
import './AuthPage.css';

export function AuthPage() {
    const [isRegistered, setIsRegistered] = useState(false);

    let location = useLocation();

    useEffect(() => {
        location.pathname === LOGIN_ROUTE && setIsRegistered(true);
        location.pathname === REGISTRATION_ROUTE && setIsRegistered(false);
    }, [location.pathname])

    return (
        <div className="auth-page">
            {isRegistered ? <AuthForm type="auth" isReg={isRegistered} />
                : <AuthForm type="register" isReg={isRegistered} />}
        </div>
    )
}