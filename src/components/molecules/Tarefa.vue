<template>
    <Box>
        <div class="columns">
            <div class="column is-7">
                {{ tarefa.descricao || 'Tarefa sem descrição' }}
            </div>
            <div class="column">
                <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos"></Cronometro>
            </div>
        </div>
    </Box>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from '../atoms/Cronometro.vue';
import Box from '../quarks/Box.vue';
import ITarefa from '@/interfaces/ITarefa';

export default defineComponent({
    name: "Tarefa",
    components: {
        Cronometro,
        Box
    },
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    }
})
</script>