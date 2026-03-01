<script setup lang="ts">
defineProps<{
  icon: string
  title: string
  description: string
  iconColorClass?: string
  iconBgClass?: string
}>()
</script>

<template>
  <div
    class="bg-surface-light dark:bg-surface-dark p-6 rounded-xl border border-gray-100 dark:border-gray-700 shadow-soft hover:shadow-lg transition-shadow duration-300 group"
  >
    <div
      :class="[
        'w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300',
        iconBgClass || 'bg-blue-100 dark:bg-blue-900/30',
      ]"
    >
      <span :class="['material-icons-round', iconColorClass || 'text-primary']">
        {{ icon }}
      </span>
    </div>
    <h3 class="text-lg font-bold text-gray-900 dark:text-white mb-2">
      {{ title }}
    </h3>
    <p class="text-gray-500 dark:text-gray-400 text-sm leading-relaxed">
      {{ description }}
    </p>
  </div>
</template>
