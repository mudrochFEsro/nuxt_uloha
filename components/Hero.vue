<script setup lang="ts">
import Button from "@/components/UI/Button.vue";
import { eventBus } from '@/eventBus';

defineProps<{
  heroHeadline: string;
  ctaText: string;
  heroLogo: string;
  heroLogoAlt: string;
}>();

const handleButtonClick = () => {
  eventBus.emit('openPopup');
};

</script>

<template>
  <section class="Hero">
    <div class="HeroBody">
      <div class="HeroImgWrap">
        <img
            :src=heroLogo
            :alt=heroLogoAlt
        />
      </div>
      <h1>{{ heroHeadline }}</h1>
      <Button
          ctaSize="Small"
          :ctaText=ctaText
          @click=handleButtonClick
      />
    </div>
  </section>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.Hero {
  background: linear-gradient(172deg, colors.$heroPrimary 51.38%,  colors.$heroSecondary 125.72%);
  min-height: 555px;
  width: 100%;
  text-align: center;
  padding: 50px;
  @media screen and (max-width: 768px) {
    padding: 25px 25px 50px 25px;
    min-height: unset;
    height: 410px;
  }

  .HeroBody {
    display: flex;
    justify-content: space-between;
    max-width: 980px;
    height: 435px;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      height: 100%;
    }

    h1 {
      font-size: 50px;
      font-weight: 900;
      line-height: 80px;
      color: colors.$white;
      position: absolute;
      width: 70%;
      top: 145px;
      left: 50%;
      transform: translateX(-50%);
      @media screen and (max-width: 980px) {
        padding-top: unset;
        font-size: 5.1vw;
        line-height: 1.6;
      }
      @media screen and (max-width: 768px) {
        font-size: 30px;
        width: 100%;
        max-width: 340px;
        line-height: 45px;
        position: relative;
        top: unset;
        left: unset;
        transform: unset;
        margin: 0 auto;
      }
    }

    .HeroImgWrap {
      min-width: 200px;
      display: flex;
      img {
        max-width: 145px;
        width: 100%;
        height: 48px;
      }
    }

  }
}
</style>