<template>
  <div class="LogoContainer">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
.LogoContainer {
  justify-content: flex-end;
  display: flex;
  height: fit-content;
  gap: 40px;
  width: 100%;

  @media screen and (max-width: 980px) {
    align-items: center;
    flex-direction: column;
    max-width: unset;
  }
  @media screen and (max-width: 576px) {
    flex-direction: row;
    justify-content: center;
    gap: 10vw;
  }

  ::v-deep(img:first-of-type) {
    max-width: 185px;
  }
  ::v-deep(img) {
    width: 100%;
    max-width: 161px;
  }
  @media screen and (max-width: 576px) {
    ::v-deep(img), ::v-deep(img:first-of-type) {
      max-width: unset;
    }
  }
  @media screen and (max-width: 450px) {
    ::v-deep(img), ::v-deep(img:first-of-type) {
      width: 36.5vw;
    }
  }
}
</style>
