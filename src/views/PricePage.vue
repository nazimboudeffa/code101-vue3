<template>
<div class="cont">
  <h1>Nos tarifs</h1>
  <p>Ne payez que ce dont vous avez besoin</p>
  <div class="card-wrapper">
    <PricingCard title="Basic" price="0.00€">
      <ul>
        <li v-for="(item, index) in pricingDetails" :key="index">
          <div v-for="value in item" :key="value">
            <div class="list-item" v-if="index === 0">{{ value }}</div>
          </div>
        </li>
      </ul>
    </PricingCard>
    <PricingCard title="Pro" price="4.99€">
      <ul>
        <li v-for="(item, index) in pricingDetails" :key="index">
          <div v-for="value in item" :key="value">
            <div class="list-item" v-if="index === 1">{{ value }}</div>
          </div>
        </li>
      </ul>
    </PricingCard>
    <!--
    <PricingCard title="Team" price="9.99€">
      <ul>
        <li v-for="(item, index) in pricingDetails" :key="index">
          <div v-for="value in item" :key="value">
            <div class="list-item" v-if="index === 2">{{ value }}</div>
          </div>
        </li>
      </ul>
    </PricingCard>
    -->
  </div>
</div>
</template>

<script>
import { defineComponent } from "vue";
import PricingCard from "@/components/PricingCard.vue";
export default defineComponent({
  name: "PricePage",
  setup() {
    const pricingDetails = [
      {
        //users: "1 utilisateur",
        courses: "cours débutants",
        members: "zone membre"
      },
      {
        //users: "1 utilisateur",
        courses: "cours pro",
        member: "zone membre",
        roadmap: "roadmap"
      }
      /*,
      {
        users: "5 utilisateurs",
        courses: "cours pro",
        member: "zone membre",
        roadmap: "roadmap",
        career: "carrière"
      },
      */
    ];
    return {
      pricingDetails,
    };
  },
  components: {
    PricingCard,
  },
});
</script>
<style>
.cont {
  font-family: "Roboto", sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 3em;
  font-size: 18px !important;
}
.card-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 2em;
  padding: 20px;
  margin: 0 10em;
}
span {
  font-size: 1.8em;
}
ul {
  list-style: none;
  padding: 2em 3em 0;
}
.list-item {
  border-bottom: 1px solid #eee;
  padding: 10px 0;
  font-size: 15px;
}
.card:hover span {
  font-size: 2.5em;
}
.card:hover .list-item {
  border-top: 1px solid #2e2f30;
  border-bottom: 1px solid #2e2f30;
}
</style>