import React, {createContext, useContext} from "react";
import type {FC} from "react";

export type ToggleContextType = {
    fontFlag : boolean,
    font : ()=>void;
    fontColor : boolean;
    colorChange : ()=>void;
};

const defaultContext = {
    fontFlag : false,
    font : ()=>{},
    fontColor : false,
    colorChange : ()=>{}
};

const ToggleContext = createContext<ToggleContextType>(defaultContext);

type ToggleContextProperties = {
    fontFlag : boolean
    font : ()=>void
    fontColor : boolean
    colorChange : ()=>void;
};

export const ToggleThemeProvider:FC<ToggleContextProperties> = 
({children, fontFlag, font, fontColor, colorChange})=>{
    const value = { fontFlag, font, fontColor, colorChange};
    return <ToggleContext.Provider value = {value}>{children}</ToggleContext.Provider>
}

export const useToggleThemeContext = () => {
    const { fontFlag, font, fontColor, colorChange} = useContext(ToggleContext);
    return useContext(ToggleContext);
}