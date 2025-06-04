<script setup lang="ts">
import { RouterView } from 'vue-router'
</script>

<template>
  <RouterView />
</template>

<style>
html {
  scroll-behavior: smooth;
}

.text-4xl {
  font-size: 2.25rem;
}

.text-2xl {
  font-size: 1.5rem;
}

.text-sm {
  font-size: 0.875rem;
}

.rounded-lg {
  border-radius: 0.5rem;
}

.rounded-full {
  border-radius: 9999px;
}

.shadow-2xl {
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
}

.max-w-full {
  max-width: 100%;
}

.h-auto {
  height: auto;
}

.w-12 {
  width: 3rem;
}

.h-12 {
  height: 3rem;
}

.font-bold {
  font-weight: 700;
}

.italic {
  font-style: italic;
}

.gap-12 {
  gap: 3rem;
}

.items-start {
  align-items: flex-start;
}

.text-gray-400 {
  color: #9ca3af;
}

.space-y-2 > * + * {
  margin-top: 0.5rem;
}

.gap-2 {
  gap: 0.5rem;
}

.mb-6 {
  margin-bottom: 1.5rem;
}

.mb-2 {
  margin-bottom: 0.5rem;
}

.mt-6 {
  margin-top: 1.5rem;
}
</style>
