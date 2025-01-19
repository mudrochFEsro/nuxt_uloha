<script setup lang="ts">
import Box from "~/components/UI/Box.vue";
import Headline from "~/components/UI/Headline.vue";
import googleLogo from "assets/img/logo/googlePartnerLogo.svg"
import memberOfADMA from "assets/img/logo/memberOfAdmaLogo.svg"
import Text from "~/components/UI/Text.vue";
import List from "~/components/UI/List.vue";
import Button from "~/components/UI/Button.vue";

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
    <Box direction="Reverse">
      <div class="textContainer p-right-15">
        <Headline
            align="Left"
            :text=contentA.headlineText
        />
      </div>
      <div class="logoContainer p-left-15 m-top-25">
        <img
            :src=googleLogo
            :alt=contentA.googleLogoAlt
        >
        <img
            :src=memberOfADMA
            :alt=contentA.memberOfADMALogoAlt
        >
      </div>
    </Box>
    <Box direction="Normal">
      <div class="textContainer small-text p-right-15 p-top-70">
        <Text
            fontSize="Big"
            :text=contentA.text1
        />
      </div>
      <div class="listContainer p-top-88 p-left-15 minus-m-top-10">
        <List
            :listTexts=contentA.listTexts
        />
      </div>
    </Box>
    <Box direction="Normal">
      <div class="textContainer p-right-15 p-top-70">
        <Text
            fontSize="Big"
            :text=contentA.text2
        />
      </div>
      <div class="ctaContainer p-left-15 p-top-70">
        <Button
            size="Big"
            :ctaText=contentA.ctaText
        />
      </div>
    </Box>
  </div>
</template>

<style scoped lang="scss">
.ContentA {
  @media screen and (max-width: 576px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }

  .textContainer {
    max-width: 460px;
    width: 100%;
    @media screen and (max-width: 576px) {
      max-width: unset;
      margin: 0 auto;
    }
  }
  .logoContainer {
    justify-content: flex-end;
    display: flex;
    height: fit-content;
    gap: 40px;
    width: 100%;
    @media screen and (max-width: 980px) {
      align-items: center;
      flex-direction: column;
      max-width: unset;
    }
    @media screen and (max-width: 576px) {
      flex-direction: row;
      justify-content: center;
      gap: 10vw;
    }

    img:first-of-type {
      width: 100%;
      max-width: 185px;
    }
    img {
      width: 100%;
      max-width: 161px;
    }
    @media screen and (max-width: 576px) {
      img, img:first-of-type {
        width: 37vw;
      }
    }

  }

  .listContainer {
    max-width: 380px;
    width: 100%;
    @media screen and (max-width: 980px) {
      max-width: unset;
    }
  }

  .ctaContainer {
    display: flex;
    justify-content: flex-end;
    max-width: 460px;
    width: 100%;
    @media screen and (max-width: 980px) {
      justify-content: flex-start;
    }
    @media screen and (max-width: 576px) {
      max-width: unset;
      justify-content: center;

    }
  }
}


</style>