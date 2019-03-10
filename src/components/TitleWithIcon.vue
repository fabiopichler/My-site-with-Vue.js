<template>
    <h5 class="card-title">
        <span v-if="icon" :class="icon" class="icon-title"></span>
        {{ title }}
    </h5>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class TitleWithIcon extends Vue {
    @Prop({ type: String, required: true }) title!: string;
    @Prop({ type: String, default: null }) icon!: string;
}
</script>

<style lang="scss" scoped>
    .icon-title {
        color:#84868f;
    }
</style>
