<script setup lang="ts">
import { ref, onMounted } from "vue";
import Headline from "@/components/UI/Headline.vue";
import HeadlineContainer from "@/components/UI/containers/HeadlineContainer.vue";

const contentB = {
  headlineText: "Rýchla a jednoduchá cesta k&nbsp;<span>výsledkom.</span>",
};

const align = ref<"Center" | "Left">("Center");

const updateAlignment = () => {
  if (typeof window !== "undefined") {
    align.value = window.innerWidth <= 768 ? "Left" : "Center";
  }
};

onMounted(() => {
  updateAlignment(); // Inicializácia pri načítaní komponentu
  window.addEventListener("resize", updateAlignment); // Počas zmeny veľkosti okna
});


</script>


<template>
  <div class="ContentB">
    <HeadlineContainer>
      <Headline
          :align=align
          :text="contentB.headlineText"
      />
    </HeadlineContainer>
  </div>
</template>

<style scoped lang="scss">
//.ContentB {
//
//}
</style>
