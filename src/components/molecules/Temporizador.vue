<template>
  <div class="is-flex is-align-items-center is-justify-content-space-between">
    <Cronometro :tempoEmSegundos="tempoEmSegundos" />
    <TempButton @clicado="iniciar" icone="fas fa-play" texto="play" :desabilitado="cronometroRodando"></TempButton>
    <TempButton @clicado="finalizar" icone="fas fa-stop" texto="stop" :desabilitado="!cronometroRodando"></TempButton>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Cronometro from "../atoms/Cronometro.vue";
import TempButton from "../atoms/TempButton.vue";

export default defineComponent({
  components: {
    Cronometro,
    TempButton
  },
  name: "Temporizador",
  emits: ['aoTemporizadorFinalizado'],
  data() {
    return {
      tempoEmSegundos: 0,
      cronometro: 0,
      cronometroRodando: false,
    };
  },
  methods: {
    iniciar() {
      this.cronometroRodando = true;
      this.cronometro = setInterval(() => {
        this.tempoEmSegundos = this.tempoEmSegundos + 1;
      }, 1000);
    },
    finalizar() {
      this.cronometroRodando = false;
      clearTimeout(this.cronometro);
      this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
      this.tempoEmSegundos = 0;
    },
  },
});
</script>