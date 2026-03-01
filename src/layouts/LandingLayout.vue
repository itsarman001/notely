<script setup lang="ts">
import LandingIndex from '@/components/landing/Index.vue'
import LandingHeader from '@/components/landing/layout/LandingHeader.vue'
import LandingFooter from '@/components/landing/layout/LandingFooter.vue'
</script>

<template>
  <div class="min-h-screen px-6 flex items-center flex-col bg-background text-foreground">
    <LandingHeader />
    <LandingIndex />
    <LandingFooter />
  </div>
</template>
