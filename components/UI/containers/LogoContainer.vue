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

  img:first-of-type {
    width: 100%;
    max-width: 185px;
  }
  img {
    width: 100%;
    max-width: 161px;
  }
  @media screen and (max-width: 576px) {
    img, img:first-of-type {
      width: 37vw;
    }
  }
}
</style>
