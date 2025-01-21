<template>
  <div class="HeadlineContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.HeadlineContainer {
  margin: 0 auto;
  max-width: 600px;
  @media screen and (max-width: 768px) {
    max-width: unset;
  }
}
</style>