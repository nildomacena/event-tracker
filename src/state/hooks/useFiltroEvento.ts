import { useRecoilValue } from "recoil";
import { filtroDeEventos } from "../atom";

export default function useFiltroEvento() {
    return useRecoilValue(filtroDeEventos);
}