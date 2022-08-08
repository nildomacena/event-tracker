import React from 'react';
import { useRecoilValue } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';
import useListaDeEventos from '../../state/hooks/useListaDeEventos';
import { eventosFiltradosState } from '../../state/seletores';
import Evento from '../Evento';
import Filtro from '../Filtro';
import style from './ListaDeEventos.module.scss';

const ListaDeEventos: React.FC = () => {

  const eventosFiltrados = useListaDeEventos();
  /*  const filtro = useRecoilValue<IFiltroDeEventos>(filtroDeEventos);
 
  const eventosFiltrados = eventos.filter(e => !filtro.data ? true : e.inicio.toISOString().slice(0, 10) === filtro.data.toISOString().slice(0, 10)) */
  //const eventosFiltrados = eventosFiltradosState;
  return (<section>
    <Filtro />
    <div className={style.Scroll}>
      {eventosFiltrados.map(evento => (
        <Evento evento={evento} key={evento.id} />
      ))}
    </div>
  </section>)
}

export default ListaDeEventos