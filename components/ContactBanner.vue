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
  <section class="ContactBanner">
    <h2>{{ contactHeadline }}</h2>
    <div class="Contacts">
      <a :href="`tel:${contactNumber}`">{{ contactNumber }}</a>
      <a class="email" :href="`mailto:${contactEmail}`">{{ contactEmail }}</a>
    </div>
    <img :src="contactLogo" :alt="contactLogoAlt">
  </section>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.ContactBanner {
  background: linear-gradient(155deg, colors.$heroPrimary 31.38%,  colors.$heroSecondary 135.72%);
  min-height: 720px;
  width: 100%;
  text-align: center;
  justify-content: space-between;
  padding: 120px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 768px) {
    padding: 50px;
    min-height: unset;
    height: 450px;
  }

  h2{
    color: colors.$white;
    font-size: 48px;
    font-weight: 900;
    max-width: 655px;
    width: 100%;
    @media screen and (max-width: 768px) {
      font-size: 24px;
      line-height: 34px;
    }
  }
  .Contacts {
    gap: 40px;
    display: flex;
    @media screen and (max-width: 768px) {
      flex-direction: column;
      gap: 0;
      align-items: center;
    }
    a{
      white-space: nowrap;
      color: colors.$white;
      font-size: 30px;
      line-height: 40px;
      font-weight: 700;
      display: block;
      width: fit-content;
      text-decoration: none;
      @media screen and (max-width: 768px) {
        font-size: 22px;
      }
    }
    .email{
      color: colors.$ctaAndLink;
    }
  }
  img{
    max-width: 275px;
    width: 100%;
    @media screen and (max-width: 768px) {
      max-width: 145px;
    }
  }

}
</style>