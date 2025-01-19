<script setup lang="ts">
defineProps<{
  direction: 'Normal' | 'Reverse'
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
  width: 100%;
}
.BoxReverse{
  @media screen and (max-width: 576px) {
    gap: 50px;
    flex-direction: column-reverse;
  }
}
.BoxNormal{
  @media screen and (max-width: 576px) {
    gap: 60px;
    flex-direction: column;
  }
}
</style>