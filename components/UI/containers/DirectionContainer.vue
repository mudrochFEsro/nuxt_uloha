<script setup lang="ts">
defineProps<{
  direction: 'Normal' | 'Reverse'
}>();
</script>

<template>
  <div class="DirectionContainer" :class="`Direction${direction}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.DirectionContainer {
  justify-content: space-between;
  display: flex;
  width: 100%;
}
.DirectionReverse{
  @media screen and (max-width: 768px) {
    gap: 50px;
    flex-direction: column-reverse;
  }
}
.DirectionNormal{
  @media screen and (max-width: 768px) {
    gap: 60px;
    flex-direction: column;
  }
}
</style>