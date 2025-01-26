<template>
  <div class="NumberContainer">
    <slot name="arrow-left"></slot>
    <slot name="image"></slot>
    <div class="NumberContainerText">
      <slot name="text"></slot>
    </div>
    <slot name="arrow-right"></slot>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

.NumberContainer {
  display: flex;
  gap: 40px;
  align-items: center;
  position: relative;
  @media screen and (max-width: 768px) {
    justify-content: flex-start;
    align-items: flex-start;
    gap: 30px;
  }

  ::v-deep(.NumberContainerText) {
    max-width: 380px;
    width: 100%;

    h3 {
      color: colors.$black;
      font-weight: 900;
      font-size: 24px;
    }

    p {
      color: colors.$black;
      line-height: 28px;
    }
  }

  ::v-deep(img) {
    @media screen and (max-width: 768px) {
      padding-top: 10px;
    }
  }

  ::v-deep(.arrow) {
    position: absolute;
    top: 47px;

    @media screen and (max-width: 768px) {
      visibility: hidden;
      display: none;
    }
  }

  ::v-deep(.right) {
    right: -110px;
  }

  ::v-deep(.left) {
    left: -110px;
    transform: scaleX(-1);
  }
}

</style>
