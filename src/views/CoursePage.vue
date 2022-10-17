<template>
  <v-app>
    <v-main>
      <div class="instructions">
          <h1>Cours {{course}}</h1>
          <p>Ajouter une balise h2 avec comme contenu <b>J'aime coder</b></p>
        </div>
      <!-- <MonacoEditor/> -->
    </v-main>
  </v-app>
</template>
<script>
import {useRoute} from 'vue-router'
//import MonacoEditor from '@/components/MonacoEditor.vue'

export default {
  name: "CoursePage",
  components: {
    //MonacoEditor
  },
  data(){
    return {
      course : ''
    }
  },
  mounted()
  {
    const route = useRoute();
    this.course = route.params.name;
  }
};
</script>
<style scoped>
.instructions {
   width: 30%;
}
</style>