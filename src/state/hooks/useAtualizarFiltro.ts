import { useSetRecoilState } from "recoil"
import { IFiltroDeEventos } from "../../interfaces/IFiltroDeEventos"
import { filtroDeEventos } from "../atom"

export function useAtualizarFiltro() {
    const setFiltro = useSetRecoilState<IFiltroDeEventos>(filtroDeEventos);
    return (filtro: IFiltroDeEventos) => {
        return setFiltro(filtro);
    }
}