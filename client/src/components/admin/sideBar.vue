<template>
  <div class="p-4 bg-white rounded shadow">
    Welcome Admin!
    <div class="mt-6">
      <button
        @click="$router.push({ path: '/dashboard' })"
        class="text-left block w-full text-xs px-4 py-2 bg-gray-50"
      >
        Photo
      </button>
      <button
        @click="$router.push({ path: '/dashboard/albums' })"
        class="text-left block w-full text-xs px-4 py-2 bg-gray-50 mt-3"
      >
        Albums
      </button>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style>
</style>