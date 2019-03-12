<template>
    <div>
        <div v-if="loading === 0" class="loading card mb-2">
            <div class="card-body d-flex flex-column justify-content-center text-center h-100">
                <div class="text-secondary">
                    <div class="spinner-border" role="status">
                        <span class="sr-only">Loading...</span>
                    </div>
                    <h5 class="text mt-2">carregando...</h5>
                </div>
            </div>
        </div>

        <TheError v-if="loading === 1" />

        <slot v-else />
    </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

import TheError from "@/components/TheError.vue";

export enum Loading {
    Loading,
    Error,
    Loaded
}

@Component({
    components: {
        TheError
    }
})
export default class TheLoading extends Vue {
    @Prop({ type: Number, required: true }) loading!: Loading;
}
</script>

<style lang="scss">
    .loading {
        height: 280px;

        .text {
            animation: an-opacity 250ms alternate infinite;

            @keyframes an-opacity {
                from {
                    opacity: 1;
                }

                to {
                    opacity: .2;
                }
            }
        }
    }
</style>
