<template>
    <section>
        <router-link to="projetos/novo" class="button">
            <span class="icon is-small">
                <i class="fas fa-plus"></i>
            </span>
            <span>Novo Projeto</span>
        </router-link>
        <TableProjetos></TableProjetos>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import TableProjetos from '../components/organisms/TableProjetos.vue'

export default defineComponent({
    name: 'ListaProjetos',
    components: {
        TableProjetos,
    }
})

</script>