<script setup lang="ts">
defineProps<{
  size: 'Wide' | 'Narrow' | 'X-Narrow'
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
  @media screen and (max-width: 768px) {
    max-width: unset;

  }
}
.X-Narrow{
  max-width: 400px;
  width: 100%;
  @media screen and (max-width: 768px) {
    max-width: unset;
  }
}
</style>
