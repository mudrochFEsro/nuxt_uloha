<script setup lang="ts">
import {ref} from "vue";
import DirectionContainer from "@/components/UI/containers/DirectionContainer.vue";
import Headline from "@/components/UI/Headline.vue";
import Text from "@/components/UI/Text.vue";
import List from "@/components/UI/List.vue";
import Button from "@/components/UI/Button.vue";
import TextContainer from "@/components/UI/containers/TextContainer.vue";
import ListContainer from "@/components/UI/containers/ListContainer.vue";
import CtaContainer from "~/components/UI/containers/CtaContainer.vue";
const contentC = ref({
  headlineText: "Zameriame sa na to <span>najdôležitejšie.</span>",
  text1: "Dosiahnite lepšie výsledky vašej webstránky alebo <nobr>e-shopu</nobr> <strong>pomocou UX auditu.</strong>",
  listTexts: [
    "Informačnú architektúru a štruktúru kategórií",
    "Správanie návštevníkov na kľúčových stránkach",
    "Rýchlosť a dostupnosť stránok, SEO nastavenia",
    "Váš biznis a vašich zákazníkov",
    "Ciele, ktoré chcete dosiahnuť",
    "Webovú analytiku"
  ],
  ctaText: "Mám záujem o UX audit",
});
</script>

<template>
  <div class="ContentC">
    <DirectionContainer direction="Reverse">
      <TextContainer size="Narrow" class="p-right-15">
        <Headline
            align="Left"
            :text=contentC.headlineText
        />
      </TextContainer>
    </DirectionContainer>
    <DirectionContainer direction="Reverse">
      <TextContainer size="X-Narrow" class="p-right-15 p-top-50">
        <Text
            fontSize="Big"
            :text=contentC.text1
        />
      </TextContainer>
      <ListContainer contSize="Wide" class="p-left-15 p-top-30">
        <List
            :listTexts=contentC.listTexts
        />
      </ListContainer>
    </DirectionContainer>
    <DirectionContainer direction="Normal" class="minus-m-top-70">
      <CtaContainer position="Left">
        <Button
            ctaSize="Big"
            :ctaText=contentC.ctaText
        />
      </CtaContainer>
    </DirectionContainer>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

.ContentC {
  @media screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    gap: 50px;
  }
}
</style>