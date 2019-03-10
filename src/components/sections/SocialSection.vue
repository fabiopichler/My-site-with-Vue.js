<template>
    <base-section name="social" title="Redes Sociais" titleicon="fas fa-users">
        <div class="d-flex justify-content-center">
            <span v-for="(item, index) in list" :key="index" class="mx-2">
                <a :href="item.url" :title="item.title" target="_blank">
                    <span :class="item.icon"></span>
                </a>
            </span>
        </div>
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
export default class SocialSection extends Vue {
    list: Object[] = [
        {
            title: 'Perfil no Facebook',
            url: 'https://www.facebook.com/FabioPichler.vue',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Página no Facebook',
            url: 'https://www.facebook.com/fabiopichler.net',
            icon: 'fab fa-facebook-square facebook'
        }, {
            title: 'Perfil no GitHub',
            url: 'https://github.com/fabiopichler',
            icon: 'fab fa-github github'
        }, {
            title: 'Perfil no  LinkedIn',
            url: 'https://www.linkedin.com/in/fabio-pichler/',
            icon: 'fab fa-linkedin linkedin'
        }
    ];
}
</script>

<style lang="scss">
    .social {
        font-size: 2rem;

        .facebook {
            color: #4267b2;

            &:hover {
                color: #6287d2;
            }
        }

        .github {
            color: #444;

            &:hover {
                color: #666;
            }
        }

        .linkedin {
            color: #0077b5;

            &:hover {
                color: #0088c5;
            }
        }
    }
</style>
