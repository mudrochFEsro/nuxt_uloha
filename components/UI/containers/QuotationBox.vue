<!--<script setup lang="ts">-->
<!--import {ref} from "vue";-->

<!--const isExpanded = ref(false);-->

<!--const toggleExpand = () => {-->
<!--  isExpanded.value = !isExpanded.value;-->
<!--};-->
<!--</script>-->

<!--<template>-->
<!--  <div class="QuotationBox">-->
<!--    <p :class="{ expanded: isExpanded }">-->
<!--      <slot></slot>-->
<!--    </p>-->
<!--    <div class="toggle-text">-->
<!--      <span @click="toggleExpand">{{ isExpanded ? "... čítať menej" : "... čítať viac" }}</span>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<style scoped lang="scss">-->
<!--@use "@/assets/scss/colors" as colors;-->

<!--.QuotationBox {-->
<!--  border: 1px solid colors.$border;-->
<!--  padding: 35px 30px;-->
<!--  position: relative;-->
<!--  display: flex;-->
<!--  flex-direction: column;-->
<!--  justify-content: center;-->
<!--}-->

<!--.QuotationBox::before {-->
<!--  content: "";-->
<!--  position: absolute;-->
<!--  top: -30px;-->
<!--  width: 55px;-->
<!--  height: 43px;-->
<!--  background-image: url("@/assets/img/quotationMarks.svg");-->
<!--  background-repeat: no-repeat;-->
<!--  background-size: contain;-->
<!--}-->

<!--p {-->
<!--  color: colors.$black;-->
<!--  font-size: 16px;-->
<!--  line-height: 32px;-->
<!--  max-height: 224px;-->
<!--  overflow: hidden;-->
<!--  position: relative;-->
<!--}-->

<!--.expanded {-->
<!--  max-height: unset;-->
<!--  overflow: visible;-->
<!--}-->

<!--.toggle-text {-->
<!--  position: absolute;-->
<!--  color: colors.$ctaAndLink;-->
<!--  font-weight: 700;-->
<!--  background-color: colors.$white;-->
<!--  text-align: right;-->
<!--  padding-bottom: 41px;-->
<!--  padding-left: 5px;-->
<!--  padding-right: 115px;-->
<!--  right: 0;-->
<!--  bottom: 0;-->
<!--  @media screen and (max-width: 768px) {-->
<!--    padding-right: 32px;-->
<!--  }-->

<!--  span {-->
<!--    cursor: pointer;-->
<!--  }-->
<!--}-->
<!--</style>-->
<script>
export default {
  data() {
    return {
      isExpanded: false,  // Stav zobrazenia celého textu
      fullText: "Toto je nejaký dlhší text, ktorý sa má zobraziť na stránke. Text môže byť veľmi dlhý a mal by byť skrytý alebo zobrazený podľa potreby. Musí obsahovať dostatok informácií, aby to dávalo zmysel a slúžilo účelu testu. Tento text sa bude meniť v závislosti od toho, či je zobrazený celý alebo len časť."
    };
  },
  computed: {
    truncatedText() {
      if (this.isExpanded) {
        return this.fullText;  // Zobraziť celý text
      }
      return this.fullText.length > 225 ? this.fullText.slice(0, 225) + '...' : this.fullText;
    }
  },
  methods: {
    toggleText() {
      this.isExpanded = !this.isExpanded;  // Prepnúť stav rozbalenia
    }
  }
};
</script>
<template>
  <div class="text-container">
    <div class="text-content">
      <span>{{ truncatedText }}</span>
      <button v-if="fullText.length > 125" @click="toggleText" class="toggleButton">
        {{ isExpanded ? 'Zobraziť menej' : 'Zobraziť viac' }}
      </button>
    </div>
  </div>
</template>



<style scoped lang="scss">
@use "@/assets/scss/colors" as colors;
.text-container {
  max-width: 100%;
}

.text-content {
  height: auto;
}

.text-content span {
  max-width: 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: pre-wrap;
  line-height: 1.5em;
  display: inline;
}

.toggleButton {
  margin-left: 5px;
  color: white;
  border: none;
  cursor: pointer;
}
</style>