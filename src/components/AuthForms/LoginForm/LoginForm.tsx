import css from './LoginForm.module.css';

const LoginForm = () => {
    console.log('render LoginForm');

    return (
        <div className={css.loginForm}>
            <h2>LoginForm</h2>
        </div>
    );
};

export {LoginForm};