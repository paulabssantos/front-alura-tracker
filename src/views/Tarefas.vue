<template>
    <Formulario></Formulario>
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
        <Box v-if="listaEstaVazia">
            Você não está muito produtivo hoje :(
        </Box>
    </div>
</template>
  
<script lang="ts">
import { computed, defineComponent } from 'vue';
import Formulario from '../components/organisms/Formulario.vue';
import Tarefa from '../components/molecules/Tarefa.vue';
import Box from '../components/quarks/Box.vue'
import { useStore } from '@/store';

export default defineComponent({
    name: 'Tarefas',
    components: {
        Formulario,
        Tarefa,
        Box
    },
    computed: {
        listaEstaVazia(): boolean {
            return this.tarefas.length === 0
        }
    },
    setup() {
        const store = useStore()
        return {
            store,
            tarefas: computed(() => store.state.tarefas)
        }
    }
});
</script>

  