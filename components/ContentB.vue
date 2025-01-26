<script setup lang="ts">
import Headline from "@/components/UI/Headline.vue";
import HeadlineContainer from "@/components/UI/containers/HeadlineContainer.vue";
import DirectionContainer from "@/components/UI/containers/DirectionContainer.vue";
import One from '@/assets/img/1.svg';
import Two from '@/assets/img/2.svg';
import Three from '@/assets/img/3.svg';
import Four from '@/assets/img/4.svg';
import Arrow from '@/assets/img/arrow.svg'
import NumberContainer from "~/components/UI/containers/NumberContainer.vue";

const contentB = {
  headlineText: "Rýchla a jednoduchá cesta k&nbsp;<span>výsledkom.</span>",
  one: {
    headline: "Ciele auditu",
    text: "Určíme si <strong>spoločné ciele</strong>, nastavíme očakávania a&nbsp;definujeme <strong>cieľovú skupinu a&nbsp;jej potreby.</strong>"
  },
  two: {
    headline: "Zbieranie dát",
    text: "Zvolíme vhodné metodiky a&nbsp;nástroje na <strong>sledovanie správania používateľov a&nbsp;zbieranie dát.</strong>"
  },
  three: {
    headline: "Vyhodnotenie",
    text: "<strong>Vyhodnotíme nazbierané dáta</strong>, zosumarizujeme všetky naše zistenia a&nbsp;<strong>navrhneme riešenia.</strong>"
  },
  four: {
    headline: "Výsledky auditu",
    text: "<strong>Osobná prezentácia výsledkov a&nbsp;navrhnutých riešení</strong> s&nbsp;podrobnou dokumentáciou.",
  }
};

</script>

<template>
  <div class="ContentB">
    <HeadlineContainer class="p-bottom-65">
      <Headline
          align="Center"
          :text="contentB.headlineText"
      />
    </HeadlineContainer>
    <DirectionContainer direction="Left">
      <NumberContainer>
        <template #image>
          <img alt="1" :src="One" />
        </template>
        <template #text>
          <h3>{{ contentB.one.headline }}</h3>
          <p v-html="contentB.one.text"></p>
        </template>
        <template #arrow-right>
          <img class="arrow right" alt="arrow" :src="Arrow" />
        </template>
      </NumberContainer>
    </DirectionContainer>

    <DirectionContainer direction="Right">
      <NumberContainer>
        <template #image>
          <img alt="2" :src="Two" />
        </template>
        <template #text>
          <h3>{{ contentB.two.headline }}</h3>
          <p v-html="contentB.two.text"></p>
        </template>
        <template #arrow-left>
          <img class="arrow left" alt="arrow" :src="Arrow" />
        </template>
      </NumberContainer>
    </DirectionContainer>

    <DirectionContainer direction="Left">
      <NumberContainer>
        <template #arrow-right>
          <img class="arrow right" alt="arrow" :src="Arrow" />
        </template>
        <template #image>
          <img alt="3" :src="Three" />
        </template>
        <template #text>
          <h3>{{ contentB.three.headline }}</h3>
          <p v-html="contentB.three.text"></p>
        </template>
      </NumberContainer>
    </DirectionContainer>

    <DirectionContainer direction="Right">
      <NumberContainer>
        <template #image>
          <img alt="4" :src="Four" />
        </template>
        <template #text>
          <h3>{{ contentB.four.headline }}</h3>
          <p v-html="contentB.four.text"></p>
        </template>
      </NumberContainer>
    </DirectionContainer>
  </div>
</template>

<style scoped lang="scss">

.ContentB {
  display: flex;
  flex-direction: column;
  gap: 75px;
}

</style>
