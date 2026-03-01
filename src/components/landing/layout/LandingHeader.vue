<script setup lang="ts">
// Components
import ToggleDarkMode from '@/components/common/ToggleDarkMode.vue'
import ToggleMobileMenu from '@/components/common/ToggleMobileMenu.vue'

// Icons
import { NotebookPen } from 'lucide-vue-next'
</script>

<template>
  <header
    class="py-4 sticky top-0 z-50 w-full backdrop-blur-md bg-background/80 flex item-center justify-between"
  >
    <div class="flex items-center gap-1">
      <NotebookPen />
      <div>Notely</div>
    </div>
    <div class="flex items-center gap-4">
      <ToggleDarkMode />
      <ToggleMobileMenu />
    </div>
  </header>
</template>
