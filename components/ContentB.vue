<script setup lang="ts">
import Headline from "@/components/UI/Headline.vue";
import HeadlineContainer from "@/components/UI/containers/HeadlineContainer.vue";
import DirectionContainer from "@/components/UI/containers/DirectionContainer.vue";
import One from '@/assets/img/1.svg';
import Two from '@/assets/img/2.svg';
import Arrow from '@/assets/img/arrow.svg'

const contentB = {
  headlineText: "Rýchla a jednoduchá cesta k&nbsp;<span>výsledkom.</span>",
  one: {
    headline: "Ciele auditu",
    text: "Určíme si <strong>spoločné ciele</strong>, nastavíme očakávania a&nbsp;definujeme <strong>cieľovú skupinu a&nbsp;jej potreby.</strong>"
  },
  two: {
    headline: "Zbieranie dát",
    text: "Zvolíme vhodné metodiky a&nbsp;nástroje na <strong>sledovanie správania používateľov a&nbsp;zbieranie dát.</strong>"
  }
};

</script>

<template>
  <div class="ContentB">
    <HeadlineContainer>
      <Headline
          align="Center"
          :text="contentB.headlineText"
      />
    </HeadlineContainer>
    <div class="wrap p-top-140">
      <DirectionContainer direction="Left" >
        <div class="NumberContainer">
          <img alt="1" :src=One />
          <div class="NumberContainerText">
            <h3>{{ contentB.one.headline }}</h3>
            <p v-html=contentB.one.text />
          </div>
          <img class="arrow right" alt="arrow" :src=Arrow />
        </div>
      </DirectionContainer>
      <DirectionContainer direction="Right">
        <div class="NumberContainer">
          <img alt="1" :src=Two />
          <div class="NumberContainerText">
            <h3>{{ contentB.two.headline }}</h3>
            <p v-html=contentB.two.text />
          </div>
          <img class="arrow left" alt="arrow" :src=Arrow />
        </div>
      </DirectionContainer>
    </div>

  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

.ContentB {
  .wrap{
    display: flex;
    flex-direction: column;
    gap: 75px;
    .NumberContainer {
      display: flex;
      gap: 36px;
      align-items: center;
      position: relative;
      @media screen and (max-width: 768px) {
        justify-content: flex-start;
      }

      .NumberContainerText {
        max-width: 380px;
        width: 100%;

        h3 {
          color: colors.$black;
          font-weight: 900;
          font-size: 24px;
        }

        p {
          color: colors.$black;
          line-height: 28px;
        }
      }

      .arrow {
        position: absolute;
        top: 47px;
        @media screen and (max-width: 768px) {
          visibility: hidden;
          display: none;
        }
      }

      .right {
        right: -110px;
      }

      .left {
        left: -110px;
        transform: scaleX(-1);
      }
    }
  }
}

</style>
