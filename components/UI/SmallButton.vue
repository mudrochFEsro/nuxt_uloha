<script setup lang="ts">
defineProps<{
  ctaText: String,
}>();
</script>

<template>
  <button>{{ ctaText }}</button>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
button {
  font-size: 14px;
  font-weight: 900;
  color: colors.$white;
  cursor: pointer;
  background-color: colors.$ctaAndLink;
  border: none;
  border-radius: 8px;
  min-width: 200px;
  height: 42px;
}
</style>