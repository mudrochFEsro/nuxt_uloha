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
    margin: unset;
    :deep(h2) {
      text-align: left;
    }
  }
}
</style>