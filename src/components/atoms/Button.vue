<template>
    <div>
        <button class="button" @click="mudarEstadoBotao">
            {{ textoBotao }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
    name: "Button",
    data() {
        return {
            clicado: false
        }
    },
    emits: ['aoClicar'],
    props: {
        textoBotao: {
            type: String
        }
    },
    methods: {
        mudarEstadoBotao() {
            this.clicado = !this.clicado
            this.$emit('aoClicar', this.clicado)
        }
    }
})
</script>

