<template>
    <the-loading :loading="loading">
        <TheArticle v-if="article" :article="article" />
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
export default class Post extends Vue {
    article: IArticle|null = null;

    service!: ArticleService;
    loading: Loading = Loading.Loading;

    async created() {
        this.service = new ArticleService();
        
        try {
            this.article = await this.service.show('post', this.$route.params.slug);
            this.loading = Loading.Loaded;

        } catch (error) {
            this.loading = Loading.Error;
        }
    }
}
</script>
