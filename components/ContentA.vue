<script setup lang="ts">
import DirectionContainer from "~/components/UI/containers/DirectionContainer.vue";
import Headline from "~/components/UI/Headline.vue";
import googleLogo from "assets/img/logo/googlePartnerLogo.svg"
import memberOfADMA from "assets/img/logo/memberOfAdmaLogo.svg"
import Text from "~/components/UI/Text.vue";
import List from "~/components/UI/List.vue";
import Button from "~/components/UI/Button.vue";
import TextContainer from "~/components/UI/containers/TextContainer.vue";
import LogoContainer from "~/components/UI/containers/LogoContainer.vue";
import ListContainer from "~/components/UI/containers/ListContainer.vue";
import CtaContainer from "~/components/UI/containers/CtaContainer.vue";

const contentA = {
  headlineText: "Rýchle <span>výsledky</span> pomocou UX auditu.",
  googleLogoAlt: "Google Partner Premium",
  memberOfADMALogoAlt: "Members of ADMA",
  text1: "UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú váš produkt, <strong>zvýšite ich spokojnosť a&nbsp;hlavne vaše zisky.</strong>",
  listTexts: [
    "Odhalíme nedostatky na vašej stránke",
    "Zvýšime konverzný pomer vašich stránok",
    "Zvýšime výkon marketingových kampaní",
    "Znížime vaše náklady na vývoj",
    "Zvýšime návštevnosť vašich stránok"
  ],
  text2: "Dosiahnite lepšie výsledky vašej webstránky alebo <nobr>e-shopu</nobr> <strong>pomocou UX auditu.</strong>",
  ctaText: "Mám záujem o UX audit"
}
</script>

<template>
  <div class="ContentA">
    <DirectionContainer direction="Reverse">
      <TextContainer size="Narrow" class="p-right-15">
        <Headline
            align="Left"
            :text=contentA.headlineText
        />
      </TextContainer>
      <LogoContainer class="p-left-15 m-top-25">
        <img
            :src=googleLogo
            :alt=contentA.googleLogoAlt
        >
        <img
            :src=memberOfADMA
            :alt=contentA.memberOfADMALogoAlt
        >
      </LogoContainer>
    </DirectionContainer>
    <DirectionContainer direction="Normal">
      <TextContainer size="Narrow" class="p-right-15 p-top-70">
        <Text
            fontSize="Big"
            :text=contentA.text1
        />
      </TextContainer>
      <ListContainer class="p-top-88 p-left-15 minus-m-top-10">
        <List
            :listTexts=contentA.listTexts
        />
      </ListContainer>
    </DirectionContainer>
    <DirectionContainer direction="Normal">
      <TextContainer size="Wide" class="p-right-15 p-top-70">
        <Text
            fontSize="Big"
            :text=contentA.text2
        />
      </TextContainer>
      <CtaContainer class="p-left-15 p-top-70">
        <Button
            size="Big"
            :ctaText=contentA.ctaText
        />
      </CtaContainer>
    </DirectionContainer>
  </div>
</template>

<style scoped lang="scss">
.ContentA {
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>