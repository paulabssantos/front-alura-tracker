<template>
    <div>
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="projeto in projetos" :key="projeto.id">
                    <td>
                        {{ projeto.id }}
                    </td>
                    <td>{{ projeto.nome }}</td>
                    <td>
                        <router-link :to="`projetos/${projeto.id}`" class="button">
                            <span class="icon is-small">
                                <i class="fas fa-pencil-alt"></i>
                            </span>
                        </router-link>
                        <button class="button ml-2 is-danger" @click="excluir(projeto.id)">
                            <span class="icon is-small">
                                <i class="fas fa-trash"></i>
                            </span>
                        </button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script lang="ts">
import { useStore } from "@/store";
import { EXCLUIR_PROJETO } from "@/store/mutation-type";
import { computed, defineComponent } from "vue";

export default defineComponent({
    name: 'TableProjetos',
    methods: {
        excluir(id: string) {
            this.store.commit(EXCLUIR_PROJETO, id)
        }
    },
    setup() {
        const store = useStore()

        return {
            store,
            projetos: computed(() => store.state.projetos)
        }
    }
})
</script>