import { useRecoilState, useSetRecoilState } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { obterId } from "../../util";
import { listaDeEventosState } from "../atom";

export default function useAdicionarEvento() {
    const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);

    return (evento: IEvento) => {
        if (evento.inicio.getTime() < new Date().getTime()) throw 'data-inicio-invalida';
        evento.id = obterId();
        return setListaDeEventos(listaAntiga => [...listaAntiga, evento])
    }
}