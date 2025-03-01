<template>
  <div class="chu-xin">
    <h1>main</h1>

    <router-view />
    <router-link to="/app/app-vue3">vue</router-link> |
    <router-link to="/app/app-react">react</router-link>
  </div>
</template>

<style>
.chu-xin{
  color: aqua !important;
}
</style>


<script setup lang="ts">
</script>