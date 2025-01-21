<script lang="ts" setup>
// Hero
import heroLogo from "@/assets/img/logo/rUxDesign.svg"
import SectionContainer from "@/components/UI/containers/SectionContainer.vue";
import ContentA from "@/components/ContentA.vue";
import ContentB from "@/components/ContentB.vue";
const heroContent = {
  heroHeadline: 'Zvýšte svoje zisky optimalizáciou vášho eshopu.',
  heroCtaText: 'Mám záujem o UX audit',
  heroLogoAlt: 'R UX Design RIESENIA.com'
}
// Content A
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
</template>
