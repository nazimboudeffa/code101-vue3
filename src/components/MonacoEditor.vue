<template>
   <v-btn
      color="primary"
      elevation="2"
      tile
      @click="runCode()"
   >Exécuter</v-btn>
   <div id="editor" class="flex flex-row h-full">
      <div id="split-0" class="h-full w-full">
         <div id="editorCode" class="h-full w-full"></div>
      </div>
      <iframe id="editorPreview" frameborder="0" class="h-full w-full"></iframe>
   </div>
</template>

<script>
import { onMounted } from "vue";
import * as monaco from 'monaco-editor';
//import loader from "@monaco-editor/loader";
import Split from 'split.js';

export default {
 name: "MonacoEditor",
 setup() {

let codeEditor = null;

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
        fontSize: 8,
        scrollbar: {
            useShadows: false,
            vertical: 'visible',
            horizontal: 'visible',
            horizontalScrollbarSize: 12,
            verticalScrollbarSize: 12
        },
        lineHeight: 30
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
    
      /*
      codeEditor.onDidChangeModelContent(() => {
         editorPreview.body.innerHTML = codeEditor.getValue();
      });
      */
   }
//});  

      const runCode = () => {
        document.getElementById('editorPreview').contentWindow.document.body.innerHTML = codeEditor.getValue();        
      }

onMounted(()=>{
   createEditor();
   Split(['#split-0', '#editorPreview']);
})

return { runCode }

}
};
</script>

<style>

.editor {
   position: fixed;
   background-color: #999;
   display: flex;
   justify-content: row;
   height: 100%;
   width: 100%;
}

#split-0 {
   width: 500px;
   height: 500px;
}

#editorCode {
   width: 100%;
   height: 100%;
}

#editorCode > * {
      width: 100%;
   height: 100%;
}
</style>