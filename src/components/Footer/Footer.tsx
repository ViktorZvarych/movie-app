import css from './Footer.module.css'
import {useNavigate} from "react-router-dom";
import {authService} from "../../services";
import {token} from "../../constants";
import {useEffect} from "react";

const Footer = () => {
    console.log('render Footer');

    const navigate = useNavigate();

    const token = authService.getToken();

    useEffect(() => {
        !token && navigate('/login');
    }, [navigate, token]);
    

    return (
        <footer className={css.footer}>
            <p><b>© Developed by Viktor Zvarych</b></p>
            <p><b>Visit my <span> </span>
                <a href="https://github.com/ViktorZvarych/" target="_blank" rel="noopener noreferrer">GitHub page</a>
            </b></p>
        </footer>
    );
}

export {Footer};