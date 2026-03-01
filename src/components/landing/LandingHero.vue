<script setup lang="ts">
import Button from '@/components/ui/button/Button.vue'
import { Github } from 'lucide-vue-next'
</script>

<template>
  <section class="relative pt-20 pb-32 lg:pt-32 lg:pb-40">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
      <h1 class="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-6">
        Collaborate. Think.
        <span class="text-primary relative inline-block">
          Create.
          <svg
            class="absolute w-full h-3 -bottom-1 left-0 text-blue-200 dark:text-blue-900/50 -z-10"
            preserveAspectRatio="none"
            viewBox="0 0 100 10"
          >
            <path d="M0 5 Q 50 10 100 5" fill="none" stroke="currentColor" stroke-width="8"></path>
          </svg>
        </span>
      </h1>
      <p class="mt-4 max-w-2xl mx-auto text-xl text-gray-500 dark:text-gray-400 leading-relaxed">
        Notely is the minimal, real-time workspace for teams to capture ideas, sketch flows, and
        write documentation together.
      </p>
      <div class="mt-10 flex justify-center gap-4 flex-col sm:flex-row">
        <Button> Start a Room </Button>
        <Button variant="outline"> <Github /> Github </Button>
      </div>
    </div>
  </section>
</template>
