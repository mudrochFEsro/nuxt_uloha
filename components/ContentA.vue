<script setup lang="ts">
import DirectionContainer from "@/components/UI/containers/DirectionContainer.vue";
import Headline from "@/components/UI/Headline.vue";
import googleLogo from "assets/img/logo/googlePartnerLogo.svg"
import memberOfADMA from "assets/img/logo/memberOfAdmaLogo.svg"
import Text from "@/components/UI/Text.vue";
import List from "@/components/UI/List.vue";
import Button from "@/components/UI/Button.vue";
import TextContainer from "@/components/UI/containers/TextContainer.vue";
import LogoContainer from "@/components/UI/containers/LogoContainer.vue";
import ListContainer from "@/components/UI/containers/ListContainer.vue";
import CtaContainer from "@/components/UI/containers/CtaContainer.vue";
import SvetNapojovLogo from "@/assets/img/logo/svetNapojovLogo.svg";
import AlanDelon from "@/assets/img/logo/alainDelonLogo.svg";
import QuotationContainer from "@/components/UI/containers/QuotationContainer.vue";
import QuotationBox from "@/components/UI/containers/QuotationBox.vue";
import BrandContainer from "@/components/UI/containers/BrandContainer.vue";
import ExpandableText from "~/components/UI/ExpandableText.vue";

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
  text3: "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu",
  ctaText: "Mám záujem o UX audit",
  brandText1: {
    ownerName: "Jozef Korman",
    brandText: "Konateľ <a target='_blank' href='https://www.svetnapojov.sk'>SvetNápojov.sk</a>",
  },
  brandText2: {
    ownerName: "Richard Wohlstein",
    brandText: "Retail manager <a target='_blank' href='https://www.https://www.alaindelon.sk'>AlainDelon.sk</a>",
  }
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
            ctaSize="Big"
            :ctaText=contentA.ctaText
        />
      </CtaContainer>
    </DirectionContainer>
    <DirectionContainer direction="Normal" class="p-top-140">
      <QuotationContainer class="p-right-15">
        <template #quotation>
          <QuotationBox>
            <ExpandableText>
              <Text
                  :text=contentA.text3
                  fontSize="Small"
              />
            </ExpandableText>
          </QuotationBox>
        </template>
        <template #brand>
          <BrandContainer>
            <template #brandLogo>
              <img :src=SvetNapojovLogo alt="Svet Nápojov">
            </template>
            <template #brandText>
              <h3 v-html=contentA.brandText1.ownerName></h3>
              <Text
                  fontSize="Small"
                  :text=contentA.brandText1.brandText
              />
            </template>
          </BrandContainer>
        </template>
      </QuotationContainer>
      <QuotationContainer class="p-left-15">
        <template #quotation>
          <QuotationBox>
            S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich
            know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu,
            ktorý následne vylepšovali pomocou relevantných analýz a dát. Aj ich zásluhou
            S UX tímom Riešení úzko spolupracujeme už dlhé roky a sú dôležitým partnerom nášho biznisu. Vďaka ich
            know-how pre nás od samého začatku správne nastavili zdravý pomer prvotriedneho dizajnu a funkčnosti webu,
            ktorý následne vylepšovali pomocou relevantných analýz a dát.
          </QuotationBox>
        </template>
        <template #brand>
          <BrandContainer>
            <template #brandLogo>
              <img :src=AlanDelon alt="Alan Delon">
            </template>
            <template #brandText>
              <h3 v-html=contentA.brandText2.ownerName></h3>
              <Text
                  fontSize="Small"
                  :text=contentA.brandText2.brandText
              />
            </template>
          </BrandContainer>
        </template>
      </QuotationContainer>
    </DirectionContainer>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

.ContentA {
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>