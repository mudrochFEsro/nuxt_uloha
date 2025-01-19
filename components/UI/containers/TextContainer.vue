<script setup lang="ts">
defineProps<{
  size: string
}>();
</script>
<template>
  <div class="TextContainer" :class="size">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.TextContainer {
  @media screen and (max-width: 576px) {
    max-width: unset;
    margin: 0 auto;
  }
}
.Wide{
  width: 120%;
  @media screen and (max-width: 980px) {
    width: 100%;
  }
}
.Narrow{
  max-width: 460px;
  width: 100%;
  @media screen and (max-width: 576px) {
    max-width: unset;

  }
}
</style>
