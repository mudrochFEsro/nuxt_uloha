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
  ctaText: "Mám záujem o UX audit",
  text3: "Pravidelné UX audity a postupné vylepšovanie nášho internetového obchodu je už niekoľko rokov súčasťou našej dlhodobej stratégie v predaji. UX tím v Riešeniach odvádza skvelú prácu, ktorú sprevádzajú viditeľné výsledky a spokojnosť našich zákazníkov. Okrem ich prístupu k nášmu biznisu … čítať viac",
  brandText1:{
    ownerName: "Jozef Korman",
    brandText: "Konateľ <a target='_blank' href='https://www.svetnapojov.sk'>SvetNápojov.sk</a>",
  },
  brandText2:{
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
      <div class="QuotationContainer p-right-15">
        <div class="QuotationBox">
          <Text :text=contentA.text3 fontSize="Small"/>
        </div>
        <div class="BrandContainer">
          <img :src=SvetNapojovLogo alt="Svet Nápojov">
          <div class="BrandText">
            <h3 v-html=contentA.brandText1.ownerName />
            <Text
                fontSize="Small"
                :text=contentA.brandText1.brandText
            />
          </div>
        </div>
      </div>
      <div class="QuotationContainer p-left-15">
        <div class="QuotationBox">
          <Text :text=contentA.text3 fontSize="Small"/>
        </div>
        <div class="BrandContainer">
          <img :src=AlanDelon alt="Alan Delon">
          <div class="BrandText">
            <h3 v-html=contentA.brandText2.ownerName />
            <Text
                fontSize="Small"
                :text=contentA.brandText2.brandText
            />
          </div>
        </div>
      </div>
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
  .QuotationContainer {
    max-width: 420px;
    width: 100%;
    gap: 40px;
    display: flex;
    flex-direction: column;
    @media screen and (max-width: 768px) {
      max-width: unset;
    }
    .QuotationBox {
      border: 1px solid colors.$border;
      padding: 25px 35px;
      position: relative;
      overflow: visible;
    }
    .QuotationBox::before {
      content: "";
      position: absolute;
      top: -30px;
      width: 55px;
      height: 43px;
      background-image: url("@/assets/img/quotationMarks.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }
    .BrandContainer{
      display: flex;
      gap: 20px;
      .BrandText{
        display: flex;
        flex-direction: column;
        h3{
          font-size: 16px;
          line-height: 22px;
          font-weight: 900;
        }
      }
    }

  }

}
</style>