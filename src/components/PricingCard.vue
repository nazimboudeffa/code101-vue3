<template>
  <div class="card">
    <h2>{{ title }}</h2>
    <span>{{ price }}</span>
    <slot></slot>
    <Button text="S'inscrire" />
  </div>
</template>

<script>
import { defineComponent } from "vue";
import Button from "@/components/PricingButton.vue";
export default defineComponent({
  name: "PricingCard",
  props: {
    title: String,
    price: String,
    object: Object,
  },
  components: { Button },
  setup() {},
});
</script>

<style scoped>
.card {
  max-width: -webkit-fill-available;
  height: 450px;
  width: -webkit-fill-available;
  background-color: white;
  color: #141c3e;
  border-radius: 8px;
  min-width: 280px;
  max-width: 350px;
  padding: 8px;
  position: relative;
}
.card:hover {
  /*
  transform: scale(1.1);
  transition: transform 1s;
  */
  color: white;
  background-color: #141c3e;
}
</style>