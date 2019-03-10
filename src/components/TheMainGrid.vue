<template>
    <div class="container">
        <div class="row">
            <main class="col-lg-8 px-0 px-sm-1 order-first">
                <slot name="main" />  
            </main>

            <div class="col-lg-4 px-0 px-sm-1">
                <slot name="aside" />
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'

@Component
export default class TheMainGrid extends Vue {
}
</script>
