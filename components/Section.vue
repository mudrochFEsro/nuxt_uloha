<template>
  <section>
    <slot>
    </slot>
  </section>
</template>

<style scoped lang="scss">
  section {
    padding: 90px 30px 0 30px;
    margin: 0 auto;
    width: 100%;
    max-width: 980px;
    @media screen and (max-width: 576px) {
      padding: 50px 25px 0 25px;
    }
  }
</style>