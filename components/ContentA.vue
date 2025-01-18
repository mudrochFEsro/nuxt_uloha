<script setup lang="ts">
import Box from "~/components/UI/Box.vue";
import Headline from "~/components/UI/Headline.vue";
import googleLogo from "assets/img/logo/googlePartnerLogo.svg"
import memberOfADMA from "assets/img/logo/memberOfAdmaLogo.svg"
import Text from "~/components/UI/Text.vue";
import List from "~/components/UI/List.vue";

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
  ]
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
        <img :src=googleLogo
             :alt=contentA.googleLogoAlt
        >
        <img
            :src=memberOfADMA
            :alt=contentA.memberOfADMALogoAlt
        >
      </div>
    </Box>
    <Box direction="Normal">
      <div class="textContainer p-right-15 p-top-70">
        <Text
            fontSize="Big"
            :text=contentA.text1
        />
      </div>
      <div class="listContainer p-left-15 minus-m-top-10">
        <List
            :listTexts=contentA.listTexts
        />
      </div>
    </Box>
    <Box direction="Normal">
    </Box>
  </div>
</template>

<style scoped lang="scss">
.ContentA {
  .textContainer {
    max-width: 460px;
    width: 100%;
  }

  .logoContainer {
    justify-content: flex-end;
    display: inline-flex;
    height: fit-content;
    flex-wrap: wrap;
    gap: 40px;
    @media screen and (max-width: 980px) {
      justify-content: center;
      max-width: unset;
      width: 100%;
    }

    img:first-of-type {
      width: 100%;
      max-width: 185px;
    }

    img {
      width: 100%;
      max-width: 161px;

    }
  }
  .listContainer {
    max-width: 380px;
    width: 100%;
    @media screen and (max-width: 980px) {
      justify-content: flex-start;
      display: flex;
      max-width: unset;
    }
    @media screen and (max-width: 980px) {
      padding-top: 89px;
    }
  }
}


</style>