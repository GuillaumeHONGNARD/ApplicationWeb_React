
import {create} from "zustand";

interface InterfaceStore{
    dateDeDebut:string,
    dateDeFin:string,
    setDateDebut:(newDateDebut:string)=>void,
    setDateFin: (newDateFin: string)=>void
}



export const useAppStore = create<InterfaceStore>(set=>({
    dateDeDebut:"",
    dateDeFin:"",
    setDateDebut:(date:string)=>set({dateDeDebut:date}),
    setDateFin:(date:string)=>set({dateDeFin:date})
}))

