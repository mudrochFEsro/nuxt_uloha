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
    <label :for="id">{{ label }}<span v-if="required" class="required">*</span></label>
    <textarea :id="id" :value="modelValue" @input="$emit('update:modelValue', $event.target.value)"
              class="textareaField" placeholder="Je niečo čo by ste sa nás chceli spýtať?"></textarea>
    <span v-if="error" class="error">{{ error }}</span>
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
}
.textareaField:focus {
  outline: none;
}
</style>