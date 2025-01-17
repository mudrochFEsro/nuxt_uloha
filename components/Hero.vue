<script setup lang="ts">
import SmallButton from "~/components/atoms/SmallButton.vue";

defineProps<{
  heroHeadline: string;
  ctaText: string;
  heroLogo: string;
  heroLogoAlt: string;
}>();

</script>

<template>
  <div class="Hero">
    <div class="Hero-body">
      <div class="Hero-img-wrap">
        <img
            :src=heroLogo
            :alt=heroLogoAlt
        />
      </div>
      <h1>{{ heroHeadline }}</h1>
      <SmallButton :ctaText="ctaText"/>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.Hero {
  background: linear-gradient(172deg, colors.$heroPrimary 51.38%,  colors.$heroSecondary 125.72%);
  min-height: 555px;
  width: 100%;
  text-align: center;
  padding: 60px;
  @media screen and (max-width: 576px) {
    padding: 30px 30px 60px 30px;
    min-height: unset;
    height: 410px;
  }

  .Hero-body {
    display: flex;
    justify-content: space-between;
    max-width: 1000px;
    height: 435px;
    margin: 0 auto;
    position: relative;
    @media screen and (max-width: 576px) {
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
      @media screen and (max-width: 1000px) {
        padding-top: unset;
        font-size: 4.9vw;
        line-height: 1.6;
      }
      @media screen and (max-width: 576px) {
        font-size: 30px;
        width: 100%;
        line-height: 45px;
        position: relative;
        top: unset;
        left: unset;
        transform: unset;
      }
    }

    .Hero-img-wrap {
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