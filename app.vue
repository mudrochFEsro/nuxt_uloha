<script lang="ts" setup>
// Hero
import heroLogo from 'assets/img/logo/rUxDesign.svg'
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
  <Section>
    <contentA/>
  </Section>
</template>
<style lang="scss">

</style>