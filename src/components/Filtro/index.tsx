import React, { useState } from 'react';
import { useSetRecoilState } from 'recoil';
import { IFiltroDeEventos } from '../../interfaces/IFiltroDeEventos';
import { filtroDeEventos } from '../../state/atom';
import { useAtualizarFiltro } from '../../state/hooks/useAtualizarFiltro';
import useFiltroEvento from '../../state/hooks/useFiltroEvento';
import style from './Filtro.module.scss';

const Filtro: React.FC = () => {

  const [data, setData] = useState('')
  const [tarefaCompletada, setTarefaCompletada] = useState(false);

  const setFiltroDeEvento = useAtualizarFiltro();
  const filtroAtual = useFiltroEvento();

  const submeterForm = (evento: React.FormEvent<HTMLFormElement>) => {
    evento.preventDefault()
    const filtroDeEventos: IFiltroDeEventos = {}

    if (data) {
      filtroDeEventos.data = new Date(data);
    }
    else {
      filtroDeEventos.data = null;
    }
    filtroDeEventos.completada = tarefaCompletada;
    setFiltroDeEvento(filtroDeEventos);
  }

  function toggleCheckbox() {
    setTarefaCompletada(!tarefaCompletada);
  /*   const novoFiltro = { ...filtroAtual };
    novoFiltro.completada = tarefaCompletada;

    setFiltroDeEvento(novoFiltro); */
  }

  return (<form className={style.Filtro} onSubmit={submeterForm}>
    <h3 className={style.titulo}>Filtrar por data</h3>
    <input
      type="date"
      name="data"
      className={style.input}
      onChange={evento => setData(evento.target.value)}
      placeholder="Por data"
      value={data} />
    <div>
      <input checked={tarefaCompletada} onChange={toggleCheckbox} type='checkbox' id='completado' />
      <label htmlFor="completado">Tarefa completada?</label>
    </div>
    <button className={style.botao}>
      Filtrar
    </button>

  </form>)
}

export default Filtro