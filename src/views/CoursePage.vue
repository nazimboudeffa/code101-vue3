<template>
  <v-app>
    <v-main>
      <div class="instructions">
          <h1>Cours 1</h1>
          <p>Ajouter une balise h2 avec comme contenu <b>J'aime coder</b></p>
        </div>
      <MonacoEditor/>
    </v-main>
  </v-app>
</template>
<script>
import MonacoEditor from '@/components/MonacoEditor.vue'

export default {
  name: "CoursePage",
  components: {
    MonacoEditor
  }
};
</script>
<style scoped>
.instructions {
   width: 30%;
}
</style>