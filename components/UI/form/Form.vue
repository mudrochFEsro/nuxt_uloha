<script setup>
import { ref } from 'vue';
import CloseButton from '@/assets/img/cross.svg';
import Button from "~/components/UI/Button.vue";
const isOpen = ref(true);
const form = ref({ name: '', email: '', phone: '', website: '', note: '' });
const errors = ref({});
const successMessage = ref('');
const errorMessage = ref('');

const validateForm = () => {
  errors.value = {};
  if (!form.value.name) errors.value.name = 'Meno je povinné';
  if (!form.value.email) errors.value.email = 'E-mail je povinný';
  if (!form.value.note) errors.value.note = 'Poznámka je povinná';
  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  if (validateForm()) {
    successMessage.value = 'Formulár bol úspešne odoslaný!';
    errorMessage.value = '';
    form.value = { name: '', email: '', phone: '', website: '', note: '' };
  } else {
    errorMessage.value = 'Prosím, vyplňte všetky povinné polia správne.';
    successMessage.value = '';
  }
};
const closePopup = () => {
  isOpen.value = false;
};
</script>

<template>
  <div v-if="isOpen" class="popupOverlay">
    <div class="popup">
      <img class="closePopup" alt="Zavrieť" :src="CloseButton"  @click="closePopup" >
      <h2 class="popupTitle">Jednoducho nám napíšte a&nbsp;my sa vám ozveme.</h2>
      <form @submit.prevent="submitForm">
        <div class="formGroup">
          <label for="name">Meno: <span class="required">*</span></label>
          <input v-model="form.name" id="name" type="text"  class="inputField" />
          <span v-if="errors.name" class="error">{{ errors.name }}</span>
        </div>
        <div class="formRow">
          <div class="formGroup">
            <label for="email">E-mail: <span class="required">*</span></label>
            <input v-model="form.email" id="email" type="email"  class="inputField" />
            <span v-if="errors.email" class="error">{{ errors.email }}</span>
          </div>
          <div class="formGroup">
            <label for="phone">Tel. číslo:</label>
            <input v-model="form.phone" id="phone" type="text" class="inputField" />
          </div>
        </div>
        <div class="formGroup">
          <label for="website">Webstránka:</label>
          <input v-model="form.website" id="website" type="url" class="inputField" />
        </div>
        <div class="formGroup">
          <label for="note">Poznámka: <span class="required">*</span></label>
          <textarea v-model="form.note" id="note"  class="textareaField" placeholder="Je niečo čo by ste sa nás chceli spýtať?"></textarea>
          <span v-if="errors.note" class="error">{{ errors.note }}</span>
        </div>
        <Button
            ctaText="Kontaktujte ma"
            ctaSize="FullWidth"
        />
      </form>
      <p v-if="successMessage" class="success">{{ successMessage }}</p>
      <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
    </div>
  </div>
</template>



<style lang="scss">
@use 'assets/scss/colors' as colors;
.popupOverlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(255, 255, 255, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}
.popup {
  box-shadow: 0 32px 45px 0 rgba(0, 0, 0, 0.1498);
  background: colors.$white;
  padding: 60px 40px 40px 40px;
  width: 500px;
  text-align: center;
  position: relative;
  .closePopup{
    position: absolute;
    top: 20px;
    right: 20px;
    width: fit-content;
    cursor: pointer;
  }
  .popupTitle {
    font-size: 30px;
    line-height: 44px;
    font-weight: 900;
    margin-bottom: 25px;
  }
}

.formGroup {
  margin-bottom: 15px;
  text-align: left;
  width: 100%;
  label {
    display: block;
    font-weight: bold;
    font-size: 14px;
    margin-bottom: 5px;
  }
}

.required {
  color: red;
}
.inputField, .textareaField {
  width: 100%;
  padding: 12px;
  border: unset;
  border-radius: 4px;
  font-size: 14px;
  background: #f5f5f5;
}
.inputField:focus, .textareaField:focus {
  outline: none;
}
.textareaField {
  min-height: 130px;
  resize: none;
}
.formRow {
  display: flex;
  gap: 15px;
}
.error {
  color: red;
  font-size: 12px;
}
.success {
  color: green;
  font-size: 14px;
}
</style>
