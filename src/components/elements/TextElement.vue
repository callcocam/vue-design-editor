<template>
    <div :class="{
        'element': true,
        'selected': selectedElements.has(element.id)
    }" :style="getElementStyle(element)">
        <!-- Conteúdo específico do elemento baseado no tipo -->
        <div class="text-content" :style="{
            color: element.textColor,
            fontSize: `${element.fontSize}px`,
            fontFamily: element.fontFamily,
        }">
            {{ element.text }}
        </div>
        <!-- Controles de manipulação -->
        
       <slot />
    </div>
</template>
<script setup>
import { useElementInteraction } from '@/composables/useElementInteraction'
const props = defineProps({
    element: {
        type: Object,
        required: true
    },
    selectedElements: {
        type: Set,
        required: true
    }
}) 

const { getElementStyle } = useElementInteraction()
 

</script>
