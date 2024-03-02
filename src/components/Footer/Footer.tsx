import {useEffect, useState} from "react";

import css from './Footer.module.css'
import {authService} from "../../services";

const Footer = () => {
    console.log('render Footer');

    const localToken = authService.getToken();

    const [auth, setAuth] = useState(!!localToken);

    useEffect(() => {
        setAuth(!!localToken);
    }, [localToken]);

    useEffect(() => {
        console.log(auth)
    }, [auth]);

    return (
        <footer className={css.footer}>
            <h2>Footer</h2>

            {/*{auth && <p>You`re logged in</p>}*/}
        </footer>
    );
}

export {Footer};