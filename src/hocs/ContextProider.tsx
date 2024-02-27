import {createContext} from "node:vm";
import {FC, PropsWithChildren, useState} from "react";

// interface IContextValue {
//     theme: sting,
//     changeTheme: () => void
// }

interface IProps extends PropsWithChildren {

}

const Context = createContext(undefined);

const ContextProvider: FC<IProps> = ({children}) => {
    const [theme, setTheme] = useState('dark');

    const changeTheme = () => setTheme(prev => prev === 'dark' ? 'dark' : 'light')

    return (
        <Context.Provider value={{theme, changeTheme}}>
                {children}
        </Context.Provider>
    );
};

export {Context, ContextProvider}