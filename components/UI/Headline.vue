<script setup lang="ts">
defineProps<{
  text: string
  align: 'Left' | 'Center' | 'Right';
}>();
</script>
<template>
  <h2 :class="`Box${align}`" v-html="text"></h2>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

h2 {
  font-size: 48px;
  line-height: 64px;
  color: colors.$black;
  font-weight: 700;
  max-width: 430px;
  width: 100%;
  :deep(span) {
    border-bottom: 14px solid colors.$underline;
  }
}
.AlignCenter {
  text-align: center;
}
.AlignRight {
  text-align: right;
}
.AlignLeft{
  text-align: left;
}

</style>