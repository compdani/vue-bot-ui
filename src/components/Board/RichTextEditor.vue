<template>
  <div class="rich-text-editor">
    <!-- Toolbar -->
    <div v-if="editor && showToolbar" class="editor-toolbar">
      <button
        type="button"
        @click="editor.chain().focus().toggleBold().run()"
        :class="{ 'is-active': editor.isActive('bold') }"
        class="toolbar-btn"
        title="Bold (Ctrl+B)"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiFormatBold" fill="currentColor" />
        </svg>
      </button>
      
      <button
        type="button"
        @click="editor.chain().focus().toggleItalic().run()"
        :class="{ 'is-active': editor.isActive('italic') }"
        class="toolbar-btn"
        title="Italic (Ctrl+I)"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiFormatItalic" fill="currentColor" />
        </svg>
      </button>
      
      <button
        type="button"
        @click="editor.chain().focus().toggleStrike().run()"
        :class="{ 'is-active': editor.isActive('strike') }"
        class="toolbar-btn"
        title="Strikethrough"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiFormatStrikethrough" fill="currentColor" />
        </svg>
      </button>
      
      <div class="toolbar-divider"></div>
      
      <button
        type="button"
        @click="editor.chain().focus().toggleBulletList().run()"
        :class="{ 'is-active': editor.isActive('bulletList') }"
        class="toolbar-btn"
        title="Bullet List"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiFormatListBulleted" fill="currentColor" />
        </svg>
      </button>
      
      <button
        type="button"
        @click="editor.chain().focus().toggleOrderedList().run()"
        :class="{ 'is-active': editor.isActive('orderedList') }"
        class="toolbar-btn"
        title="Numbered List"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiFormatListNumbered" fill="currentColor" />
        </svg>
      </button>
      
      <div class="toolbar-divider"></div>
      
      <button
        type="button"
        @click="setLink"
        :class="{ 'is-active': editor.isActive('link') }"
        class="toolbar-btn"
        title="Add Link"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiLink" fill="currentColor" />
        </svg>
      </button>
      
      <button
        type="button"
        @click="editor.chain().focus().toggleCode().run()"
        :class="{ 'is-active': editor.isActive('code') }"
        class="toolbar-btn"
        title="Inline Code"
      >
        <svg viewBox="0 0 24 24" class="toolbar-icon">
          <path :d="mdiCodeTags" fill="currentColor" />
        </svg>
      </button>
    </div>
    
    <!-- Editor Content -->
    <editor-content :editor="editor" class="editor-content" />
  </div>
</template>

<script setup>
import { ref, watch, onMounted, onBeforeUnmount } from 'vue'
import { useEditor, EditorContent } from '@tiptap/vue-3'
import StarterKit from '@tiptap/starter-kit'
import Link from '@tiptap/extension-link'
import Placeholder from '@tiptap/extension-placeholder'
import TurndownService from 'turndown'
import {
  mdiFormatBold,
  mdiFormatItalic,
  mdiFormatStrikethrough,
  mdiFormatListBulleted,
  mdiFormatListNumbered,
  mdiLink,
  mdiCodeTags
} from '@mdi/js'

const props = defineProps({
  modelValue: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Type your message...'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  showToolbar: {
    type: Boolean,
    default: false
  }
})

const emit = defineEmits(['update:modelValue'])

const turndownService = new TurndownService({
  headingStyle: 'atx',
  codeBlockStyle: 'fenced'
})

const editor = useEditor({
  extensions: [
    StarterKit.configure({
      heading: {
        levels: [1, 2, 3]
      }
    }),
    Link.configure({
      openOnClick: false,
      HTMLAttributes: {
        target: '_blank',
        rel: 'noopener noreferrer'
      }
    }),
    Placeholder.configure({
      placeholder: props.placeholder
    })
  ],
  editable: !props.disabled,
  content: '',
  onUpdate: ({ editor }) => {
    const html = editor.getHTML()
    const markdown = turndownService.turndown(html)
    emit('update:modelValue', markdown)
  }
})

