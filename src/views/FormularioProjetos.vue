<template>
    <section>
        <FormProjetos :id="id"></FormProjetos>
    </section>
</template>

<script lang="ts">
import { defineComponent } from "vue"
import FormProjetos from '../components/organisms/FormProjetos.vue'
export default defineComponent({
    name: 'FormularioProjetos',
    props: {
        id: {
            type: String,
        }
    },
    components: {
        FormProjetos
    }
})

</script>