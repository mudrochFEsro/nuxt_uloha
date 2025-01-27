<script setup>
import { ref, onMounted } from 'vue';
import { eventBus } from '@/eventBus';
import CloseButton from '@/assets/img/cross.svg';
import Form from '@/components/UI/form/Form.vue';

const isOpen = ref(false);
const isClosing = ref(false);

const closePopup = () => {
  isClosing.value = true;
  setTimeout(() => {
    isOpen.value = false;
    isClosing.value = false;
  }, 100);
};

const openPopup = () => {
  isOpen.value = true;
};

onMounted(() => {
  eventBus.on('openPopup', openPopup);
});
</script>

<template>
  <div :class="['popupOverlay', { fadeIn: isOpen, fadeOut: isClosing }]">
    <div class="popup">
      <img class="closePopup" alt="Zavrieť" :src="CloseButton" @click="closePopup">
      <h2 class="popupTitle">Jednoducho nám napíšte a&nbsp;my sa vám ozveme.</h2>
      <Form />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: colors.$popupOverlay;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.1s ease;

  @media screen and (max-width: 768px) {
    padding: 20px;
  }

  .popup {
    box-shadow: 0 32px 45px 0 colors.$shadow;
    background: colors.$white;
    padding: 60px 40px 40px 40px;
    width: 500px;
    text-align: center;
    position: relative;

    .closePopup {
      position: absolute;
      top: 20px;
      right: 20px;
      width: fit-content;
      cursor: pointer;
    }

    .popupTitle {
      color: colors.$black;
      font-size: 30px;
      line-height: 44px;
      font-weight: 900;
      margin-bottom: 25px;

      @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 34px;
      }
    }
  }
}

.fadeIn {
  opacity: 1;
  pointer-events: all;
}

.fadeOut {
  opacity: 0;
  pointer-events: none;
}
</style>
