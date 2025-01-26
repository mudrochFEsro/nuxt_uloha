<template>
  <div class="BrandContainer">
    <slot name="brandLogo"></slot>
    <div class="BrandText">
      <slot name="brandText"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.BrandContainer {
  display: flex;
  gap: 20px;

  .BrandText {
    display: flex;
    flex-direction: column;
    justify-content: center;

    :deep(h3) {
      font-size: 16px;
      line-height: 22px;
      font-weight: 900;
    }
    :deep(a) {
      font-weight: 700;
    }
  }
}
</style>
