<script setup lang="ts">
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import Button from '@/components/ui/button/Button.vue'
</script>

<template>
  <Popover>
    <PopoverTrigger as-child>
      <Button variant="outline">
        <slot name="trigger"> <span>Open</span> </slot>
      </Button>
    </PopoverTrigger>
    <PopoverContent>
      <slot name="content"> Place content for the popover here. </slot>
    </PopoverContent>
  </Popover>
</template>
