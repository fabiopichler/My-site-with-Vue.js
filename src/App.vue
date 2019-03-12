<template>
    <div class="container px-0">
        <TheHeader />
        
        <the-main-grid>
            <router-view slot="main" :key="key" @update-key="updateKey" />

            <TheSidebar slot="aside" />
        </the-main-grid>

        <TheFooter />
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import TheHeader from '@/components/TheHeader.vue';
import TheMainGrid from '@/components/TheMainGrid.vue';
import TheSidebar from '@/components/TheSidebar.vue';
import TheFooter from '@/components/TheFooter.vue';

@Component({
    components: {
        TheHeader,
        TheMainGrid,
        TheSidebar,
        TheFooter
    }
})
export default class App extends Vue {
    key: string|null = null;

    updateKey(key: string) {
        this.key = key;
    }
}
</script>
