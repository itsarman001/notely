<script setup lang="ts">
import LandingPage from '@/components/landing/LandingIndex.vue'
import LandingHeader from '@/components/landing/layout/LandingHeader.vue'
import LandingFooter from '@/components/landing/layout/LandingFooter.vue'
</script>

<template>
  <div class="min-h-screen px-6 flex items-center flex-col bg-background text-foreground">
    <LandingHeader />
    <main class="flex-1">
      <LandingPage />
    </main>
    <LandingFooter />
  </div>
</template>
