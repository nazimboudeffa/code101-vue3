<template>
  <!-- <div id="editor" style="width: 500px; height: 500px"></div> -->
  <v-container fluide>
    <div class="course">
      <div class="instructions">
         <h1>Cours 1</h1>
         <p>Ajouter une balise h2 avec comme contenu <b>J'aime coder</b></p>
      </div>
      <div class="code">
         <div id="editorCode" ref="editorRef"></div>
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
import * as monaco from 'monaco-editor';
//import loader from "@monaco-editor/loader";


export default {
 name: "MonacoEditor",
 setup() {

let codeEditor = null;
let codeValue;

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

window.MonacoEnvironment = {
   getWorkerUrl: function() {
      return `data:text/javascript;charset=utf-8,${encodeURIComponent(`
        self.MonacoEnvironment = {
          baseUrl: 'https://cdn.jsdelivr.net/npm/monaco-editor/min/'
        };
        importScripts('https://cdn.jsdelivr.net/npm/monaco-editor/min/vs/base/worker/workerMain.js');`)}`;
   }
};

//let codeValue;
//loader.init().then((monaco) => {
   const createEditor = () => {
      monaco.editor.defineTheme("lightBlue", {
        base: "vs-dark",
        inherit: true,
        rules: [{ background: "#1D252C" }],
        colors: {
          "editor.background": "#1D252C",
        },
      });

      monaco.editor.setTheme("lightBlue");

      codeEditor = monaco.editor.create(document.getElementById('editorCode'), editorOptions);
      const editorPreview = document.getElementById('editorPreview').contentWindow.document;
      editorPreview.body.innerHTML = HTML_CODE;
    
      codeEditor.onDidChangeModelContent(() => {
         //editorPreview.body.innerHTML = codeEditor.getValue();
         codeValue = codeEditor.value.getValue();
      });
   }
//});  

      const getValue = () => {
        console.log('codeEditor.getValue', codeEditor.getValue());        
      }

onMounted(()=>{
   createEditor()
})

return { getValue, codeValue }

},
 methods: {
   runCode: ()=>{
      console.log("runCode");
      //console.log(codeValue)
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