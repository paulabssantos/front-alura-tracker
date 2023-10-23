<template>
    <div>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>
                <input type="text" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">
            </div>
            <div class="field">
                <Button :textoBotao="'Salvar'"></Button>
            </div>
        </form>
    </div>
</template>

<script lang="ts">
import { useStore } from "../../store";
import { computed, defineComponent } from "vue"
import Button from '../atoms/Button.vue'
import { ADICIONA_PROJETO, EDITA_PROJETO } from "@/store/mutation-type";

export default defineComponent({
    name: 'FormProjetos',
    components: {
        Button
    },
    props: {
        id: {
            type: String
        }
    },
    data() {
        return {
            nomeDoProjeto: '',
        }
    },
    methods: {
        salvar() {
            if (!this.id) {
                this.store.commit(ADICIONA_PROJETO, this.nomeDoProjeto)
            } else {
                this.store.commit(EDITA_PROJETO, { id: this.id, nome: this.nomeDoProjeto })
            }
            this.nomeDoProjeto = ''
            this.$router.push('/projetos')
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projetos.find(projeto => projeto.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
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
