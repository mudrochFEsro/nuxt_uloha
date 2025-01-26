<script setup lang="ts">
defineProps<{
  direction: 'Normal' | 'Reverse' | 'Left' | 'Center' | 'Right';
}>();
</script>

<template>
  <div class="DirectionContainer" :class="`Direction${direction}`">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.DirectionContainer {
  display: flex;
  width: 100%;
  @media screen and (max-width: 768px) {
    gap: 50px;

  }
}
.DirectionReverse{
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
}
.DirectionNormal{
  justify-content: space-between;
  @media screen and (max-width: 768px) {
    flex-direction: column;
  }
}
.DirectionLeft{
  justify-content: flex-start;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
}
.DirectionCenter{
  justify-content: center;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
}
.DirectionRight{
  justify-content: flex-end;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
  }
}

</style>