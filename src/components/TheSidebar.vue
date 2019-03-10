<template>
    <aside>
        <SocialSection />

        <AboutSection />

        <LoremIpsumSection />
    </aside>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

import SocialSection from "@/components/sections/SocialSection.vue";
import AboutSection from "@/components/sections/AboutSection.vue";
import LoremIpsumSection from "@/components/sections/LoremIpsumSection.vue";

@Component({
    components: {
        SocialSection,
        AboutSection,
        LoremIpsumSection
    }
})
export default class TheSidebar extends Vue {
}
</script>
