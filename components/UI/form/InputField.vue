<script setup>
defineProps({
  modelValue: String,
  label: String,
  id: String,
  type: String,
  required: Boolean,
  error: String
});
defineEmits(["update:modelValue"]);
</script>

<template>
  <div class="formGroup">
    <label :for="id">{{ label }}<span v-if="required" class="required"> *</span></label>
    <input :id="id" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="inputField" />
    <div v-if="error" class="error">{{ error }}</div>
  </div>
</template>

<style scoped lang="scss">
@use 'assets/scss/colors' as colors;

.inputField {
  width: 100%;
  padding: 12px;
  border: unset;
  border-radius: 4px;
  font-size: 14px;
  background: colors.$input;
}
.inputField:focus {
  outline: none;
}

</style>