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
import contactLogo from "@/assets/img/logo/rieseniaLogo.svg"
const contactContent = ref({
  contactHeadline: 'Máte otázky? Jednoducho sa spýtajte.',
  contactNumber: '+421 (02) 555 65 726',
  contactEmail: 'uxdesign@riesenia.com',
  contactLogoAlt: 'RIESENIA'
});
import Popup from "@/components/UI/Popup.vue";

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
  <Popup/>
</template>
