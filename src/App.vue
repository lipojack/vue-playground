<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import { NConfigProvider, NMessageProvider } from 'naive-ui'
</script>

<template>
  <n-config-provider>
    <n-message-provider>
      <header>

        <div class="wrapper">
            <nav>
              <RouterLink to="/">Home</RouterLink>
              <RouterLink to="/about">About</RouterLink>
              <RouterLink to="/info">Info</RouterLink>
            </nav>
        </div>
      </header>
      <RouterView />
    </n-message-provider>
  </n-config-provider>

</template>
