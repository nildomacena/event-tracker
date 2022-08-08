import { useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { listaDeEventosState } from "../atom";

export default function useAtualizarEvento() {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
    return (evento: IEvento) => {
        return setListaDeEventos(listaAntiga => listaAntiga.map(e => e.id === evento.id ? evento : e));
    }

}