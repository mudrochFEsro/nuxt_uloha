<script setup lang="ts">
defineProps<{
  text: string
  align?: 'Left' | 'Center' | 'Right';
}>();
</script>
<template>
  <h2 :class="`Align${align}`" v-html="text"></h2>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

h2 {
  font-size: 48px;
  line-height: 64px;
  color: colors.$black;
  font-weight: 700;
  width: 100%;

  :deep(span) {
    border-bottom: 14px solid colors.$underline;
  }

  @media screen and (max-width: 768px) {
    max-width: unset;
    font-size: 32px;
    line-height: 44px;
  }
}

.AlignCenter {
  text-align: center;
}

.AlignRight {
  text-align: right;
}

.AlignLeft {
  text-align: left;
}

</style>