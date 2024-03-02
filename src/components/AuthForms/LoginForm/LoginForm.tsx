import css from './LoginForm.module.css';
import {authService} from "../../../services";
import {token} from "../../../constants";
import {useNavigate} from "react-router-dom";

const LoginForm = () => {
    console.log('render LoginForm');

    const navigate = useNavigate();

    const clickHandler = () => {
        authService.setToken(token);
        navigate('/movies');
    }

    return (
        <div className={css.loginForm}>
            <h2>LoginForm</h2>
            <p>This page is under construction</p>

            <button onClick={clickHandler}>Sign in</button>
        </div>
    );
};

export {LoginForm};