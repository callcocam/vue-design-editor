// src/index.js
import Editor from '@/components/Editor.vue'

// Configuração padrão
import { EDITOR_CONFIG } from '@/config/editorConfig'

// Composables

// Plugin install function
export default {
    install: (app, options = {}) => {
        // Registra os componentes globalmente
        app.component('DesignEditor', Editor)

        // Registra os elementos

        const componentRegistry = [];
        Object.entries(import.meta.glob('@/components/elements/**/*.vue', { eager: true })).forEach(([path, definition]) => {
            const originalName = path.split('/').pop().replace(/\.\w+$/, '');
            // OriginalName => SidebarItem
            if (componentRegistry.indexOf(originalName) === -1) {
                app.component(originalName, definition.default);
            }
            componentRegistry.push(originalName);
        });

        // Mescla as configurações personalizadas com as padrões
        const config = {
            ...EDITOR_CONFIG,
            ...options
        }

        // Fornece a configuração via injeção
        app.provide('editorConfig', config)
    }
}
  