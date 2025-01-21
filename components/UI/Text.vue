<script setup lang="ts">
defineProps<{
  text: string
  fontSize: 'Big' | 'Small';
}>();
</script>
<template>
  <p :class=fontSize  v-html="text"></p>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

p {
  color: colors.$black;
  width: 100%;
  :deep(strong) {
    font-weight: 800;
  }
  :deep(a) {
    font-weight: 900;
    color: colors.$ctaAndLink;
    text-decoration: none;
  }
}
.Big {
  font-size: 24px;
  line-height: 40px;
  @media screen and (max-width: 768px) {
    font-size: 20px;
  }
}
.Small {
  font-size: 16px;
  line-height: 32px;
}



</style>