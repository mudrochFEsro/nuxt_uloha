<script setup lang="ts">
defineProps<{
  ctaText?: string;
  ctaSize?: 'Small' | 'Big';
}>();
</script>
<template>
  <button type="button" :class=ctaSize >{{ ctaText }}</button>
</template>
<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
button {
  font-weight: 900;
  color: colors.$white;
  cursor: pointer;
  background-color: colors.$ctaAndLink;
  border: none;
  border-radius: 8px;
  width: 100%;

  @media screen and (max-width: 768px) {
    margin: 0 auto;
  }
}

.Small {
  font-size: 14px;
  max-width: 200px;
  height: 42px;

}

.Big {
  font-size: 20px;
  max-width: 380px;
  height: 72px;
  @media screen and (max-width: 980px) {
    font-size: 2.1vw;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    max-width: unset;
  }
}
</style>