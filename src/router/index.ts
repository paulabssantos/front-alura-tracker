import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router';
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import FormularioProjetos from '../views/FormularioProjetos.vue'
import ListaProjetos from '../views/ListaProjetos.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Tarefas',
    component: Tarefas
  },
  {
    path: '/projetos',
    component: Projetos,
    children: [
      {
        path: '',
        name: 'Projeto',
        component: ListaProjetos
      },
      {
        path: 'novo',
        name: 'Novo Projeto',
        component: FormularioProjetos
      },
      {
        path: ':id',
        name: 'Editar Projeto',
        component: FormularioProjetos,
        props: true
      },
    ]
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
