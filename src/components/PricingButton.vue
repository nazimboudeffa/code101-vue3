<template>
  <a href="https://fr.tipeee.com/nazimboudeffa/news/147467" target="_blank" class="button">
    {{ text }}
  </a>
</template>

<script>
import { defineComponent } from "vue";
export default defineComponent({
  name: "PricingButton",
  props: {
    text: String,
  },
  setup() {},
});
</script>

<style scoped>
.button {
  width: 70%;
  color: white;
  background-color: #141C3E;
  border: 2px solid white;
  height: 40px;
  border-radius: 18px;
  bottom: 10%;
  position: absolute;
  left: 15%;
  font-size: inherit;
  text-decoration: none;
  padding-top: 5px;
  padding-bottom: 5px;
}
.card:hover .button {
  color: #141C3E;
  background-color: white;
  border: 2px solid #141C3E;
  cursor: pointer;
}
</style>