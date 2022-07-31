<template>
  <!-- <div id="editor" style="width: 500px; height: 500px"></div> -->
  <div class="wrapper">
    <div class="editor">
        <div class="editor__code">
            <div id="editorCode"></div>
        </div>

        <div class="editor__preview">
            <iframe id="editorPreview" frameborder="0"></iframe>
        </div>
    </div>
  </div>
</template>

<script>
import loader from "@monaco-editor/loader";

export default {
 name: "MonacoEditor",
 async mounted() {

const HTML_CODE = (`
<h1>Hello World</h1>
<p>This is the Monaco Editor for code101.fr</p>
`);

   loader.init().then((monaco) => {

      const editorOptions = {
        value: HTML_CODE,
        language: "html",
        minimap: { enabled: false },
        automaticLayout: true,
        contextmenu: false,
        fontSize: 12,
        scrollbar: {
          useShadows: false,
          vertical: "visible",
          horizontal: "visible",
          horizontalScrollbarSize: 12,
          verticalScrollbarSize: 12
        }
       };

     let editor = monaco.editor.create(document.getElementById("editorCode"), editorOptions);
     const editorPreview = document.getElementById('editorPreview').contentWindow.document;
      editorPreview.body.innerHTML = HTML_CODE;

      editor.onDidChangeModelContent(() => {
          editorPreview.body.innerHTML = editor.getValue();
      });
    
   });
  
 },
};
</script>

<style>
html,
body {
   margin: 0;
   padding: 0;
}

.wrapper {
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
}

.editor {
   width: 100%;
   max-width: 900px;
   margin: 50px auto 40px;
   height: 500px;
   display: flex;
   box-shadow: 0 7px 7px rgba(0, 0, 0, .1), 0 -2px 3px rgba(0, 0, 0, .125);
}

.editor__code {
   position: relative;
   border: none;
   flex-basis: 70%;
}

.editor__preview {
   position: relative;
   flex-basis: 30%;
}

.editor__code > *,
.editor__preview > * {
   position: absolute;
   width: 100%;
   height: 100%;
}
</style>