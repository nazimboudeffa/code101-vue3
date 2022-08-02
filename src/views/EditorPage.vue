<template>
  <v-app>
    <v-main>
      <MonacoEditor/>
    </v-main>
  </v-app>
</template>
<script>
import MonacoEditor from '../components/MonacoEditor.vue'

export default {
  name: "EditorPage",
  components: {
    MonacoEditor
  }
};
</script>