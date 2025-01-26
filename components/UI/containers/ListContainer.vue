<script setup lang="ts">
defineProps<{
  contSize?: 'Wide';
}>();
</script>

<template>
  <div class="ListContainer" :class=contSize >
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.ListContainer {
  max-width: 380px;
  width: 100%;
  @media screen and (max-width: 980px) {
    max-width: unset;
  }
}
.Wide {
  width: fit-content;
  max-width: unset;
}
</style>
