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
// // Content A
// import ContentA from "@/components/ContentA.vue";
// // Content B
// import ContentB from "@/components/ContentB.vue";
// // Content C
// import ContentC from "@/components/ContentC.vue";
// // Contact Banner
import contactLogo from "@/assets/img/logo/rieseniaLogo.svg"
const contactContent = ref({
  contactHeadline: 'Máte otázky? Jednoducho sa spýtajte.',
  contactNumber: '+421 (02) 555 65 726',
  contactEmail: 'uxdesign@riesenia.com',
  contactLogoAlt: 'RIESENIA'
});
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
  <ContactBanner
      :contactHeadline=contactContent.contactHeadline
      :contactNumber=contactContent.contactNumber
      :contactEmail=contactContent.contactEmail
      :contactLogo=contactLogo
      :contactLogoAlt=contactContent.contactLogoAlt
  />
</template>
