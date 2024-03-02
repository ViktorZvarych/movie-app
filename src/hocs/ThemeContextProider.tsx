import {createContext, FC, PropsWithChildren, useState} from "react";

import {IThemeContext} from "../interfaces";

interface IProps extends PropsWithChildren {
}

const ThemeContext = createContext<IThemeContext | null>(null);

const ThemeContextProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => {
        setTheme(prev => prev === 'dark' ? 'light' : 'dark');
        console.log(theme);
    }

    return (
        <ThemeContext.Provider value={{theme, changeTheme}}>
                {children}
        </ThemeContext.Provider>
    );
};

export {ThemeContext, ThemeContextProvider}