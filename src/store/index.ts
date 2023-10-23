import IProjeto from "@/interfaces/IProjeto";
import { createStore, Store, useStore as vuexUseStore } from 'vuex';
import { InjectionKey } from 'vue'
import { ADICIONA_PROJETO, ADICIONA_TAREFA, EDITA_PROJETO, EXCLUIR_PROJETO } from "./mutation-type";
import ITarefa from "@/interfaces/ITarefa";

interface Estado {
  projetos: IProjeto[],
  tarefas: ITarefa[]
}

export const key: InjectionKey<Store<Estado>> = Symbol();

export default createStore<Estado>({
  state: {
    projetos: [],
    tarefas: []
  },
  getters: {
  },
  mutations: {
    [ADICIONA_PROJETO](state, nomeDoProjeto: string) {
      const projeto: IProjeto = {
        id: new Date().toISOString(),
        nome: nomeDoProjeto
      }

      state.projetos.push(projeto);
    },
    [EDITA_PROJETO](state, projeto: IProjeto) {
      const index = state.projetos.findIndex(proj => proj.id == projeto.id)
      state.projetos[index] = projeto
    },
    [EXCLUIR_PROJETO](state, id: string) {
      state.projetos = state.projetos.filter(projeto => projeto.id != id)
    },
    [ADICIONA_TAREFA](state, tarefa: ITarefa) {
      state.tarefas.push(tarefa)
    }
  },
  actions: {
  },
  modules: {
  },
});

export function useStore(): Store<Estado> {
  return vuexUseStore(key)
}
