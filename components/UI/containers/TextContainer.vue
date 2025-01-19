<template>
  <div class="TextContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.TextContainer {
  max-width: 460px;
  width: 100%;

  @media screen and (max-width: 576px) {
    max-width: unset;
    margin: 0 auto;
  }
}
</style>
