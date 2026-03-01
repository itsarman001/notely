<script setup lang="ts">
import FeatureCard from './FeatureCard.vue'

const features = [
  {
    icon: 'groups',
    title: 'Real-time Collaboration',
    description:
      'Work together with your team on the same canvas. See cursors and edits live as they happen.',
  },
  {
    icon: 'text_fields',
    title: 'Markdown & Rich Text',
    description:
      'Write beautifully formatted docs with full markdown support and rich text components.',
    iconColorClass: 'text-purple-600 dark:text-purple-400',
    iconBgClass: 'bg-purple-100 dark:bg-purple-900/30',
  },
  {
    icon: 'share',
    title: 'Shareable Rooms',
    description:
      'Create a room instantly and share it with a simple link. No signup required for guests.',
    iconColorClass: 'text-green-600 dark:text-green-400',
    iconBgClass: 'bg-green-100 dark:bg-green-900/30',
  },
  {
    icon: 'bolt',
    title: 'Lightweight & Fast',
    description:
      'Built for speed. Loads instantly and runs smoothly even with thousands of elements on screen.',
    iconColorClass: 'text-orange-600 dark:text-orange-400',
    iconBgClass: 'bg-orange-100 dark:bg-orange-900/30',
  },
]
</script>

<template>
  <section class="py-20">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-base text-primary font-semibold tracking-wide uppercase">Capabilities</h2>
        <p
          class="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 dark:text-white sm:text-4xl"
        >
          Everything you need to ship faster
        </p>
      </div>
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <FeatureCard v-for="feature in features" :key="feature.title" v-bind="feature" />
      </div>
    </div>
  </section>
</template>
