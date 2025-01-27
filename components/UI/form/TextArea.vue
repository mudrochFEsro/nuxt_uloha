<script setup>
defineProps({
  modelValue: String,
  label: String,
  id: String,
  required: Boolean,
  error: String
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="formGroup">
    <label :for="id">{{ label }}<span v-if="required" class="required"> *</span></label>
    <textarea :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
              class="textareaField" placeholder="Je niečo čo by ste sa nás chceli spýtať?"></textarea>
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>
<style scoped lang="scss">
@use 'assets/scss/colors' as colors;
.textareaField {
  width: 100%;
  padding: 12px;
  border: unset;
  border-radius: 4px;
  font-size: 14px;
  background: colors.$input;
  min-height: 130px;
  resize: none;
  @media screen and (max-width: 768px) {
    min-height: 90px;

  }
}
.textareaField:focus {
  outline: none;
}

</style>