<script setup lang="ts">


</script>

<template>
  <div class="QuotationBox">
    <slot></slot>
  </div>
</template>

<style scoped lang="scss">
@use "@/assets/scss/colors" as colors;

.QuotationBox {
  border: 1px solid colors.$border;
  padding: 35px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.QuotationBox::before {
  content: "";
  position: absolute;
  top: -30px;
  width: 55px;
  height: 43px;
  background-image: url("@/assets/img/quotationMarks.svg");
  background-repeat: no-repeat;
  background-size: contain;
}

</style>
