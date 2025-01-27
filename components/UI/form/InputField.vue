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
    <label :for="id">{{ label }}<span v-if="required" class="required">*</span></label>
    <input :id="id" :type="type" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)" class="inputField" />
    <span v-if="error" class="error">{{ error }}</span>
  </div>
</template>

<style scoped lang="scss">
.inputField {
  width: 100%;
  padding: 12px;
  border: unset;
  border-radius: 4px;
  font-size: 14px;
  background: #f5f5f5;
}
.inputField:focus {
  outline: none;
}
</style>