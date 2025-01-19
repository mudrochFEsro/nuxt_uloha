<script setup lang="ts">
import Tick from '@/assets/img/tick.svg';

defineProps<{
  listTexts: string[]
}>();
</script>

<template>
  <ul>
    <li v-for="(listText, index) in listTexts" :key="index">
      <img :src="Tick" alt="Checkmark"  />
      <span>{{ listText }}</span>
    </li>
  </ul>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 0;
}

li {
  display: flex;
  align-items: flex-start;
  gap: 15px;
  font-size: 18px;
  line-height: 27px;
  @media screen and (max-width: 576px) {
    gap: 20px;
  }
  img {
    width: 24px;
    height: 24px;
  }
}


</style>
