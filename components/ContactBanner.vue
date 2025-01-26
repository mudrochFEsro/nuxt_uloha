<script setup lang="ts">
defineProps<{
  contactHeadline: string;
  contactNumber: string;
  contactEmail: string;
  contactLogo: string;
  contactLogoAlt: string;
}>();

</script>

<template>
  <div class="ContactBanner">

  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.ContactBanner {
  background: linear-gradient(155deg, colors.$heroPrimary 31.38%,  colors.$heroSecondary 135.72%);
  min-height: 720px;
  width: 100%;
  text-align: center;
  padding: 50px;
  @media screen and (max-width: 768px) {
    padding: 25px 25px 50px 25px;
    min-height: unset;
    height: 410px;
  }


}
</style>