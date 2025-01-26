<script setup lang="ts">
defineProps<{
  position?: 'Left';
}>();
</script>

<template>
  <div class="CtaContainer" :class="position">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.CtaContainer {
  display: flex;
  justify-content: flex-end;
  max-width: 460px;
  width: 100%;

  @media screen and (max-width: 980px) {
    justify-content: flex-start;
  }
  @media screen and (max-width: 768px) {
    max-width: unset;
    justify-content: center;
  }
}
.Left{
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    justify-content: center;
  }
}
.Center{
  justify-content: center;
}
</style>
