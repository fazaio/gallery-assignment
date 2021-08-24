<template>
  <div class="text-gray-600 bg-gray-50 min-h-screen">
    <div class="container mx-auto overflow-auto">
      <div class="float-left text-2xl font-bold text-blue-500 py-5">
        GALLERY
        <div class="text-sm font-thin text-gray-500">
          Full-stack Assignment.
        </div>
      </div>
      <div class="float-right py-5 px-2">
        <button
          @click="$router.push({ path: '/user/auth' })"
          class="p-2 bg-white text-gray-300 text-sm rounded shadow"
        >
          Login
        </button>
      </div>
    </div>
    <div class="container mt-3 mx-auto">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
};
</script>

<style>
</style>
