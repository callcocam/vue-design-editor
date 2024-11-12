# Vue Design Editor

![Vue Design Editor](editor-preview.png)

> Um editor de design visual poderoso e flexível para Vue 3

[![npm version](https://img.shields.io/npm/v/vue-design-editor.svg)](https://www.npmjs.com/package/vue-design-editor)
[![license](https://img.shields.io/npm/l/vue-design-editor.svg)](https://github.com/yourusername/vue-design-editor/blob/main/LICENSE)

## ✨ Características

- 🎨 Interface intuitiva e amigável
- 📦 Múltiplos tipos de elementos (retângulo, círculo, texto)
- 🔄 Transformações (mover, redimensionar, rotacionar)
- 📏 Guias de alinhamento inteligentes
- 🎯 Snap à grade e outros elementos
- 🔍 Zoom e navegação
- ⌨️ Atalhos de teclado
- 📱 Suporte a dispositivos móveis
- 🎨 Totalmente personalizável com Tailwind CSS

## 🚀 Início Rápido

```bash
# Instalar via npm
npm install vue-design-editor

# ou yarn
yarn add vue-design-editor
```

```javascript
// main.js
import { createApp } from 'vue'
import App from './App.vue'
import DesignEditor from 'vue-design-editor'
import 'vue-design-editor/style.css'

const app = createApp(App)
app.use(DesignEditor,{
    // custon congig
})
app.mount('#app')
```

```vue
<!-- App.vue -->
<template>
  <DesignEditor
    v-model:elements="elements"
    :canvas-width="1080"
    :canvas-height="1080"
  />
</template>

<script setup>
import { ref } from 'vue'

const elements = ref([])
</script>
```

## 📚 [Documentação Completa](./docs/README.md)

- [Guia de Instalação](./docs/installation.md)
- [Uso Básico](./docs/basic-usage.md)
- [Configuração](./docs/configuration.md)
- [API](./docs/api.md)
- [Exemplos](./docs/examples.md)

## 🤝 Contribuindo

Contribuições, issues e pedidos de features são bem-vindos!

## 📄 Licença

[MIT](./LICENSE)