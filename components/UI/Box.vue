<script setup lang="ts">
defineProps<{
  direction?: 'Normal' | 'Reverse'
}>();
</script>

<template>
  <div class="Box" :class="`Box${direction}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.Box {
  justify-content: space-between;
  display: flex;
}
.BoxReverse{
  @media screen and (max-width: 576px) {
    flex-direction: column-reverse;
  }
}
.BoxNormal{
  @media screen and (max-width: 576px) {
    flex-direction: column;
  }
}
</style>