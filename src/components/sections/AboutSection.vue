<template>
    <base-section name="about" title="Sobre o Projeto" titleicon="fas fa-info-circle">
        <div class="media">
            <img src="../../assets/logo.png" class="align-self-center mr-3" alt="Vue.js logo" width="50" height="50">

            <div class="media-body">
                <p class="mb-0">
                    Desenvolvido com <a href="https://vuejs.org/" target="_blank">Vue.js</a>
                    <br>
                    » <a href="https://github.com/fabiopichler/My-site-with-Vue.js" target="_blank"><strong>Repositório no GitHub</strong></a>
                    <br>
                    » <a href="https://github.com/fabiopichler/My-basic-REST-API" target="_blank">API REST no GitHub</a> 
                </p>
            </div>
        </div>
        
        <hr>

        <p class="mb-0 mt-3 text-center">
            Vue.js • SASS • Bootstrap
            <br>
            TypeScript • HTML5 • CSS3
        </p>
    </base-section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BaseSection from './BaseSection.vue';

@Component({
    components: {
        BaseSection
    }
})
export default class AboutSection extends Vue {
}
</script>
