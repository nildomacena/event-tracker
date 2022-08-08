import { selector } from "recoil";
import { IEvento } from "../../interfaces/IEvento";
import { filtroDeEventos, listaDeEventosState } from "../atom";

export const eventosFiltradosState = selector({
    key: 'eventosFiltradosState',
    get: ({ get }) => {
        const filtro = get(filtroDeEventos);
        const eventos = get(listaDeEventosState);
        const eventosFiltrados = eventos.filter(e => (!filtro.data ? true : e.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10)) && filtro.completada == null ? true : filtro.completada === e.completo)
        console.log(filtro);
        return eventosFiltrados;
    }
});

export const eventosAsync = selector({
    key: 'eventosAsync',
    get: async () => {
        const respostaHttp = await fetch('http://localhost:8080/eventos');
        const eventosJson: IEvento[] = await respostaHttp.json();
        return eventosJson.map(evento => ({
            ...evento,
            inicio: new Date(evento.inicio),
            fim: new Date(evento.fim),
        }));
    }
})