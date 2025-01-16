<script setup lang="ts">
defineProps<{
  ctaText: String,
}>();
</script>

<template>
  <button >{{ctaText}}</button>
</template>

<style scoped lang="scss">
  button {
    font-size: 14px;
    font-weight: 900;
    color: white;
    cursor: pointer;
    background-color: rgba(238, 50, 92, 1);
    border: none;
    border-radius: 8px;
    min-width: 200px;
    height: 42px;
  }
</style>