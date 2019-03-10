<template>
    <the-loading :loading="loading">
        <article v-if="article" class="article card mb-2">
            <header class="p-3">
                <h2 class="mt-2 mb-0">{{ article.title }}</h2>
            </header>

            <div v-html="article.content" class="content px-3 mb-3"></div>
        </article>
    </the-loading>
</template>

<script lang="ts">
import { Component, Vue, Watch } from 'vue-property-decorator';

import IArticle from '@/domain/article/IArticle';
import ArticleService from '@/domain/article/ArticleService';
import TheLoading, { Loading } from "@/components/TheLoading.vue";

@Component({
    components: {
        TheLoading
    }
})
export default class Page extends Vue {
    article: IArticle|null = null;

    service!: ArticleService;
    loading: Loading = Loading.Loading;

    async created() {
        this.service = new ArticleService();
        
        try {
            this.article = await this.service.show('page', this.$route.params.slug);
            this.loading = Loading.Loaded;

        } catch (error) {
            this.loading = Loading.Error;
        }
    }

    @Watch('$route.params')
    routeParamsWatch() {
        this.$emit('update-key', Math.random().toString(36).substr(2, 10));
    }
}
</script>
