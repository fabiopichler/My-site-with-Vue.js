<template>
    <the-loading :loading="loading">
        <TheArticle v-for="article in articles" :key="article.id" :article="article" :btn-continue-reading="true" />
    </the-loading>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import IArticle from '@/domain/article/IArticle';
import ArticleService from '@/domain/article/ArticleService';
import TheArticle from "@/components/TheArticle.vue";
import TheLoading, { Loading } from "@/components/TheLoading.vue";

@Component({
    components: {
        TheArticle,
        TheLoading
    }
})
export default class Home extends Vue {
    articles: IArticle[] = [];

    service!: ArticleService;
    loading: Loading = Loading.Loading;

    async created() {
        this.service = new ArticleService();

        try {
            this.articles = await this.service.index('post');
            this.loading = Loading.Loaded;

        } catch (error) {
            this.loading = Loading.Error;
        }
    }
}
</script>
