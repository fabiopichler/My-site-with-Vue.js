<template>
    <base-section name="lorem-ipsum" title="Lorem ipsum" titleicon="fab fa-internet-explorer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec elementum sapien est, sit amet molestie dui lobortis non. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu diam eu nisi semper pharetra. Vivamus quis condimentum orci.
    </base-section>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import BaseSection from './BaseSection.vue';

@Component({
    components: {
        BaseSection
    }
})
export default class LoremIpsumSection extends Vue {
}
</script>
