<template>
    <article class="article card mb-2">
        <header class="p-3">
            <h2 class="mt-2">
                <router-link :to="`/blog/${article.slug}`" class="text-info">{{ article.title }}</router-link>
            </h2>

            <small class="mt-3 d-block text-secondary">
                <time class="mr-3">
                    <i class="fas fa-calendar-alt"></i> {{ article.date_posted }}
                </time>

                <span class="fas fa-user"></span> {{ article.user_fullName }}
            </small>
        </header>

        <hr>

        <div v-html="article.content" class="content px-3 pt-3"></div>

        <hr>

        <footer class="d-flex align-items-center p-3">
            <small class="d-block text-secondary">
                <time>Atualizado em {{ article.date_modified }}</time>
            </small>

            <div v-if="btnContinueReading" class="d-block ml-auto">
                <router-link :to="`/blog/${article.slug}`" class="btn btn-sm btn-info">Continue Lendo</router-link>
            </div>
        </footer>
    </article>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import IArticle from '@/domain/article/IArticle';

@Component
export default class TheArticle extends Vue {
    @Prop({ type: Object, required: true }) article!: IArticle[];
    @Prop({ type: Boolean, default: false }) btnContinueReading!: boolean;
}
</script>

<style lang="scss">
    .article {
        .content {
            img {
                width: 100%;
            }
        }
    }
</style>
