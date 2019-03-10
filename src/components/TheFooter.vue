<template>
    <footer class="footer text-center py-5 px-3 text-white bg-secondary">
        <div class="container">
            Desenvolvido com muito <span class="fas fa-heart heart"></span>
            <br>
            &copy; 2019, <a href="https://fabiopichler.net/" class="text-white font-weight-bold" target="_blank">Fábio Pichler</a>, Todos os direitos reservados
        </div>
    </footer>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheFooter extends Vue {
}
</script>

<style lang="scss">
    .footer {
       .heart {
           color: #faa;
           font-size: 1.2em;
       }
    }
</style>
