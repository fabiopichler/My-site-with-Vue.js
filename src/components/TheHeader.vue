<template>
    <header class="header mb-2 p-0">
        <div class="h-100">
            <div class="header-bg background-cover">
                <div class="d-flex flex-column justify-content-center h-100 ml-3 ml-sm-5">
                    <h1 class="site-title text-white">
                        <span class="d-inline-block text-right">
                            Fábio Pichler<br>
                            <span class="subtitle">» and the technology</span>
                        </span>
                    </h1>
                </div>
            </div>
        </div>

        <div class="bg-white px-3">
            <Navigation :items="menu" />
        </div>
    </header>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

import Navigation from "@/components/Navigation.vue";

@Component({
    components: {
        Navigation
    }
})
export default class TheHeader extends Vue {
    menu: Object[] = [
        {
            to: '/',
            text: 'Início',
            icon: 'fas fa-home'
        }, {
            to: '/portfolio',
            text: 'Portfólio',
            icon: 'fas fa-portrait'
        }, {
            to: '/contato',
            text: 'Contato',
            icon: 'fas fa-file-contract'
        }, {
            to: '/sobre',
            text: 'Sobre',
            icon: 'fas fa-info-circle'
        }
    ]
}
</script>

<style lang="scss">
    @import '@/assets/sass/_variables.scss';

    .header {
        background: #010101;
        box-shadow: 0 1px 2px 1px $box-shadow-color;
        
        .header-bg {
            width: 100%;
            height: 220px;
            background: url('../assets/header.jpg') no-repeat right;
            background-size: auto 100%;

            .site-title {
                font-size: 2rem;
                line-height: 1.4rem;
                text-shadow: 0px 0px 15px #fff;

                .subtitle {
                    font-size: .5em;
                }
            }

            @media screen and (min-width: 768px) {
                height: 300px;

                .site-title {
                    font-size: 3rem;
                    line-height: 2rem;
                }
            }
        }
    }
</style>
