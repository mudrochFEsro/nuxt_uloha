<template>
  <div class="QuotationContainer">
    <slot name="quotation"></slot>
    <slot name="brand"></slot>
  </div>
</template>

<style scoped lang="scss">
.QuotationContainer {
  max-width: 420px;
  width: 100%;
  gap: 40px;
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 768px) {
    max-width: unset;
  }
}
</style>