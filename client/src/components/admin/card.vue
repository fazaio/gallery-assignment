<template>
  <div class="p-5 border rounded bg-white">
    <div class="py-2">
      <!-- <img :src="data.url" /> -->
      <span class="font-bold">Title:</span>
      {{ data.title }}
    </div>
  </div>
</template>

<script>
export default {
  props: ["data"],
};
</script>

<style>
</style>