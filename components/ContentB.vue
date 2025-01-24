<script setup lang="ts">
import Headline from "@/components/UI/Headline.vue";
import HeadlineContainer from "@/components/UI/containers/HeadlineContainer.vue";
import DirectionContainer from "~/components/UI/containers/DirectionContainer.vue";

const contentB = {
  headlineText: "Rýchla a jednoduchá cesta k&nbsp;<span>výsledkom.</span>",
};

</script>

<template>
  <div class="ContentB">
    <HeadlineContainer>
      <Headline
          align="Center"
          :text="contentB.headlineText"
      />
    </HeadlineContainer>
    <DirectionContainer direction="Left">
      <div class="NumberContainer">
        1
      </div>
    </DirectionContainer>
  </div>
</template>

<style scoped lang="scss">

</style>
