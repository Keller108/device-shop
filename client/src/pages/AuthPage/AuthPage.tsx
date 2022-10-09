import './AuthPage.css';

export function AuthPage() {
    return (
        <div className="auth-page">
            <div className="auth-page__auth-container">
                <h2 className="auth-page__form-title">Еще не зарегистрированы?</h2>
                <h3 className="auth-page__form-title">Регистрация</h3>
                <form className="auth-page__form">
                    {/* <label htmlFor="email" className="auth-page__input-label"></label> */}
                    <input type="text" className="auth-page__input" name="email"/>
                    <input type="text" className="auth-page__input" name="password"/>
                </form>
            </div>
        </div>
    )
}