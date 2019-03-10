<template>
    <section class="card mb-2">
        <div class="card-body p-3">
            <TitleWithIcon :title="title" :icon="titleicon" />

            <hr>

            <div :class="name">
                <slot />
            </div>
        </div>
    </section>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator'

import TitleWithIcon from '@/components/TitleWithIcon.vue';

@Component({
    components: {
        TitleWithIcon
    }
})
export default class BaseSection extends Vue {
    @Prop({ type: String, required: true }) name!: string;
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, required: true }) titleicon!: string;
}
</script>
