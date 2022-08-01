<template>
  <!-- <div id="editor" style="width: 500px; height: 500px"></div> -->
  <v-container fluide>
    <div class="course">
      <div class="instructions">
         <h1>Cours 1</h1>
         <p>Ajouter une balise h2 avec comme contenu <b>J'aime coder</b></p>
      </div>
      <div class="code">
         <div id="editorCode"></div>
         <v-btn
            color="primary"
            elevation="2"
            tile
            @click="runCode()"
         >Exécuter</v-btn>
      </div>

      <div class="preview">
         <iframe id="editorPreview" frameborder="0"></iframe>
      </div>
    </div>
   </v-container>
</template>

<script>
import { onMounted } from "vue";
//import loader from "@monaco-editor/loader";
import * as monaco from "monaco-editor";

export default {
 name: "MonacoEditor",
 setup() {
      let codeEditor = null;

      function initEditor() {
const HTML_CODE = 
    (`<h1>Hello Monde</h1>
<p>This is the Monaco Editor for code101.fr</p>
`);

    const editorOptions = {
        value: HTML_CODE,
        language: 'html',
        minimap: { enabled: false },
        automaticLayout: true,
        contextmenu: false,
        fontSize: 12,
        scrollbar: {
            useShadows: false,
            vertical: 'visible',
            horizontal: 'visible',
            horizontalScrollbarSize: 12,
            verticalScrollbarSize: 12
        }
    };


//loader.init().then((monaco) => {
      codeEditor = monaco.editor.create(document.getElementById('editorCode'), editorOptions);
      const editorPreview = document.getElementById('editorPreview').contentWindow.document;
      editorPreview.body.innerHTML = HTML_CODE;
    
   //console.log(codeEditor.getValue());
//});  
}    
      

      onMounted(() => {
      initEditor();
      })

      return { codeEditor }
   },
 methods: {
   runCode: ()=>{
            console.log("runCode");
      //console.log(codeEditor.getValue());
   }
 }
};
</script>

<style>
.course {
   position: fixed;
   top: 0;
   left: 0;
   right: 0;
   bottom: 0;
   background-color: #999;
   padding: 10px;
   margin: 0px;
   display: flex;
   flex-direction: row;
   flex-wrap: nowrap;
   justify-content: space-evenly;
   align-items: stretch;
}

.instructions {
   width: 30%;
}

.code {
  background-color: #efefef;
  flex-grow: 1;
  width: 50%;
  height: 90%;
}

.preview {
   width: 20%;
   margin-left: 10px;
}

.code > *{
   height: 100%;
}

</style>