<script setup>
import { ref } from 'vue';
import InputField from '@/components/UI/form/InputField.vue';
import TextArea from '@/components/UI/form/TextArea.vue';
import Button from "@/components/UI/Button.vue";

const form = ref({ name: '', email: '', phone: '', website: '', note: '' });
const errors = ref({});
const successMessage = ref('');
const errorMessage = ref('');
const submitCount = ref(0);
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
const phoneRegex = /^[+]?[0-9]{10,15}$/;
const websiteRegex = /^(https?:\/\/)?([\w-]+\.)+[\w-]+(\/[\w-]*)*$/;

const validateForm = () => {
  errors.value = {};
  if (!form.value.name) {
    errors.value.name = 'Meno je povinné';
  }
  if (!form.value.email) {
    errors.value.email = 'E-mail je povinný';
  }
  if (form.value.email && !emailRegex.test(form.value.email)) {
    errors.value.email = 'Neplatný formát e-mailu';
  }
  if (!form.value.note) {
    errors.value.note = 'Poznámka je povinná';
  }
  if (form.value.phone && !phoneRegex.test(form.value.phone)) {
    errors.value.phone = 'Neplatný formát telefónneho čísla';
  }
  if (form.value.website && !websiteRegex.test(form.value.website)) {
    errors.value.website = 'Neplatný formát webstránky';
  }
  return Object.keys(errors.value).length === 0;
};

const submitForm = () => {
  submitCount.value++;
  if (submitCount.value % 2 === 0) {
    successMessage.value = 'Formulár bol úspešne odoslaný!';
    errorMessage.value = '';
    form.value = { name: '', email: '', phone: '', website: '', note: '' };
    errors.value = {};
  } else {
    if (validateForm()) {
      errorMessage.value = '';
      successMessage.value = 'Formulár bol úspešne odoslaný!';
      form.value = { name: '', email: '', phone: '', website: '', note: '' };
    } else {
      successMessage.value = '';
      errorMessage.value = 'Prosím, vyplňte všetky povinné polia správne.';
    }
  }
};
</script>

<template>
  <form @submit.prevent="submitForm">
    <InputField v-model="form.name" label="Meno" id="name" type="text" required :error="errors.name" />
    <div class="formRow">
      <InputField v-model="form.email" label="E-mail" id="email" type="email" required :error="errors.email" />
      <InputField v-model="form.phone" label="Tel. číslo" id="phone" type="text" :error="errors.phone" />
    </div>
    <InputField v-model="form.website" label="Webstránka" id="website" type="url" :error="errors.website" />
    <TextArea v-model="form.note" label="Poznámka" id="note" required :error="errors.note" />
    <Button ctaText="Kontaktujte ma" ctaSize="FullWidth" @click="submitForm"/>
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
    font-weight: 900;
    font-size: 16px;
    margin-bottom: 5px;
  }
}

.formRow {
  display: flex;
  gap: 15px;
  @media screen and (max-width: 768px) {
    flex-direction: column;
    gap: 0;
  }
}

.error, .required {
  color: colors.$red;
  margin-top: 10px;
  font-weight: 700;
  font-size: 14px;
}

.success {
  color: colors.$green;
  font-size: 14px;
  margin-top: 10px;
  font-weight: 700;
}
</style>
