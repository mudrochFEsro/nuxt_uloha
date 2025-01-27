// Form.vue
<script setup>
import { ref } from 'vue';
import InputField from '@/components/UI/form/InputField.vue';
import TextArea from '@/components/UI/form/TextArea.vue';
import Button from "~/components/UI/Button.vue";

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
</script>

<template>
  <form @submit.prevent="submitForm">
    <InputField v-model="form.name" label="Meno" id="name" type="text" required :error="errors.name" />
    <div class="formRow">
      <InputField v-model="form.email" label="E-mail" id="email" type="email" required :error="errors.email" />
      <InputField v-model="form.phone" label="Tel. číslo" id="phone" type="text" />
    </div>
    <InputField v-model="form.website" label="Webstránka" id="website" type="url" />
    <TextArea v-model="form.note" label="Poznámka" id="note" required :error="errors.note" />
    <Button ctaText="Kontaktujte ma" ctaSize="FullWidth" />
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error">{{ errorMessage }}</p>
  </form>
</template>



<style lang="scss">
@use 'assets/scss/colors' as colors;
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
