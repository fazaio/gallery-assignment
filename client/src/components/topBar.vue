<template>
  <div class="container mx-auto overflow-auto">
    <div
      @click="$router.push('/')"
      class="float-left text-2xl font-bold text-blue-500 py-5"
    >
      GALLERY
      <div class="text-sm font-thin text-gray-500">Full-stack Assignment.</div>
    </div>
    <div class="float-right py-5 px-2">
      <button
        @click="action"
        class="p-2 bg-white text-gray-300 text-sm rounded shadow"
      >
        {{ status }}
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["status"],
  methods: {
    action() {
      localStorage.removeItem("token");
      this.$router.push("/login");
    },
  },
};
</script>

<style>
</style>