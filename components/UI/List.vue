<script setup lang="ts">
import Tick from 'assets/img/tick.svg'
defineProps<{
  listTexts: string[]
}>();
</script>

<template>
  <ul>
    <li v-for="(listText, index) in listTexts" :key="index">
      {{ listText }}
    </li>
  </ul>
</template>

<style scoped lang="scss">
  ul{
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 30px;
    li{
      background-image: url('@/assets/img/tick.svg');
      background-repeat: no-repeat;
      background-position: 0 50%;
      background-size: 24px 24px;
      padding-left: 35px;
      font-size: 18px;
      line-height: 27px;
    }
  }
</style>