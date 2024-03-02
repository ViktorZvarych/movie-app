import css from './Footer.module.css'

const Footer = () => {
    console.log('render Footer');

    return (
        <footer className={css.footer}>
            <h2>Footer</h2>
        </footer>
    );
}

export {Footer};