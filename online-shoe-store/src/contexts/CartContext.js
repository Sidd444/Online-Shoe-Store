import { createContext,useContext } from "react";

export const ShoesContext = createContext({
    arr:[],
    total:0
})

export const ShoesProvider = ShoesContext.Provider

export default function useShoes(){
    return useContext(ShoesContext)
}