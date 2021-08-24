<template>
  <div class="p-5 shadow rounded bg-white">
    <div class="py-2">
      <!-- <img :src="data.thumbnailUrl" /> -->
      <span class="font-bold">Title:</span>
      {{ data.title }}
    </div>
    <div class="py-2">
      <!-- {{ data }} -->
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