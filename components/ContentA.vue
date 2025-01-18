<script setup lang="ts">
import Box from "~/components/UI/Box.vue";
import Headline from "~/components/UI/Headline.vue";
import googleLogo from "assets/img/logo/googlePartnerLogo.svg"
import memberOfADMA from "assets/img/logo/memberOfAdmaLogo.svg"
import Text from "~/components/UI/Text.vue";

const contentA = {
  headlineText: "Rýchle <span>výsledky</span> pomocou UX auditu.",
  googleLogoAlt: "Google Partner Premium",
  memberOfADMALogoAlt: "Members of ADMA",
  text1: "UX auditom vášho riešenia lepšie pochopíte, ako vaši zákazníci používajú váš produkt, <strong>zvýšite ich spokojnosť a&nbsp;hlavne vaše zisky.</strong>",
}
</script>

<template>
  <div class="ContentA">
    <Box direction="Reverse">
      <div class="textContainer">
        <Headline
            align="Left"
            :text=contentA.headlineText
        />
      </div>
      <div class="logoContainer m-top-25">
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
      <div class="textContainer p-top-50">
        <Text
            fontSize="Big"
            :text="contentA.text1"
        />
      </div>
    </Box>
    <Box direction="Normal">
    </Box>
  </div>
</template>

<style scoped lang="scss">
.ContentA {
  padding: 0 30px;
  .textContainer {
    max-width: 460px;
    width: 100%;
  }
  .logoContainer {
    justify-content: flex-end;
    display: flex;
    white-space: nowrap;
    img:first-of-type {
      padding-right: 40px;
      width: 185px;
      height: 80px;
    }
    img {
      width: 161px;
      height: 76px;
    }
  }
}


</style>