<script setup lang="ts">
import Tick from '@/assets/img/tick.svg';

defineProps<{
  listTexts: string[]
}>();
</script>

<template>
  <ul>
    <li v-for="(listText, index) in listTexts" :key="index">
      <img :src="Tick" alt="Checkmark icon" class="icon" />
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
  align-items: center;
  gap: 15px;
  font-size: 18px;
  line-height: 27px;
}

.icon {
  width: 24px;
  height: 24px;
}
</style>