const setLink = () => {
  const previousUrl = editor.value.getAttributes('link').href
  const url = window.prompt('URL', previousUrl)

  if (url === null) {
    return
  }

  if (url === '') {
    editor.value.chain().focus().extendMarkRange('link').unsetLink().run()
    return
  }

  editor.value.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
}

watch(() => props.disabled, (newVal) => {
  if (editor.value) {
    editor.value.setEditable(!newVal)
  }
})

watch(() => props.placeholder, (newVal) => {
  if (editor.value) {
    editor.value.extensionManager.extensions.find(
      ext => ext.name === 'placeholder'
    ).options.placeholder = newVal
  }
})

onBeforeUnmount(() => {
  if (editor.value) {
    editor.value.destroy()
  }
})

defineExpose({
  clear: () => {
    if (editor.value) {
      editor.value.commands.clearContent()
    }
  },
  focus: () => {
    if (editor.value) {
      editor.value.commands.focus()
    }
  }
})
</script>

<style scoped>
.rich-text-editor {
  display: flex;
  flex-direction: column;
  width: 100%;
}

.editor-toolbar {
  display: flex;
  gap: 2px;
  padding: 6px 8px;
  border-bottom: 1px solid #f0f0f0;
  background: #fafbfc;
  flex-wrap: wrap;
  align-items: center;
}

.toolbar-btn {
  background: transparent;
  border: none;
  padding: 5px;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.15s ease;
  color: #6b7280;
  min-width: 28px;
  min-height: 28px;
}

.toolbar-btn:hover {
  background: rgba(0, 0, 0, 0.06);
  color: #374151;
}

.toolbar-btn.is-active {
  background: #e5e7eb;
  color: #1f2937;
}

.toolbar-icon {
  width: 16px;
  height: 16px;
}

.toolbar-divider {
  width: 1px;
  height: 20px;
  background: #e5e7eb;
  margin: 0 4px;
}

.editor-content {
  flex: 1;
  min-height: 44px;
  max-height: 120px;
  overflow-y: auto;
  padding: 10px 12px;
}

.editor-content :deep(.ProseMirror) {
  outline: none;
  min-height: 40px;
}

.editor-content :deep(.ProseMirror p.is-editor-empty:first-child::before) {
  content: attr(data-placeholder);
  float: left;
  color: #95a5a6;
  pointer-events: none;
  height: 0;
}

.editor-content :deep(.ProseMirror p) {
  margin: 0;
  line-height: 1.5;
}

.editor-content :deep(.ProseMirror strong) {
  font-weight: 600;
}

.editor-content :deep(.ProseMirror em) {
  font-style: italic;
}

.editor-content :deep(.ProseMirror code) {
  background: rgba(0, 0, 0, 0.05);
  padding: 2px 4px;
  border-radius: 3px;
  font-family: monospace;
  font-size: 0.9em;
}

.editor-content :deep(.ProseMirror a) {
  color: #4356e0;
  text-decoration: underline;
  cursor: pointer;
}

.editor-content :deep(.ProseMirror ul),
.editor-content :deep(.ProseMirror ol) {
  padding-left: 1.5em;
  margin: 0.5em 0;
}

.editor-content :deep(.ProseMirror li) {
  margin: 0.25em 0;
}

.editor-content :deep(.ProseMirror h1) {
  font-size: 1.5em;
  font-weight: 700;
  margin: 0.5em 0;
}

.editor-content :deep(.ProseMirror h2) {
  font-size: 1.3em;
  font-weight: 600;
  margin: 0.5em 0;
}

.editor-content :deep(.ProseMirror h3) {
  font-size: 1.1em;
  font-weight: 600;
  margin: 0.5em 0;
}

/* Scrollbar styling */
.editor-content::-webkit-scrollbar {
  width: 6px;
}

.editor-content::-webkit-scrollbar-track {
  background: transparent;
}

.editor-content::-webkit-scrollbar-thumb {
  background: rgba(0, 0, 0, 0.15);
  border-radius: 10px;
}

.editor-content::-webkit-scrollbar-thumb:hover {
  background: rgba(0, 0, 0, 0.25);
}
</style>
