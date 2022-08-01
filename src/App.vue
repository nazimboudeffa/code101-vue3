<template>
  <v-app>
    <v-main>
      <MonacoEditor/>
    </v-main>
  </v-app>
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import MonacoEditor from './components/MonacoEditor.vue'

export default {
  name: 'App',

  components: {
    MonacoEditor,
  },

  data: () => ({
    //
  }),
}
</script>
