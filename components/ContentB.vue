<script setup lang="ts">
import { ref, watchEffect } from "vue";
import Headline from "@/components/UI/Headline.vue";

const contentB = {
  headlineText: "Rýchla a jednoduchá cesta k&nbsp;<span>výsledkom.</span>",
};

const align = ref<"Center" | "Left">("Center");
const updateAlignment = () => {
  align.value = window.innerWidth < 768 ? "Left" : "Center";
};

watchEffect(() => {
  updateAlignment();
  window.addEventListener("resize", updateAlignment);
});


</script>

<template>
  <div class="ContentB">
    <div class="HeadlineContainer">
      <Headline
          :align=align
          :text="contentB.headlineText"
      />
    </div>
  </div>
</template>

<style scoped lang="scss">
.ContentB {
  .HeadlineContainer {
    margin: 0 auto;
    max-width: 600px;
    @media screen and (max-width: 768px) {
      max-width: unset;
    }
  }
}
</style>
