<template>
    <footer class="footer mb-2 py-5 px-3 text-center text-white bg-secondary">
        Desenvolvido com muito <span class="fas fa-heart heart"></span>
        <br>
        &copy; 2019, <a href="https://fabiopichler.net/" class="text-white font-weight-bold" target="_blank">Fábio Pichler</a>, Todos os direitos reservados
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheFooter extends Vue {
}
</script>

<style lang="scss">
    @import '@/assets/sass/_variables.scss';

    .footer {
        box-shadow: 0 0 2px 1px $box-shadow-color;
        border: 1px solid rgba(0,0,0,0.1);

        .heart {
            color: #faa;
            font-size: 1.2em;
        }
    }
</style>
