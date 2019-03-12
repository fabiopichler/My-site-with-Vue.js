<template>
    <div class="row m-0">
        <main class="col-lg-8 px-0 pr-lg-2 order-first">
            <slot name="main" />  
        </main>

        <div class="col-lg-4 px-0">
            <slot name="aside" />
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheMainGrid extends Vue {
}
</script>
