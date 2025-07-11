<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <div class="flex flex-col h-screen bg-red-100">
    <!-- Sticky Header -->
    <header
      class="sticky top-0 z-50 p-4 shadow bg-blue-100"
    >
      <h1 class="text-xl font-semibold">Dashboard Header</h1>
    </header>

    <div class="flex flex-1 overflow-hidden">
    <!-- Sidebar -->
      <aside class="flex-1 w-128 bg-gray-20 p-4 overflow-y-auto h-screen">
        <nav class="flex flex-col space-y-2">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/info">Info</RouterLink>
        </nav>
      </aside>

      <!-- Main Content -->
      <main class="flex-4 overflow-y-auto p-6 bg-green-50">
        <RouterView />
      </main>
    </div>
  </div>

</template>
