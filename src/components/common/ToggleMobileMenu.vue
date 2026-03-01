<script setup lang="ts">
// Components Import
import TogglePopover from '@/components/common/TogglePopover.vue'

// Icons Import
import { Menu } from 'lucide-vue-next'

import { RouterLink } from 'vue-router'
import { NAV_ITEMS } from '@/constants/nav.ts'
</script>

<template>
  <TogglePopover>
    <template #trigger>
      <Menu />
    </template>
    <template #content>
      <div class="flex flex-col gap-4">
        <div v-for="(navItem, index) in NAV_ITEMS" :key="navItem.label">
          <span>{{ index + 1 }}: </span>
          <RouterLink :to="navItem.path">{{ navItem.label }}</RouterLink>
        </div>
      </div>
    </template>
  </TogglePopover>
</template>
