<script setup lang="ts">
import {ref, computed, useSlots, type VNode} from "vue";

const isExpanded = ref(false);
const slots = useSlots();

const getSlotText = (): string => {
  const slotContent = slots.default?.();
  if (!slotContent || slotContent.length === 0) return "";

  const firstNode = slotContent[0] as VNode;
  if (typeof firstNode.props?.text === "string") {
    return firstNode.props.text;
  }

  if (typeof firstNode.children === "string") {
    return firstNode.children;
  }

  return "";
};

const fullText = computed(() => getSlotText());

const truncatedText = computed(() => {
  if (isExpanded.value) {
    return fullText.value;
  }

  if (fullText.value.length > 286) {
    return fullText.value.slice(0, 286) + "...";
  }

  return fullText.value;
});

const hasTextSlot = computed(() => fullText.value.length > 0);

const toggleText = () => {
  isExpanded.value = !isExpanded.value;
};
</script>

<template>
  <div class="ExpandableText">
    {{ truncatedText }}
    <button v-if="hasTextSlot" @click="toggleText" >
      {{ isExpanded ? "čítať menej" : "čítať viac" }}
    </button>
  </div>
</template>


<style scoped lang="scss">
@use "@/assets/scss/colors" as colors;
.ExpandableText {
    line-height: 32px;
}


button {
  color: colors.$ctaAndLink;
  background-color: transparent;
  border: none;
  cursor: pointer;
  font-size: 16px;
  font-weight: 800;
}
</style>
