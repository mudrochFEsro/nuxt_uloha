<template>
  <div class="ListContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.ListContainer {
  max-width: 380px;
  width: 100%;
  @media screen and (max-width: 980px) {
    max-width: unset;
  }
}
</style>
