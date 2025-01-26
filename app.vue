<script lang="ts" setup>
import {ref} from "vue";
import SectionContainer from "@/components/UI/containers/SectionContainer.vue";
// Hero
import heroLogo from "@/assets/img/logo/rUxDesign.svg"
const heroContent = ref({
  heroHeadline: 'Zvýšte svoje zisky optimalizáciou vášho eshopu.',
  heroCtaText: 'Mám záujem o UX audit',
  heroLogoAlt: 'R UX Design RIESENIA.com'
});
// Content A
import ContentA from "@/components/ContentA.vue";
// Content B
import ContentB from "@/components/ContentB.vue";
</script>
<template>
  <Hero
      :heroHeadline=heroContent.heroHeadline
      :ctaText=heroContent.heroCtaText
      :heroLogo=heroLogo
      :heroLogoAlt=heroContent.heroLogoAlt
  />
  <SectionContainer>
    <ContentA/>
  </SectionContainer>
  <SectionContainer>
    <ContentB/>
  </SectionContainer>
  <SectionContainer>
    <ContentC/>
  </SectionContainer>
</template>
