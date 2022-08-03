<template>
   <div id="editor">
      <div id="split-0">
            <v-btn
      color="primary"
      elevation="2"
      tile
      icon="mdi-play"
      @click="runCode()"
   ></v-btn>
            <v-btn
      color="secondary"
      elevation="2"
      tile
      icon="mdi-stop"
      @click="initEditor()"
   ></v-btn>
         <div id="editorCode"></div>
      </div>
      <iframe id="editorPreview" frameborder="0"></iframe>
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
    (`<h1>Salut à tous !</h1>
<p>Ceci est l'éditeur du site code101.fr</p>
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

const initEditor = () => {
   console.log("init editor")

   const editorPreview = document.getElementById('editorPreview').contentWindow.document;
   editorPreview.body.innerHTML = HTML_CODE;
}

      const runCode = () => {
        document.getElementById('editorPreview').contentWindow.document.body.innerHTML = codeEditor.getValue();        
      }

onMounted(()=>{
   createEditor();
   Split(['#split-0', '#editorPreview']);
})

return { runCode, initEditor }

}
};
</script>

<style>

#editor {
   display: flex;
   justify-content: row;
   height: 100vh;
}

#split-0 {
   width: 100%;
   height: 100%;
   margin-left: 10px;
}

#editorCode {
   width: 100%;
   height: 100%;
   margin-right: 10px;
}

#editorCode > * {
      width: 100%;
   height: 100%;
}

#editorPreview {
   width: 100%;
   height: 100%;
}

.gutter {
  @apply dark:bg-gray-900 bg-no-repeat;
  background-position: 50%;
}
.gutter.gutter-horizontal {
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAeCAYAAADkftS9AAAAIklEQVQoU2M4c+bMfxAGAgYYmwGrIIiDjrELjpo5aiZeMwF+yNnOs5KSvgAAAABJRU5ErkJggg==');
  cursor: col-resize;
}
</style>