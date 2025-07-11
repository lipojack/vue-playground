<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider } from 'naive-ui'
</script>

<template>
  <!-- <n-config-provider> -->
    <div class="bg-blue-500 text-white p-4">
    Test Tailwind BG
  </div>
    <div class="flex flex-col h-screen bg-red-100">
      <!-- Sticky Header -->
      <header
        class="sticky top-0 z-50 p-4 shadow bg-red-50"
      >
        <h1 class="text-xl font-semibold">Dashboard Header</h1>
      </header>

      <div class="flex ">
      <!-- Sidebar -->
        <aside class="w-128 bg-gray-100 p-4 overflow-y-auto h-screen">
          <nav class="flex flex-col space-y-2">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="/about">About</RouterLink>
            <RouterLink to="/info">Info</RouterLink>
          </nav>
        </aside>

        <!-- Main Content -->
        <main class="overflow-y-auto p-6 bg-gray-50">
          <RouterView />
        </main>
      </div>
    </div>
  <!-- </n-config-provider> -->

</template>
