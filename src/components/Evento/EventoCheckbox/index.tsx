import React from 'react';
import { useSetRecoilState } from 'recoil';
import { IEvento } from '../../../interfaces/IEvento';
import { listaDeEventosState } from '../../../state/atom';
import useAtualizarEvento from '../../../state/hooks/useAtualizarEvento';

const EventoCheckbox: React.FC<{ evento: IEvento }> = ({ evento }) => {

  const setListaDeEventos = useSetRecoilState<IEvento[]>(listaDeEventosState);
  const atualizarEvento = useAtualizarEvento();

  const estilos = [
    'far',
    'fa-2x',
    evento.completo ? 'fa-check-square' : 'fa-square'
  ]

  const aoAlterarStatus = () => {
    const eventoAlterado = { ...evento };
    eventoAlterado.completo = !eventoAlterado.completo;
    atualizarEvento(eventoAlterado);
  }

  return (<i className={estilos.join(' ')} onClick={() => aoAlterarStatus()}></i>)
}

export default EventoCheckbox